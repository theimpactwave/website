import { Box, type BoxProps } from "@chakra-ui/react";

const Header = (props: BoxProps) => {
  const { children } = props;
  return (
    <Box
      as={"header"}
      role={"banner"}
      itemScope={true}
      itemType={"http://schema.org/WPHeader"}
    >
      {children}
    </Box>
  );
};

export default Header
