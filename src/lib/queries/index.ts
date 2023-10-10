import type { ToastProps } from "@chakra-ui/react";
import { createStandaloneToast } from "@chakra-ui/react";

import type {
  HttpClient,
  HttpQueryResponse,
  HttpRequestAction,
} from "@/lib/packages/http";
import { getHttpClient } from "@/lib/packages/http";

export type QueryOptions = {
  dontToast?: boolean;
  errorFn?: (error: any) => void;
  finallyFn?: () => void;
  errorMessage?: string;
};

const { toast } = createStandaloneToast();

export const isResponseOk = (response: HttpQueryResponse): boolean => {
  return !!(
    response &&
    response?.status === 200 &&
    !response?.error &&
    response?.data &&
    response?.data?.data
  );
};

export const hasClientError = (response: HttpQueryResponse): boolean => {
  return !!(response && response?.error && response?.errorObject);
};

export const hasServerError = (response: HttpQueryResponse): boolean => {
  return !!(
    response &&
    response?.error &&
    response?.data &&
    response?.data?.data &&
    response?.data?.data?.message
  );
};

export const toastError = (
  title: string,
  description?: string,
  options?: ToastProps,
): void => {
  toast({
    ...{
      title: title,
      description: description ?? undefined,
      position: "top",
      status: "error",
      duration: 7000,
      isClosable: true,
    },
    ...(options || {}),
  });
};

export const query = async <T>(
  method: "get" | "post",
  action: HttpRequestAction,
  options?: QueryOptions,
  client?: HttpClient,
): Promise<T | Error> => {
  const dontToast =
    options && "dontToast" in options ? options.dontToast : false;

  const getError = (message?: string | undefined): string => {
    return options?.errorMessage ?? undefined ?? message ?? "Undefined error";
  };

  try {
    const _client = client ?? getHttpClient("api");
    return await _client[method](action)
      .then((response: HttpQueryResponse) => {
        if (isResponseOk(response)) {
          return response.data.data as T;
        } else if (hasClientError(response)) {
          if (process.env.NODE_ENV === "development") {
            console.error(response?.errorObject);
          }
          if (!dontToast) {
            toastError(getError(response?.errorObject?.message));
          } else {
            return new Error(getError(response?.errorObject?.message));
          }
        } else if (hasServerError(response)) {
          if (process.env.NODE_ENV === "development") {
            console.error(response?.data?.Data);
          }
          if (!dontToast) {
            toastError(getError(response?.data?.data?.message));
          } else {
            return new Error(getError(response?.data?.data?.message));
          }
        } else {
          if (!dontToast) {
            toastError(getError());
          } else {
            return new Error(getError());
          }
        }
      })
      .catch(options?.errorFn ?? undefined)
      .finally(options?.finallyFn ?? undefined);
  } catch (error: unknown) {
    if (process.env.NODE_ENV === "development") {
      console.error(error);
    }
    if (error instanceof Error) {
      toastError(getError(error.message));
    } else {
      toastError(getError());
    }
    return new Error(getError());
  }
};

export const get = async <T>(
  action: HttpRequestAction,
  options?: QueryOptions,
): Promise<T | Error> => {
  return query<T>("get", action, options);
};

export const post = async <T>(
  action: HttpRequestAction,
  options?: QueryOptions,
): Promise<T | Error> => {
  return query<T>("post", action, options);
};

export * from "./initiatives";
