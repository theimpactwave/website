import type { Metadata } from "next";

import DefaultLayout from "@/layouts/default";
import TermsView from "@/views/terms";

export const metadata: Metadata = {
  title: "The Impact Wave - Terms of use",
  description: "The Impact Wave -The value chain for the positive impact age",
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
