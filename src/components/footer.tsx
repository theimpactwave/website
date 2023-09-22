import { Box, type BoxProps, Link, Stack } from "@chakra-ui/react";

import Logo from "@/components/logo";

const Footer = (props: BoxProps) => {
  const { children } = props;
  return (
    <>
      {children}
      <Box
        as={"footer"}
        role={"contentinfo"}
        itemScope={true}
        itemType={"http://schema.org/WPFooter"}
        mt={8}
      >
        <Stack
          direction={"row"}
          spacing={4}
          justifyContent={"space-between"}
          alignItems={"center"}
          p={4}
          bg={"secondary"}
          color={"black"}
        >
          <Box fontSize={14}>
            <Logo width={150} reverse />
          </Box>
          <Box fontSize={14}>
            <Link href={"mailto:team@theimpactwave.org"}>
              team@theimpactwave.org
            </Link>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default Footer;
