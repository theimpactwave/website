import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";

import { getTheme } from "@/theme/theme";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={getTheme()}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
