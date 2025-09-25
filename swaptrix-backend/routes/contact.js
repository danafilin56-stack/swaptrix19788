const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/', async (req, res) => {
  const { message } = req.body;
  try {
    await axios.post(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
      chat_id: process.env.TELEGRAM_CHAT_ID,
      text: `Swaptrix Support Ticket: ${message}`
    });
    res.json({ status: 'Message sent to Swaptrix support' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;