import type { Metadata } from "next";

import DefaultLayout from "@/layouts/default";
import ThankyouView from "@/views/thankyou";

export const metadata: Metadata = {
  title: "The Impact Wave - Thank you",
  description: "The Impact Wave - Unleash Your Generosity, Amplify Your Impact",
};

const Thankyou = () => {
  return (
    <>
      <DefaultLayout>
        <ThankyouView />
      </DefaultLayout>
    </>
  );
};

export default Thankyou;
