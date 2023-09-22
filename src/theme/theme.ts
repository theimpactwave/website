import {
  extendTheme,
  defineStyleConfig,
  StyleFunctionProps,
  Theme,
} from "@chakra-ui/react";

const theme = {
  config: {
    cssVarPrefix: "tiw",
  },
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
};

export const getTheme = (): Theme => {
  return extendTheme(theme) as Theme;
};
