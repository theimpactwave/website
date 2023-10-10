import type { HttpRequestAction } from "@/lib/packages";
import { get, post, type QueryOptions } from "@/lib/queries";
import type { InitiativeType } from "@/types";

export const postInitiative = async (
  initiative: InitiativeType,
  options?: QueryOptions,
): Promise<InitiativeType | Error> => {
  return post<InitiativeType>(
    {
      endpoint: "initiative",
      body: JSON.stringify(initiative),
    } as HttpRequestAction,
    options,
  );
};

export const postInitiativeLogo = async (
  initiative: InitiativeType,
  options?: QueryOptions,
): Promise<InitiativeType | Error> => {
  return get<InitiativeType>(
    {
      endpoint: "initiatives/logo",
      body: JSON.stringify(initiative),
    } as HttpRequestAction,
    options,
  );
};
