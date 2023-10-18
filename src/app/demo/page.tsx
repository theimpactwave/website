import type { Metadata } from "next";

import DefaultLayout from "@/layouts/default";
import DemoPage from "@/pages/demo-page";

export const metadata: Metadata = {
  title: "The Impact Wave - Demo",
  description: "The Impact Wave - Unleash Your Generosity, Amplify Your Impact",
};

const Demo = () => {
  return (
    <>
      <main>
        <DefaultLayout>
          <DemoPage />
        </DefaultLayout>
      </main>
    </>
  );
};

export default Demo;
