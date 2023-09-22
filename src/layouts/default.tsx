import type { FC, PropsWithChildren } from "react";

import Footer from "@/modules/footer";
import Header from "@/modules/header";

const DefaultLayout: FC<PropsWithChildren> = ({
  children,
}: PropsWithChildren): JSX.Element => {
  return (
    <>
      <Header />
      <main id={"main"}>{children}</main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
