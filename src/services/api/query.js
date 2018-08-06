
/* eslint-disable */
module.exports = {
  opportunity: 'q=SELECT+Id,Name,OwnerId,AccountId,Amount,CloseDate,IsClosed,createdbyid,createddate,isdeleted,description,fiscalyear,fiscalquarter,ForecastCategory,HasOpportunityLineItem,LastActivityDate,LastModifiedById,LastModifiedDate,LastReferencedDate,LastViewedDate,LeadSource,NextStep,Pricebook2Id,Probability,StageName,SystemModstamp,Type,IsWon+from+Opportunity',
  opportunityRecent: 'q=SELECT+Id,Name,OwnerId,AccountId,Amount,CloseDate,IsClosed,createdbyid,createddate,isdeleted,description,fiscalyear,fiscalquarter,ForecastCategory,HasOpportunityLineItem,LastActivityDate,LastModifiedById,LastModifiedDate,LastReferencedDate,LastViewedDate,LeadSource,NextStep,Pricebook2Id,Probability,StageName,SystemModstamp,Type,IsWon+from+Opportunity+order+by+LastModifiedDate+desc+limit+10',
  event: 'q=SELECT+id,Subject,AccountId,IsAllDayEvent,IsArchived,OwnerId,IsRecurrence,CreatedById,CreatedDate,ActivityDate,IsDeleted,Description,DurationInMinutes,EndDateTime,RecurrenceEndDateOnly,GroupEventType,IsChild,IsGroupEvent,LastModifiedById,LastModifiedDate,Location,WhoId,IsPrivate,RecurrenceActivityId,RecurrenceDayOfMonth,RecurrenceDayOfWeekMask,RecurrenceInstance,RecurrenceInterval,RecurrenceMonthOfYear,RecurrenceTimeZoneSidKey,RecurrenceType,WhatId,ReminderDateTime,IsReminderSet,ShowAs,StartDateTime,RecurrenceStartDateTime,SystemModstamp,ActivityDateTime,EventSubtype+from+Event',
  eventRecent: 'q=SELECT+id,Subject,AccountId,IsAllDayEvent,IsArchived,OwnerId,IsRecurrence,CreatedById,CreatedDate,ActivityDate,IsDeleted,Description,DurationInMinutes,EndDateTime,RecurrenceEndDateOnly,GroupEventType,IsChild,IsGroupEvent,LastModifiedById,LastModifiedDate,Location,WhoId,IsPrivate,RecurrenceActivityId,RecurrenceDayOfMonth,RecurrenceDayOfWeekMask,RecurrenceInstance,RecurrenceInterval,RecurrenceMonthOfYear,RecurrenceTimeZoneSidKey,RecurrenceType,WhatId,ReminderDateTime,IsReminderSet,ShowAs,StartDateTime,RecurrenceStartDateTime,SystemModstamp,ActivityDateTime,EventSubtype+from+Event+order+by+LastModifiedDate+desc+limit+10',
  task: "q=SELECT+id,subject,AccountId,IsArchived,OwnerId,CallDurationInSeconds,CallObject,CallDisposition,CallType,IsClosed,Description,IsRecurrence,CreatedById,CreatedDate,IsDeleted,ActivityDate,RecurrenceEndDateOnly,IsHighPriority,LastModifiedById,LastModifiedDate,WhoId,Priority,RecurrenceActivityId,RecurrenceDayOfMonth,RecurrenceDayOfWeekMask,RecurrenceInstance,RecurrenceInterval,RecurrenceMonthOfYear,RecurrenceTimeZoneSidKey,RecurrenceType,WhatId,ReminderDateTime,IsReminderSet,RecurrenceRegeneratedType,RecurrenceStartDateOnly,Status,SystemModstamp,TaskSubtype+from+Task+where+tasksubtype='call'",
  taskRecent: "q=SELECT+id,subject,AccountId,IsArchived,OwnerId,CallDurationInSeconds,CallObject,CallDisposition,CallType,IsClosed,Description,IsRecurrence,CreatedById,CreatedDate,IsDeleted,ActivityDate,RecurrenceEndDateOnly,IsHighPriority,LastModifiedById,LastModifiedDate,WhoId,Priority,RecurrenceActivityId,RecurrenceDayOfMonth,RecurrenceDayOfWeekMask,RecurrenceInstance,RecurrenceInterval,RecurrenceMonthOfYear,RecurrenceTimeZoneSidKey,RecurrenceType,WhatId,ReminderDateTime,IsReminderSet,RecurrenceRegeneratedType,RecurrenceStartDateOnly,Status,SystemModstamp,TaskSubtype+from+Task+where+tasksubtype='call'+order+by+LastModifiedDate+desc+limit+10",
  account: 'q=SELECT+MasterRecordId,Id,Name,OwnerId,AccountSource,BillingStreet,BillingCity,BillingState,BillingPostalCode,BillingCountry,CreatedById,CreatedDate,Jigsaw,IsDeleted,Description,NumberOfEmployees,Fax,Industry,JigsawCompanyId,LastActivityDate,LastModifiedById,LastModifiedDate,LastReferencedDate,LastViewedDate,ParentId,Phone,PhotoUrl,SicDesc,ShippingStreet,ShippingCity,ShippingState,ShippingPostalCode,ShippingCountry,SystemModstamp,Type,Website+from+Account',
  accountRecent: 'q=SELECT+MasterRecordId,Id,Name,OwnerId,AccountSource,BillingStreet,BillingCity,BillingState,BillingPostalCode,BillingCountry,CreatedById,CreatedDate,Jigsaw,IsDeleted,Description,NumberOfEmployees,Fax,Industry,JigsawCompanyId,LastActivityDate,LastModifiedById,LastModifiedDate,LastReferencedDate,LastViewedDate,ParentId,Phone,PhotoUrl,SicDesc,ShippingStreet,ShippingCity,ShippingState,ShippingPostalCode,ShippingCountry,SystemModstamp,Type,Website+from+Account+order+by+LastModifiedDate+desc+limit+10',
  users: 'q=SELECT+Email,Id,FirstName,LastName,Phone,LanguageLocaleKey,LocaleSidKey,ReceivesAdminInfoEmails,FullPhotoUrl+from+User',
  apexClass: "q=SELECT+Name+from+ApexClass+where+Name='h7WebhookClass'",
  apexTrigger: 'q=SELECT+Name+from+ApexTrigger',

  opportunityCron: 'q=SELECT+Id,Name,OwnerId,AccountId,Amount,CloseDate,IsClosed,createdbyid,createddate,isdeleted,description,fiscalyear,fiscalquarter,ForecastCategory,HasOpportunityLineItem,LastActivityDate,LastModifiedById,LastModifiedDate,LastReferencedDate,LastViewedDate,LeadSource,NextStep,Pricebook2Id,Probability,StageName,SystemModstamp,Type,IsWon+FROM+Opportunity+WHERE+LastModifiedDate>',
  eventCron: 'q=SELECT+id,Subject,AccountId,IsAllDayEvent,IsArchived,OwnerId,IsRecurrence,CreatedById,CreatedDate,ActivityDate,IsDeleted,Description,DurationInMinutes,EndDateTime,RecurrenceEndDateOnly,GroupEventType,IsChild,IsGroupEvent,LastModifiedById,LastModifiedDate,Location,WhoId,IsPrivate,RecurrenceActivityId,RecurrenceDayOfMonth,RecurrenceDayOfWeekMask,RecurrenceInstance,RecurrenceInterval,RecurrenceMonthOfYear,RecurrenceTimeZoneSidKey,RecurrenceType,WhatId,ReminderDateTime,IsReminderSet,ShowAs,StartDateTime,RecurrenceStartDateTime,SystemModstamp,ActivityDateTime,EventSubtype+FROM+Event+WHERE+LastModifiedDate>',
  taskCron: 'q=SELECT+id,subject,AccountId,IsArchived,OwnerId,CallDurationInSeconds,CallObject,CallDisposition,CallType,IsClosed,Description,IsRecurrence,CreatedById,CreatedDate,IsDeleted,ActivityDate,RecurrenceEndDateOnly,IsHighPriority,LastModifiedById,LastModifiedDate,WhoId,Priority,RecurrenceActivityId,RecurrenceDayOfMonth,RecurrenceDayOfWeekMask,RecurrenceInstance,RecurrenceInterval,RecurrenceMonthOfYear,RecurrenceTimeZoneSidKey,RecurrenceType,WhatId,ReminderDateTime,IsReminderSet,RecurrenceRegeneratedType,RecurrenceStartDateOnly,Status,SystemModstamp,TaskSubtype+FROM+Task+WHERE+LastModifiedDate>',
  accountCron: 'q=SELECT+MasterRecordId,Id,Name,OwnerId,AccountSource,BillingStreet,BillingCity,BillingState,BillingPostalCode,BillingCountry,CreatedById,CreatedDate,Jigsaw,IsDeleted,Description,NumberOfEmployees,Fax,Industry,JigsawCompanyId,LastActivityDate,LastModifiedById,LastModifiedDate,LastReferencedDate,LastViewedDate,ParentId,Phone,PhotoUrl,SicDesc,ShippingStreet,ShippingCity,ShippingState,ShippingPostalCode,ShippingCountry,SystemModstamp,Type,Website+FROM+Account+WHERE+LastModifiedDate>',
};

// module.exports = {
//   opportunity: 'q=SELECT+Id,Name,OwnerId,AccountId,Amount,CloseDate,IsClosed,createdbyid,createddate,isdeleted,description,expectedRevenue,fiscalyear,fiscalquarter,ForecastCategory,HasOpportunityLineItem,LastActivityDate,LastModifiedById,LastModifiedDate,LastReferencedDate,LastViewedDate,LeadSource,NextStep,Pricebook2Id,CampaignId,IsPrivate,Probability,TotalOpportunityQuantity,StageName,SystemModstamp,Type,IsWon+from+Opportunity',
//   opportunityRecent: 'q=SELECT+Id,Name,OwnerId,AccountId,Amount,CloseDate,IsClosed,createdbyid,createddate,isdeleted,description,expectedRevenue,fiscalyear,fiscalquarter,ForecastCategory,HasOpportunityLineItem,LastActivityDate,LastModifiedById,LastModifiedDate,LastReferencedDate,LastViewedDate,LeadSource,NextStep,Pricebook2Id,CampaignId,IsPrivate,Probability,TotalOpportunityQuantity,StageName,SystemModstamp,Type,IsWon+from+Opportunity+order+by+LastModifiedDate+desc+limit+10',
//   event: 'q=SELECT+id,Subject,AccountId,IsAllDayEvent,IsArchived,OwnerId,IsRecurrence,CreatedById,CreatedDate,ActivityDate,IsDeleted,Description,DurationInMinutes,EndDateTime,RecurrenceEndDateOnly,GroupEventType,IsChild,IsGroupEvent,LastModifiedById,LastModifiedDate,Location,WhoId,IsPrivate,RecurrenceActivityId,RecurrenceDayOfMonth,RecurrenceDayOfWeekMask,RecurrenceInstance,RecurrenceInterval,RecurrenceMonthOfYear,RecurrenceTimeZoneSidKey,RecurrenceType,WhatId,ReminderDateTime,IsReminderSet,ShowAs,StartDateTime,RecurrenceStartDateTime,SystemModstamp,ActivityDateTime,EventSubtype+from+Event',
//   eventRecent: 'q=SELECT+id,Subject,AccountId,IsAllDayEvent,IsArchived,OwnerId,IsRecurrence,CreatedById,CreatedDate,ActivityDate,IsDeleted,Description,DurationInMinutes,EndDateTime,RecurrenceEndDateOnly,GroupEventType,IsChild,IsGroupEvent,LastModifiedById,LastModifiedDate,Location,WhoId,IsPrivate,RecurrenceActivityId,RecurrenceDayOfMonth,RecurrenceDayOfWeekMask,RecurrenceInstance,RecurrenceInterval,RecurrenceMonthOfYear,RecurrenceTimeZoneSidKey,RecurrenceType,WhatId,ReminderDateTime,IsReminderSet,ShowAs,StartDateTime,RecurrenceStartDateTime,SystemModstamp,ActivityDateTime,EventSubtype+from+Event+order+by+LastModifiedDate+desc+limit+10',
//   task: "q=SELECT+id,subject,AccountId,IsArchived,OwnerId,CallDurationInSeconds,CallObject,CallDisposition,CallType,IsClosed,Description,IsRecurrence,CreatedById,CreatedDate,IsDeleted,ActivityDate,RecurrenceEndDateOnly,IsHighPriority,LastModifiedById,LastModifiedDate,WhoId,Priority,RecurrenceActivityId,RecurrenceDayOfMonth,RecurrenceDayOfWeekMask,RecurrenceInstance,RecurrenceInterval,RecurrenceMonthOfYear,RecurrenceTimeZoneSidKey,RecurrenceType,WhatId,ReminderDateTime,IsReminderSet,RecurrenceRegeneratedType,RecurrenceStartDateOnly,Status,SystemModstamp,TaskSubtype+from+Task+where+tasksubtype='call'",
//   taskRecent: "q=SELECT+id,subject,AccountId,IsArchived,OwnerId,CallDurationInSeconds,CallObject,CallDisposition,CallType,IsClosed,Description,IsRecurrence,CreatedById,CreatedDate,IsDeleted,ActivityDate,RecurrenceEndDateOnly,IsHighPriority,LastModifiedById,LastModifiedDate,WhoId,Priority,RecurrenceActivityId,RecurrenceDayOfMonth,RecurrenceDayOfWeekMask,RecurrenceInstance,RecurrenceInterval,RecurrenceMonthOfYear,RecurrenceTimeZoneSidKey,RecurrenceType,WhatId,ReminderDateTime,IsReminderSet,RecurrenceRegeneratedType,RecurrenceStartDateOnly,Status,SystemModstamp,TaskSubtype+from+Task+where+tasksubtype='call'+order+by+LastModifiedDate+desc+limit+10",
//   account: 'q=SELECT+MasterRecordId,Id,Name,AccountNumber,OwnerId,Site,AccountSource,AnnualRevenue,BillingStreet,BillingCity,BillingState,BillingPostalCode,BillingCountry,CreatedById,CreatedDate,Jigsaw,IsDeleted,Description,NumberOfEmployees,Fax,Industry,JigsawCompanyId,LastActivityDate,LastModifiedById,LastModifiedDate,LastReferencedDate,LastViewedDate,Ownership,ParentId,Phone,PhotoUrl,Rating,Sic,SicDesc,ShippingStreet,ShippingCity,ShippingState,ShippingPostalCode,ShippingCountry,SystemModstamp,TickerSymbol,Type,Website+from+Account',
//   accountRecent: 'q=SELECT+MasterRecordId,Id,Name,AccountNumber,OwnerId,Site,AccountSource,AnnualRevenue,BillingStreet,BillingCity,BillingState,BillingPostalCode,BillingCountry,CreatedById,CreatedDate,Jigsaw,IsDeleted,Description,NumberOfEmployees,Fax,Industry,JigsawCompanyId,LastActivityDate,LastModifiedById,LastModifiedDate,LastReferencedDate,LastViewedDate,Ownership,ParentId,Phone,PhotoUrl,Rating,Sic,SicDesc,ShippingStreet,ShippingCity,ShippingState,ShippingPostalCode,ShippingCountry,SystemModstamp,TickerSymbol,Type,Website+from+Account+order+by+LastModifiedDate+desc+limit+10',
//   users: 'q=SELECT+Email,Id,FirstName,LastName,Phone,LanguageLocaleKey,LocaleSidKey,ReceivesAdminInfoEmails,FullPhotoUrl+from+User',
//   apexClass: "q=SELECT+Name+from+ApexClass+where+Name='h7WebhookClass'",
//   apexTrigger: 'q=SELECT+Name+from+ApexTrigger'
// };