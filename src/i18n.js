import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    ru: {
        translation: {
            nav: {
                wms: 'WMS система',
                yms: 'YMS система',
                projects: 'Проекты',
                workflow: 'Как мы работаем',
                equipment: 'Оборудование',
                about: 'О нас',
                contacts: 'Контакты',
            },
            phone: '+7 495 504‑39‑09',
            cta: 'Получить КП',
            login: 'Войти',
            logout: 'Выйти',
            productList: 'Список товаров',
            addProduct: 'Добавить товар',
        },
    },
    en: {
        translation: {
            nav: {
                wms: 'WMS system',
                yms: 'YMS system',
                projects: 'Projects',
                workflow: 'How we work',
                equipment: 'Equipment',
                about: 'About us',
                blog: 'Blog',
                contacts: 'Contacts',
            },
            phone: '+7 495 504‑39‑09',
            cta: 'Get proposal',
            login: 'Login',
            logout: 'Logout',
            productList: 'Products',
            addProduct: 'Add product',
        },
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'ru',
        fallbackLng: 'ru',
        interpolation: { escapeValue: false },
    });

export default i18n;