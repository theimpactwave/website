import type { HeadingProps as ChakraHeadingProps } from "@chakra-ui/react";
import { Heading as ChakraHeading } from "@chakra-ui/react";
import { useMemo } from "react";

export interface HeadingProps extends Omit<ChakraHeadingProps, "size"> {
  size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Heading = (props: HeadingProps) => {
  const { children, as = "h1", size = undefined, fontSize, ...rest } = props;

  const getFontSize = useMemo((): Array<string | number> | any | undefined => {
    const fontSizeMap: Record<string, any> = {
      h1: [28, 36, 48],
      h2: [24, 32, 40],
      h3: [22, 30, 36],
      h4: [20, 28, 30],
      h5: [18, 26, 28],
      h6: [18, 22, 24],
    };
    if (size === undefined && fontSize === undefined) {
      return as && typeof as === "string" ? fontSizeMap[as] : fontSizeMap["h1"];
    } else if (size !== undefined) {
      return fontSizeMap[size];
    } else {
      return fontSize;
    }
  }, [as, size, fontSize]);

  return (
    <ChakraHeading as={as} fontSize={getFontSize} {...rest}>
      {children}
    </ChakraHeading>
  );
};

export default Heading;
