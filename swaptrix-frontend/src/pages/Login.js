import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

function Login() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:5000/api/users', { email, password });
      alert('Login successful');
    } catch (err) {
      setError('Login failed: ' + err.message);
    }
  };

  return (
    <div>
      <h2>{t('login')}</h2>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder={t('email')}
      />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder={t('password')}
      />
      <button onClick={handleSubmit}>{t('submit')}</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
export default Login;