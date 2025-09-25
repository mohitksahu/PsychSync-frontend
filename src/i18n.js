import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import all language files
import en from './locales/en.json';
import hi from './locales/hi.json';
import bn from './locales/bn.json';
import gu from './locales/gu.json';
import kn from './locales/kn.json';
import ml from './locales/ml.json';
import mr from './locales/mr.json';
import or from './locales/or.json';
import pa from './locales/pa.json';
import ta from './locales/ta.json';
import te from './locales/te.json';
import ur from './locales/ur.json';
import asLang from './locales/as.json';
import ne from './locales/ne.json';
import mni from './locales/mni.json';
import brx from './locales/brx.json';
import doi from './locales/doi.json';
import ks from './locales/ks.json';
import kok from './locales/kok.json';
import mai from './locales/mai.json';
import sa from './locales/sa.json';
import sat from './locales/sat.json';
import sd from './locales/sd.json';

const resources = {
  en: { translation: en },
  hi: { translation: hi },
  bn: { translation: bn },
  gu: { translation: gu },
  kn: { translation: kn },
  ml: { translation: ml },
  mr: { translation: mr },
  or: { translation: or },
  pa: { translation: pa },
  ta: { translation: ta },
  te: { translation: te },
  ur: { translation: ur },
  as: { translation: asLang },
  ne: { translation: ne },
  mni: { translation: mni },
  brx: { translation: brx },
  doi: { translation: doi },
  ks: { translation: ks },
  kok: { translation: kok },
  mai: { translation: mai },
  sa: { translation: sa },
  sat: { translation: sat },
  sd: { translation: sd },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
