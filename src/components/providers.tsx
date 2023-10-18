import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { MetaMaskProvider } from "@metamask/sdk-react";

import { getTheme } from "@/theme/theme";

export function Providers({ children }: { children: React.ReactNode }) {
  const metaMaskOptions = {
    logging: {
      developerMode: false,
    },
    dappMetadata: {
      name: "Demo React App",
      url: window.location.host,
    },
  };

  return (
    <CacheProvider>
      {/* <MetaMaskProvider debug={true} sdkOptions={metaMaskOptions}> */}
        <ChakraProvider theme={getTheme()}>
          <ColorModeScript initialColorMode={"dark"} />
          {children}
        </ChakraProvider>
      {/* </MetaMaskProvider> */}
    </CacheProvider>
  );
}
