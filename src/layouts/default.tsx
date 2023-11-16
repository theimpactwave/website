import { Box } from "@chakra-ui/react";
import type { FC, PropsWithChildren } from "react";

import Footer from "@/modules/footer";
import Header from "@/modules/header";

const DefaultLayout: FC<PropsWithChildren> = ({
  children,
}: PropsWithChildren): JSX.Element => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        backgroundImage: "url('images/pattern.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top left",
      }}
    >
      <Header />
      <main id={"main"}>{children}</main>
      <Footer />
    </Box>
  );
};

export default DefaultLayout;
