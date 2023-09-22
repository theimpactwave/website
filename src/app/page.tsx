import HomePage from "@/pages/home";
import { Metadata } from "next";
import DefaultLayout from "@/layouts/default";

export const metadata: Metadata = {
  title: "Landing Page",
  description: "The Impact Wave - Lets make things big",
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
