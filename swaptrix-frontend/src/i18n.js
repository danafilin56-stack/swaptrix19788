import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: 'Welcome to Swaptrix',
        about_us: 'About Us',
        about_us_text: 'Swaptrix is a leading crypto exchange platform...',
        why_choose_us: 'Why Choose Swaptrix',
        how_it_works: 'How It Works',
        partners: 'Our Partners',
        faq: 'FAQ',
        contact_us: 'Contact Us',
        login: 'Login',
        email: 'Email',
        password: 'Password',
        submit: 'Submit'
      }
    },
    ru: {
      translation: {
        welcome: 'Добро пожаловать в Swaptrix',
        about_us: 'О нас',
        about_us_text: 'Swaptrix - ведущая платформа для обмена криптовалют...',
        why_choose_us: 'Почему выбирают Swaptrix',
        how_it_works: 'Как это работает',
        partners: 'Наши партнеры',
        faq: 'Часто задаваемые вопросы',
        contact_us: 'Связаться с нами',
        login: 'Войти',
        email: 'Электронная почта',
        password: 'Пароль',
        submit: 'Отправить'
      }
    }
  },
  lng: 'ru',
  fallbackLng: 'en'
});