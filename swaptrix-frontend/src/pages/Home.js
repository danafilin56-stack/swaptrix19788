import { useTranslation } from 'react-i18next';
import SwapWidget from '../components/SwapWidget';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactUs from '../components/ContactUs';

function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <Header />
      <section>
        <h1>{t('welcome')}</h1>
        <SwapWidget />
      </section>
      <section>
        <h2>{t('about_us')}</h2>
        <p>{t('about_us_text')}</p>
      </section>
      <section>
        <h2>{t('why_choose_us')}</h2>
        <p>Secure, fast, and reliable crypto exchange.</p>
      </section>
      <section>
        <h2>{t('how_it_works')}</h2>
        <p>1. Choose currencies. 2. Enter amount. 3. Swap!</p>
      </section>
      <section>
        <h2>{t('partners')}</h2>
        <p>ByBit, Binance, and more.</p>
      </section>
      <section>
        <h2>{t('faq')}</h2>
        <p>Common questions about Swaptrix.</p>
      </section>
      <section>
        <ContactUs />
      </section>
      <Footer />
    </div>
  );
}
export default Home;