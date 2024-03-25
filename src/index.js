import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18next from 'i18next';
import WEATHER_NAMES from './utils/constant';

i18next.init({
  lng: 'en',
  resources: {
    en: {
      translation:{
        "NAME" : WEATHER_NAMES.en
      }
    },
    hi: {
      translation:{
       "NAME": WEATHER_NAMES.hi
      } 
        
    },
  },
});



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <I18nextProvider i18n={i18next}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </I18nextProvider>
);
reportWebVitals();
