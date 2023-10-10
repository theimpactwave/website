import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import type { HttpClient } from "@/lib/packages";
import { HttpClientProvider } from "@/lib/packages";
import { EnvProvider } from "@/lib/providers/env";
import type { EnvProps } from "@/lib/utils/env";
import { getEnv } from "@/lib/utils/env";
import { getTheme } from "@/theme/theme";

export function Providers({ children }: { children: React.ReactNode }) {
  const _getEnv = (): EnvProps => {
    return {
      ...getEnv(),
      ...{
        MAPBOX_API_KEY:
          "pk.eyJ1IjoidGhlaW1wYWN0d2F2ZSIsImEiOiJjbG5kM3ZudmswMWtnMmpvNXB6Yno0bHY0In0.7BdelspUsopSLqfK0hk7jA",
      },
    };
  };

  const _getClient = (): HttpClient => {
    const uuid = "dgdsfdafdfafafafasfasfasf";
    return {
      id: "api",
      baseUrl: _getEnv().API_BASE_URL,
      defaultHeaders: {
        ...{
          "Content-Type": "application/json",
        },
        ...(uuid ? { Authorization: `Bearer ${uuid}` } : undefined),
      },
    };
  };

  return (
    <CacheProvider>
      <EnvProvider value={_getEnv()}>
        <HttpClientProvider client={_getClient()}>
          <ChakraProvider theme={getTheme()}>
            <ColorModeScript initialColorMode={"light"} />
            {children}
          </ChakraProvider>
        </HttpClientProvider>
      </EnvProvider>
    </CacheProvider>
  );
}
