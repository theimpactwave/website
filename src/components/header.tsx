import { Box, type BoxProps, Stack } from "@chakra-ui/react";
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
          <WaitlistButton size={["xs", "sm", "md"]} />
        </Box>
      </Stack>
      {children}
    </Box>
  );
};

export default Header;
