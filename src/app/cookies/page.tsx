import type { Metadata } from "next";

import DefaultLayout from "@/layouts/default";
import CookiesView from "@/views/cookies";

export const metadata: Metadata = {
  title: "The Impact Wave - Cookie policy",
  description: "The Impact Wave - Unleash Your Generosity, Amplify Your Impact",
};

const Cookies = () => {
  return (
    <>
      <DefaultLayout>
        <CookiesView />
      </DefaultLayout>
    </>
  );
};

export default Cookies;
