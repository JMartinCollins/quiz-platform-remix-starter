import Backend from "i18next-fs-backend";
import { resolve } from "node:path";
import { RemixI18Next } from "remix-i18next/server";
import config from "./config";
import { createCookie } from '@remix-run/node';



/**
 * Helper for workign with the i18next server
 */
export const localeCookie = createCookie("lng", {
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
});

export const i18nextServer = new RemixI18Next({
    detection: {
        supportedLanguages: config.supportedLngs as string[],
        fallbackLanguage: config.fallbackLng as string,
        cookie: localeCookie,
    },
    // This is the configuration for i18next used
    // when translating messages server-side only
    i18next: {
        ...config,
        backend: {
            loadPath: resolve("./public/locales/{{lng}}/{{ns}}.json"),
        },
    },
    // The i18next plugins you want RemixI18next to use for `i18n.getFixedT` inside loaders and actions.
    // E.g. The Backend plugin for loading translations from the file system
    // Tip: You could pass `resources` to the `i18next` configuration and avoid a backend here
    plugins: [Backend],
});