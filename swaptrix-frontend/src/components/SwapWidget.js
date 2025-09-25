import { useState } from 'react';
import axios from 'axios';
import { useSpring, animated } from '@react-spring/web';
import { useTranslation } from 'react-i18next';

function SwapWidget() {
  const { t } = useTranslation();
  const [fromCurrency, setFromCurrency] = useState('BTC');
  const [toCurrency, setToCurrency] = useState('ETH');
  const [amount, setAmount] = useState('');
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });

  const handleSwap = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/swap', {
        from: fromCurrency,
        to: toCurrency,
        amount
      });
      alert(`Swaptrix swap successful: ${JSON.stringify(res.data)}`);
    } catch (err) {
      alert(`Swaptrix swap failed: ${err.message}`);
    }
  };

  return (
    <animated.div style={props}>
      <h3>Swaptrix Swap</h3>
      <select value={fromCurrency} onChange={e => setFromCurrency(e.target.value)}>
        <option value="BTC">BTC</option>
        <option value="ETH">ETH</option>
      </select>
      <input
        type="number"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        placeholder="Amount"
      />
      <select value={toCurrency} onChange={e => setToCurrency(e.target.value)}>
        <option value="ETH">ETH</option>
        <option value="BTC">BTC</option>
      </select>
      <button onClick={handleSwap}>{t('submit')}</button>
    </animated.div>
  );
}
export default SwapWidget;