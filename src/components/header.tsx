"use client";

import { Box, type BoxProps, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import Logo from "@/components/logo";
import WaitlistButton from "@/components/waitlist/button";

const Header = (props: BoxProps) => {
  const { children } = props;

  const [, setInBeta] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (/\/?#beta/gi.test(window.location.href)) {
        setInBeta(true);
      }
    }
  }, [setInBeta]);

  return (
    <Box
      as={"header"}
      role={"banner"}
      itemScope={true}
      itemType={"http://schema.org/WPHeader"}
      mb={8}
    >
      <Stack
        direction={"row"}
        spacing={4}
        justifyContent={"space-between"}
        alignItems={"center"}
        p={4}
      >
        <Box>
          <Logo />
        </Box>
        <Stack spacing={2}>
          <WaitlistButton
            colorScheme={"tertiaryScheme"}
            size={["xs", "sm", "md"]}
          />
        </Stack>
      </Stack>
      {children}
    </Box>
  );
};

export default Header;
