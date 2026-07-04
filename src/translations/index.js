import en from './en.js';
import it from './it.js';
import de from './de.js';
import fr from './fr.js';
import nl from './nl.js';
import sv from './sv.js';
import da from './da.js';
import nb from './nb.js';
import ro from './ro.js';
import es from './es.js';

// To add a language:
//   1. copy en.js to <code>.js (e.g. pt.js) and translate the values —
//      missing keys automatically fall back to English;
//   2. import it here and add it to LANGUAGES;
//   3. (optional) add the language to the editor dropdown in editor.js.
export const LANGUAGES = { en, it, de, fr, nl, sv, da, nb, ro, es };

export const bestLanguage = (lang) => {
  const short = (lang || 'en').split('-')[0].toLowerCase();
  return LANGUAGES[short] ? short : 'en';
};

export const localize = (lang, section, key) =>
  LANGUAGES[lang]?.[section]?.[key] ??
  LANGUAGES.en[section]?.[key] ??
  key;
