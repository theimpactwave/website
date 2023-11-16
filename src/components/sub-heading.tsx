import type { ResponsiveValue, TextProps } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { mapResponsive } from "@chakra-ui/utils";
import { useMemo } from "react";

export interface SubHeadingProps
  extends Omit<
    TextProps,
    "fontFamily" | "fontWeight" | "textTransform" | "letterSpacing" | "color"
  > {
  color?: "primary" | "secondary" | "tertiary" | "quaternary";
  center?: boolean | ResponsiveValue<boolean>;
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

  const getTextAlign = useMemo((): any => {
    if (Array.isArray(center)) {
      return mapResponsive(center, (value: boolean) => {
        return value ? "center" : "initial";
      });
    } else {
      return center ? "center" : undefined;
    }
  }, [center]);

  return (
    <Text
      as={as}
      fontFamily={"Gotham"}
      fontWeight={700}
      textTransform={"uppercase"}
      letterSpacing={5}
      color={color}
      textAlign={getTextAlign}
      mb={mb}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default SubHeading;
