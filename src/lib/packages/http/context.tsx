import { createContext } from "react";

import type { HttpClient } from "./client";

export type HttpClientContextType = {
  client: undefined | HttpClient[];
};
export const HttpClientContext = createContext<HttpClientContextType>({
  client: undefined,
});
