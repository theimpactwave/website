import type { Metadata } from "next";

import Container from "@/components/container";
import DefaultLayout from "@/layouts/default";

export const metadata: Metadata = {
  title: "The Impact Wave - Demo",
  description: "The Impact Wave - Unleash Your Generosity, Amplify Your Impact",
};

const Demo = () => {

  return (
    <>
      <main>
        <DefaultLayout>
          <Container>
            Demo
          </Container>
        </DefaultLayout>
      </main>
    </>
  );
};

export default Demo;
