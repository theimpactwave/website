import type { Metadata } from "next";

import DefaultLayout from "@/layouts/default";
import FundView from "@/views/fund";

export const metadata: Metadata = {
  title: "The Impact Wave - Cookie policy",
  description: "The Impact Wave - Unleash Your Generosity, Amplify Your Impact",
};

const Cookies = () => {
  return (
    <>
      <DefaultLayout>
        <FundView />
      </DefaultLayout>
    </>
  );
};

export default Cookies;
