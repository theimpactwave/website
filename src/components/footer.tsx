import { Box, type BoxProps } from "@chakra-ui/react";

const Footer = (props: BoxProps) => {
  const { children } = props;
  return (
    <Box
      as={"footer"}
      role={"contentinfo"}
      itemScope={true}
      itemType={"http://schema.org/WPFooter"}
    >
      {children}
    </Box>
  );
};

export default Footer
