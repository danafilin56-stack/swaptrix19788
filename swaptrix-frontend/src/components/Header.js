import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t } = useTranslation();

  return (
    <header>
      <h1>Swaptrix</h1>
      <nav>
        <Link to="/">{t('welcome')}</Link>
        <Link to="/login">{t('login')}</Link>
        <Link to="/admin">Admin</Link>
      </nav>
    </header>
  );
}
export default Header;