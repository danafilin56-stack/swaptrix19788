import { useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

function ContactUs() {
  const { t } = useTranslation();
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:5000/api/contact', { message });
      alert('Message sent to Swaptrix support!');
    } catch (err) {
      alert('Failed to send message: ' + err.message);
    }
  };

  return (
    <div>
      <h2>{t('contact_us')}</h2>
      <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="Your message" />
      <button onClick={handleSubmit}>{t('submit')}</button>
    </div>
  );
}
export default ContactUs;