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
    fontWeight: 700,
    letterSpacing: -0.6,
  },
});

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
        bg: "brand",
      },
    }),
    outline: () => ({
      container: {
        color: "#00000",
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
        _hover: {
          borderColor: "gray.500",
        },
      },
    }),
  },
});

const RadioHelpers = createMultiStyleConfigHelpers(["control"]);
const RadioStyles = RadioHelpers.defineMultiStyleConfig({
  baseStyle: {
    control: {
      bg: "silver",
    },
  },
});

const FormHelpers = createMultiStyleConfigHelpers(["helperText"]);
const FormStyles = FormHelpers.defineMultiStyleConfig({
  baseStyle: {
    helperText: {
      color: "black",
    },
  },
});

const SelectHelpers = createMultiStyleConfigHelpers(["field"]);
const SelectStyles = SelectHelpers.defineMultiStyleConfig({
  baseStyle: {
    field: {
      _focus: {
        border: "1px solid",
        borderColor: "var(--tiw-colors-gray-500) !important",
      },
      _hover: {
        border: "1px solid",
        borderColor: "var(--tiw-colors-gray-500) !important",
      },
    },
  },
});

const TextareaStyles = defineStyleConfig({
  baseStyle: {
    borderColor: "var(--tiw-colors-gray-500) !important",
    _focus: {
      border: "1px solid",
      borderColor: "var(--tiw-colors-gray-500) !important",
    },
    _hover: {
      border: "1px solid",
      borderColor: "var(--tiw-colors-gray-500) !important",
    },
  },
});

const theme = {
  initialColorMode: "light",
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
    heading: `'Montserrat', sans-serif`,
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
  fontSizes: {
    h6: "1rem",
    h5: "1.15rem",
    h4: "1.35rem",
    h3: "1.65rem",
    h2: "2rem",
    h1: "2.25rem",
  },
  components: {
    Text: TextStyles,
    Link: LinkStyles,
    Heading: HeadingStyles,
    Card: CardStyles,
    Modal: ModalStyles,
    Input: InputStyles,
    Radio: RadioStyles,
    Form: FormStyles,
    Textarea: TextareaStyles,
    Select: SelectStyles,
  },
};

export const getTheme = (): Theme => {
  return extendTheme(theme) as Theme;
};
