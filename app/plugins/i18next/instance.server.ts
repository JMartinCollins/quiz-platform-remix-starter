import { createInstance } from 'i18next';
import i18nextServer from '~/modules/i18next/i18next';
import { initReactI18next } from 'react-i18next';
import { initOptions } from "~/modules/i18next/config";
import { EntryContext } from '@remix-run/node';

/**
 * Initialized in the Remix entry.server and passed to React provider.
 */
export const initI18NextServer = async (request: Request, remixContext: EntryContext) => {
    const i18nextInstance = createInstance();
    const lng = await i18nextServer.getLocale(request);
    const ns = i18nextServer.getRouteNamespaces(remixContext);

    await i18nextInstance.use(initReactI18next).init({ ...initOptions, lng, ns });
    return i18nextInstance;
}
