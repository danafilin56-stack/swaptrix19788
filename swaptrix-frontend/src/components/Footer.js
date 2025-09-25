import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer>
      <p>&copy; 2025 Swaptrix. All rights reserved.</p>
      <p>{t('contact_us')}: support@swaptrix.io</p>
    </footer>
  );
}
export default Footer;