import type { ReactNode } from "react";

import type { HttpClient } from "./client";
import { createHttpClient } from "./client";
import { HttpClientContext } from "./context";

export type HttpClientProviderOptions = {
  client: HttpClient | HttpClient[];
};

export interface HttpClientProviderProps {
  client: HttpClient | HttpClient[];
  children: ReactNode;
}
export const HttpClientProvider = ({
  client,
  children,
}: HttpClientProviderProps) => {
  const clients: HttpClient[] = [];
  if (!client) {
    console.warn(
      'You can not use the "HttpClientProvider" and not provide at least one "HttpClient"',
    );
  }
  if (Array.isArray(client)) {
    client.forEach((c: HttpClient) => {
      clients.push(createHttpClient(c));
    });
  }
  return (
    <HttpClientContext.Provider
      value={{
        client: Array.isArray(client) ? clients : [createHttpClient(client)],
      }}
    >
      {children}
    </HttpClientContext.Provider>
  );
};
