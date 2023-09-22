import type { Theme } from "@chakra-ui/react";
import { createMultiStyleConfigHelpers, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const CardHelpers = createMultiStyleConfigHelpers(["container"]);
const CardStyles = CardHelpers.defineMultiStyleConfig({
  baseStyle: {
    container: {
      px: 2,
      py: 2,
      bg: "none",
      borderRadius: 40,
    },
  },
  variants: {
    solid: () => ({
      container: {
        bg: "primary",
      },
    }),
    outline: () => ({
      container: {
        borderColor: "brand",
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
      background: "blackAlpha.400",
    },
    dialog: {
      border: "1px solid",
      borderColor: "brand",
      background:
        "linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.15)), rgba(229, 229, 229, 0.15)",
      backdropFilter: "blur(23.5px)",
    },
  },
});

const theme = {
  initialColorMode: "dark",
  useSystemColorMode: false,
  config: {
    cssVarPrefix: "tiw",
  },
  styles: {
    global: (props) => ({
      ":root": {},
      "html, body": {
        height: "100%",
        bg: mode("#002121", "#002121")(props),
        color: mode("#ffffff", "#ffffff")(props),
      },
    }),
  },
  fonts: {
    heading: `'Crimson', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  colors: {
    brand: "#5DBD77",
    primary: "#5DBD77",
    secondary: "#40e0d0",
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
  },
  components: {
    Card: CardStyles,
    Modal: ModalStyles,
  },
};

export const getTheme = (): Theme => {
  return extendTheme(theme) as Theme;
};
