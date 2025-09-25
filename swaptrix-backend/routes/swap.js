const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/', async (req, res) => {
  const { from, to, amount } = req.body;
  try {
    const response = await axios.get('https://api.bybit.com/v2/public/tickers', {
      params: { symbol: `${from}${to}` }
    });
    res.json({ rate: response.data.result[0].last_price, amount });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;