const express = require('express');
const api = require('../services/api');
const formatData = require('../services/formatData');
// const webhooks = require('../services/webhooks');
const logger = require('../utils/logger');

const router = express.Router();

router.get('/', async (req, res) => {
  const { code } = req.query;
  try {
    if (!code) {
      throw new Error('code is missing');
    }

    const credentials = await api.getCredentials(code);
    if (!credentials || !credentials.id) {
      throw new Error('no credentials');
    }
    const userInfo = await api.getInfoUser(credentials.id, credentials.access_token);
    res.status(200).send(formatData.userInfo({ ...userInfo, credentials }));
    // webhooks.set(credentials);
  } catch (e) {
    logger.error(__filename, 'authentication', e.message);
    res.status(400).json(e.message);
  }
});

module.exports = router;
