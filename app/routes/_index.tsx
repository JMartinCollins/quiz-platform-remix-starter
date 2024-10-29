import { json, LoaderFunctionArgs, type MetaFunction } from "@remix-run/node";
import { i18nextServer } from '~/modules/i18next/i18next';
import { useTranslation } from 'react-i18next';
import HeroSection from '~/components/routes/Index/HeroSection';
import LanguageSelect from '~/components/common/LanguageSelect';
// import { useLoaderData } from '@remix-run/react';

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [
    { title: data?.title },
    { name: "description", content: data?.description },
  ];
};

export const handle = {
  // The hero section's i18n namespace dependency is spread here so that the 
  // translations can be preloaded on the server and avoid async transition. Better for SEO.
  // Without this, you need to wrap the hero section in a <Suspense> component.
  // try removing it and you'll see "Hydration failed..."
  i18n: [...HeroSection.i18n]
}

export async function loader({ request }: LoaderFunctionArgs) {
  // TODO: test this with different requests and see if the language changes to zh and es
  const t = await i18nextServer.getFixedT(request);
  return json({ title: t("title"), description: t("description") });
}


export default function Index() {
  const { t } = useTranslation("homepage");
  // const { description } = useLoaderData<typeof loader>();

  return <>
    {/* <h1>{description}</h1> */}
    <HeroSection />
    <h1>{t("start_building")}</h1>
    <LanguageSelect />
  </>
}