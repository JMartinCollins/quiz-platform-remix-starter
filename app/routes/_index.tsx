import type { MetaFunction } from "@remix-run/node";
import { Index } from '~/components/pages/Index';

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default Index