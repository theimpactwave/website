import type { Metadata } from "next";

import DefaultLayout from "@/layouts/default";
import CookiesView from "@/views/cookies";

export const metadata: Metadata = {
  title: "The Impact Wave - Cookie policy",
  description: "The Impact Wave -The value chain for the positive impact age",
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
