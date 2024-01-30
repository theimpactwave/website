import type { Theme } from "@chakra-ui/react";
import {
  createMultiStyleConfigHelpers,
  defineStyleConfig,
  extendTheme,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const TextStyles = defineStyleConfig({
  baseStyle: {
    fontSize: [16, 18, 18],
    letterSpacing: 0.1,
  },
});

const LinkStyles = defineStyleConfig({
  baseStyle: {
    fontSize: [16, 18, 18],
  },
});

const HeadingStyles = defineStyleConfig({
  baseStyle: {
    fontWeight: 900,
    letterSpacing: -0.01,
    lineHeight: 1.1,
    mb: 16,
  },
});

const CardHelpers = createMultiStyleConfigHelpers(["container"]);
const CardStyles = CardHelpers.defineMultiStyleConfig({
  baseStyle: {
    container: {
      px: 2,
      py: 2,
      bg: "none",
      borderRadius: 20,
    },
  },
  variants: {
    solid: () => ({
      container: {
        bg: "tertiary",
      },
    }),
    outline: () => ({
      container: {
        color: "#00000",
        borderColor: "tertiary",
      },
    }),
  },
  defaultProps: {
    variant: "outline",
  },
});

const ModalHelpers = createMultiStyleConfigHelpers([
  "header",
  "dialog",
  "overlay",
]);
const ModalStyles = ModalHelpers.defineMultiStyleConfig({
  baseStyle: {
    overlay: {
      color: "black",
      background: "blackAlpha.700",
    },
    dialog: {
      border: "1px solid",
      borderColor: "black",
      background: "white",
    },
  },
});

const InputHelpers = createMultiStyleConfigHelpers(["field", "element"]);
const InputStyles = InputHelpers.defineMultiStyleConfig({
  baseStyle: {
    field: {
      p: 5,
    },
    defaultProps: {
      focusBorderColor: "gray.500",
    },
  },
  variants: {
    outline: () => ({
      field: {
        color: "black",
        borderColor: "gray.500",
      },
    }),
  },
});

const ButtonStyles = defineStyleConfig({
  baseStyle: {},
  variants: {},
});

const theme = {
  initialColorMode: "dark",
  useSystemColorMode: false,
  config: {
    cssVarPrefix: "tiw",
  },
  styles: {
    global: (props: any) => ({
      ":root": {},
      "html, body": {
        height: "100%",
        bg: mode("#ffffff", "#ffffff")(props),
        color: mode("#003333", "#003333")(props),
      },
    }),
  },
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Sora', sans-serif`,
  },
  colors: {
    brand: "#5DBD77",
    primary: "#5DBD77",
    secondary: "#419dbc",
    tertiary: "#264494",
    quaternary: "#71c2cb",
    silver: "#E8E8E9",
    red: "#BD5D64",
    black: "#003333",
    brandScheme: {
      100: "#5DBD77",
      200: "#5DBD77",
      300: "#5DBD77",
      400: "#5DBD77",
      500: "#5DBD77",
      600: "#5DBD77",
      700: "#5DBD77",
      800: "#5DBD77",
      900: "#5DBD77",
    },
    secondaryScheme: {
      100: "#419dbc",
      200: "#419dbc",
      300: "#419dbc",
      400: "#419dbc",
      500: "#419dbc",
      600: "#419dbc",
      700: "#419dbc",
      800: "#419dbc",
      900: "#419dbc",
    },
    tertiaryScheme: {
      100: "#264494",
      200: "#264494",
      300: "#264494",
      400: "#264494",
      500: "#264494",
      600: "#264494",
      700: "#264494",
      800: "#264494",
      900: "#264494",
    },
    quaternaryScheme: {
      100: "#71c2cb",
      200: "#71c2cb",
      300: "#71c2cb",
      400: "#71c2cb",
      500: "#71c2cb",
      600: "#71c2cb",
      700: "#71c2cb",
      800: "#71c2cb",
      900: "#71c2cb",
    },
  },
  components: {
    Text: TextStyles,
    Link: LinkStyles,
    Heading: HeadingStyles,
    Card: CardStyles,
    Modal: ModalStyles,
    Input: InputStyles,
    Button: ButtonStyles,
  },
};

export const getTheme = (): Theme => {
  return extendTheme(theme) as Theme;
};
