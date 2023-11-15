import type { TextProps } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

export interface SubHeadingProps
  extends Omit<
    TextProps,
    "fontFamily" | "fontWeight" | "textTransform" | "letterSpacing" | "color"
  > {
  color?: "primary" | "secondary" | "tertiary" | "quaternary";
  center?: boolean;
}

const SubHeading = (props: SubHeadingProps) => {
  const {
    children,
    as = "h2",
    mb = 8,
    center = false,
    color = "tertiary",
    ...rest
  } = props;
  return (
    <Text
      as={as}
      fontFamily={"Gotham"}
      fontWeight={700}
      textTransform={"uppercase"}
      letterSpacing={5}
      color={color}
      textAlign={center ? "center" : undefined}
      mb={mb}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default SubHeading;
