import { json, LoaderFunctionArgs, type MetaFunction } from "@remix-run/node";
import i18nextServer from '~/modules/i18next/i18next';
import { useTranslation } from 'react-i18next';
import HeroSection from '~/components/routes/Index/HeroSection';
// import { useLoaderData } from '@remix-run/react';

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [
    { title: data?.title },
    { name: "description", content: data?.description },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  // TODO: test this with different requests and see if the language changes to zh and es
  const t = await i18nextServer.getFixedT(request);
  return json({ title: t("title"), description: t("description") });
}


export default function Index() {
  const { t } = useTranslation();
  // const { description } = useLoaderData<typeof loader>();

  return <>
    {/* <h1>{description}</h1> */}
    <HeroSection />
    <h1>{t("description")}</h1>
  </>
}