/*
 * Start loading resources. This loads all resources into memory at build time. 
 */

import { Resource, ResourceLanguage } from 'i18next';

// the object that will hold all the resources. 
export const i18nResources: Resource = {};

// this must occur at the top level of the module for the bundler to load at build time. 
const translationsFiles = import.meta.glob('/app/**/translations/*.*.json', {
    eager: true,
    import: 'default',
    query: {
        type: 'json',
    }
});

Object.keys(translationsFiles).forEach((key) => {
    const [namespace, lng] = key.split('/').slice(-1)[0].split('.').slice(0, -1);
    i18nResources[lng] = i18nResources[lng] || {};
    i18nResources[lng][namespace] = translationsFiles[key] as ResourceLanguage;
});

// this must occur at the top level of the module for the bundler to load at build time. 
const localeFiles = import.meta.glob('/app/locales/**/*.json', {
    eager: true,
    import: 'default',
    query: {
        type: 'json',
    }
});

Object.keys(localeFiles).forEach((key) => {
    const [lng, namespace] = key.split('/').slice(-2);
    const cleanedNamespace = namespace.split('.')[0];
    i18nResources[lng] = i18nResources[lng] || {};
    i18nResources[lng][cleanedNamespace] = localeFiles[key] as ResourceLanguage;
});

/*
 * End loading resources. 
 */