import type { Metadata } from "next";

import DefaultLayout from "@/layouts/default";
import TermsView from "@/views/terms";

export const metadata: Metadata = {
  title: "The Impact Wave - Terms of use",
  description: "The Impact Wave - Unleash Your Generosity, Amplify Your Impact",
};

const Terms = () => {
  return (
    <>
      <DefaultLayout>
        <TermsView />
      </DefaultLayout>
    </>
  );
};

export default Terms;
