const api = require('../api');
const saveData = require('../saveData');
const formatData = require('../formatData');
const heptawardApi = require('../heptawardApi');

const dataTypeForEchoes = ['opportunity', 'task', 'event'];

const extractCustomFilter = (customFilters, type) => (customFilters && customFilters[type]) || [];

const checkRecords = (records, allIntegrationsUserIds, integrationTeam) => {
  if (!allIntegrationsUserIds) return records;
  return records.filter(record => allIntegrationsUserIds.includes(record.OwnerId)).map(record => {
    return {
      ...record,
      teamId: integrationTeam,
    };
  });
};


const syncByType = async (integrationInfo, dataType, user, allIntegrations, special, lastModifiedDateTZ, pathQuery) => {
  try {
    let hasMore = false;
    let urlPath = '';
    let results = null;
    const allIntegrationsUserIds = allIntegrations && allIntegrations.map(i => i.integrationId || 'NoUserIntegrationId');

    do {
      if (!hasMore) {
        results = await api.getData(
          integrationInfo.instanceUrl, integrationInfo.token, special || dataType,
          lastModifiedDateTZ, pathQuery, integrationInfo.restrictions, dataType === 'opportunity' && integrationInfo.addFields,
          extractCustomFilter(integrationInfo.customFilters, dataType),
        );
      } else {
        results = await api.getMoreData(integrationInfo.instanceUrl, integrationInfo.token, urlPath);
      }
      if (results && results.records && results.records.length > 0) {
        urlPath = results.nextRecordsUrl;
        const dataForEchoes = await saveData(dataType, checkRecords(results.records, allIntegrationsUserIds, integrationInfo.integrationTeam));

        if (dataTypeForEchoes.includes(dataType)) {
          const formattedData = await formatData.echoesInfo(dataForEchoes, dataType, user, allIntegrations, dataType === 'opportunity'
            && integrationInfo.addFields, special && special.includes('Cron') && integrationInfo.stageNames);
          if (formattedData.toInsert.length > 0
            || formattedData.toUpdate.length > 0
            || (formattedData.toUpsert && formattedData.toUpsert.length > 0)
            || (formattedData.toDelete && formattedData.toDelete.length > 0)) {
            await heptawardApi.echoes(formattedData);
          }
        }
      }
      hasMore = (results && results.done === false) || false;
    } while (hasMore);
  } catch (e) {
    throw Error(`${__filename}, syncByType (${dataType}, user: ${user && user._id}), ${e.message}`);
  }
};

exports.everything = async (integrationInfo, user, allIntegrations, dateTZ, isAuto) => {
  console.log('ACCOUNT');
  await syncByType(integrationInfo, 'account', user, undefined, isAuto && 'accountAuto', dateTZ);
  console.log('OPPORTUNITY');
  await syncByType(integrationInfo, 'opportunity', user, allIntegrations, isAuto && 'opportunityAuto', dateTZ);
  console.log('TASK');
  await syncByType(integrationInfo, 'task', user, allIntegrations, isAuto && 'taskAuto', dateTZ);
  console.log('EVENT');
  await syncByType(integrationInfo, 'event', user, allIntegrations, isAuto && 'eventAuto', dateTZ);
  await heptawardApi.integration({ integration: { _id: integrationInfo._id, tokenExpiresAt: Date.now() + 7200000 } });
};

exports.syncByType = syncByType;
