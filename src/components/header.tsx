import { Box, type BoxProps, Button, Stack } from "@chakra-ui/react";
import Link from "next/link";

import Logo from "@/components/logo";
import WaitlistButton from "@/components/waitlist/button";

const Header = (props: BoxProps) => {
  const { children } = props;
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
        <Box>
          <Stack direction={"row"} spacing={4}>
            <WaitlistButton
              colorScheme={"tertiaryScheme"}
              size={["xs", "sm", "md"]}
            />
            <Link href={"/onboarding"}>
              <Button variant={"outline"} colorScheme={"brandScheme"}>
                Onboard Initiative
              </Button>
            </Link>
          </Stack>
        </Box>
      </Stack>
      {children}
    </Box>
  );
};

export default Header;
