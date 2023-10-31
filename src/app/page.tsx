import type { Metadata } from "next";

import DefaultLayout from "@/layouts/default";
import HomeView from "@/views/home";

export const metadata: Metadata = {
  title: "Welcome to The Impact Wave",
  description: "The Impact Wave - Unleash Your Generosity, Amplify Your Impact",
};

const Home = () => {
  return (
    <>
      <DefaultLayout>
        <HomeView />
      </DefaultLayout>
    </>
  );
};

export default Home;
