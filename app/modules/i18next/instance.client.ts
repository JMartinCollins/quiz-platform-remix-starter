// Remix imports
import { getInitialNamespaces } from 'remix-i18next/client';

// Local imports
import config from "./config";

// i18next imports
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";


/**
 * This goes in the entry.client
 * it prepares the i18next instance to pass into the React provider for the client
 */
export const initI18NextClientInstance = () =>
    // disabled since I can't control their API.
    // eslint-disable-next-line import/no-named-as-default-member
    i18next
        .use(initReactI18next)
        .use(LanguageDetector)
        .use(Backend)
        .init({
            ...config,
            // resources: // do not include resources here or they will all be sent to the client.
            // This function detects the namespaces your routes rendered while SSR use
            ns: getInitialNamespaces(),
            backend: { loadPath: "/api/translations?lng={{lng}}&ns={{ns}}" },
            detection: {
                // Here only enable htmlTag detection, we'll detect the language only
                // server-side with remix-i18next, by using the `<html lang>` attribute
                // we can communicate to the client the language detected server-side
                order: ["htmlTag"],
                // Because we only use htmlTag, there's no reason to cache the language
                // on the browser, so we disable it
                caches: [],
            },
        });