import fallbackLangData from "./locales/en.json";
import percentages from "./locales/percentages.json";

const COMPLETION_THRESHOLD = 85;

export const defaultLang = { code: "en", label: "English" };

const allLanguages = [{ code: "zh-CN", label: "简体中文" }].concat(defaultLang);

export const languages = allLanguages
  .sort((left, right) => (left.label > right.label ? 1 : -1))
  .filter((lang) => percentages[lang.code] >= COMPLETION_THRESHOLD);

export const setLanguage = async (lang) => {
  currentLang = lang;
  currentLangData = await import(`./locales/${currentLang.code}.json`);
};

let currentLang = defaultLang;
let currentLangData = {};

export const getLanguage = () => currentLang;

export const t = (path) => {
  const parts = path.split(".");
  console.log(currentLangData);
  let translation =
    findPartsForData(currentLangData, parts) ||
    findPartsForData(fallbackLangData, parts);
  if (translation === undefined) {
    throw new Error(`Can't find translation for ${path}`);
  }
  return translation;
};

const findPartsForData = (data, parts) => {
  for (let index = 0; index < parts.length; ++index) {
    const part = parts[index];
    if (data[part] === undefined) {
      return undefined;
    }
    data = data[part];
  }
  return data;
};
