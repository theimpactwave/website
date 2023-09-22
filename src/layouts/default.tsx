import { FC, PropsWithChildren } from "react";
import Header from "@/modules/header";
import Footer from "@/modules/footer";
import Container from "@/components/container";

const DefaultLayout: FC<PropsWithChildren> = ({
  children,
}: PropsWithChildren): JSX.Element => {
  return (
    <>
      <Header />
      <main id={"main"}>
        <Container>{children}</Container>
      </main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
