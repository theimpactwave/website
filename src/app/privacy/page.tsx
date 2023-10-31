import type { Metadata } from "next";

import DefaultLayout from "@/layouts/default";
import PrivacyView from "@/views/privacy";

export const metadata: Metadata = {
  title: "The Impact Wave - Privacy policy",
  description: "The Impact Wave - Unleash Your Generosity, Amplify Your Impact",
};

const Policy = () => {
  return (
    <>
      <DefaultLayout>
        <PrivacyView />
      </DefaultLayout>
    </>
  );
};

export default Policy;
