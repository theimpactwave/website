import type { Metadata } from "next";

import DefaultLayout from "@/layouts/default";
import ThankyouView from "@/views/thankyou";

export const metadata: Metadata = {
  title: "The Impact Wave - Thank you",
  description: "The Impact Wave -The value chain for the positive impact age",
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
