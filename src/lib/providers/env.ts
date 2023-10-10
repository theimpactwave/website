import { createContext, useContext } from "react";

import type { EnvProps } from "@/lib/utils/env";

const EnvContext = createContext<EnvProps | null>(null);
export const EnvProvider = EnvContext.Provider;
export const useEnv = () => useContext(EnvContext);
export default EnvContext;
