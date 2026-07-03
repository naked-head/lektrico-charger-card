import en from './en.js';
import it from './it.js';

// To add a language:
//   1. copy en.js to <code>.js (e.g. de.js) and translate the values —
//      missing keys automatically fall back to English;
//   2. import it here and add it to LANGUAGES;
//   3. (optional) add the language to the editor dropdown in editor.js.
export const LANGUAGES = { en, it };

export const bestLanguage = (lang) => {
  const short = (lang || 'en').split('-')[0].toLowerCase();
  return LANGUAGES[short] ? short : 'en';
};

export const localize = (lang, section, key) =>
  LANGUAGES[lang]?.[section]?.[key] ??
  LANGUAGES.en[section]?.[key] ??
  key;
