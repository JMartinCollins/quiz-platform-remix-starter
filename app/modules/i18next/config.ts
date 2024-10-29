import { InitOptions } from 'i18next';

export const languages = [
    { code: "en", name: "English" },
    { code: "es", name: "Español" },
    { code: "zh", name: "中文" },
];

export default {
    // This is the list of languages your application supports
    supportedLngs: languages.map(({ code }) => code),
    // This is the language you want to use in case
    // if the user language is not in the supportedLngs
    fallbackLng: languages[0].code,
    // The default namespace of i18next is "translation"
    defaultNS: "common",
} as InitOptions;
