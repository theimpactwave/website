import type { Metadata } from "next";

import DefaultLayout from "@/layouts/default";
import HomePage from "@/pages/home";

export const metadata: Metadata = {
  title: "Welcome to The Impact Wave",
  description: "The Impact Wave - Unleash Your Generosity, Amplify Your Impact",
};

const Home = () => {
  return (
    <>
      <main>
        <DefaultLayout>
          <HomePage />
        </DefaultLayout>
      </main>
    </>
  );
};

export default Home;
