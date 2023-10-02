import { Box, type BoxProps, Hide, Link, Stack, Text } from "@chakra-ui/react";

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
          bg={"silver"}
          color={"black"}
        >
          <Box fontSize={14}>
            <Logo width={100} />
          </Box>
          <Box fontSize={14}>
            <Link href={"mailto:team@theimpactwave.org"}>
              team@theimpactwave.org
            </Link>
          </Box>
        </Stack>
        <Stack
          direction={["column", "row", "row"]}
          spacing={[1, 4, 4]}
          justifyContent={"center"}
          alignItems={"center"}
          p={4}
          fontSize={12}
        >
          <Text>&copy; 2023 The Impact Wave</Text>
          <Hide below={"sm"}>
            <Text>&#124;</Text>
          </Hide>
          <Link href={"/terms"}>Terms of use</Link>
          <Hide below={"sm"}>
            <Text>&#124;</Text>
          </Hide>
          <Link href={"/privacy"}>Privacy policy</Link>
        </Stack>
      </Box>
    </>
  );
};

export default Footer;
