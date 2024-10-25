import { json, LoaderFunctionArgs, type MetaFunction } from "@remix-run/node";
import i18nextServer from '~/modules/i18next.server';
import { useTranslation } from 'react-i18next';
import HeroSection from '~/components/pages/Index/HeroSection';
// import { useLoaderData } from '@remix-run/react';

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [
    { title: data?.title },
    { name: "description", content: data?.description },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
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