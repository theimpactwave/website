import { useCallback, useContext, useEffect, useReducer, useRef } from "react";

import type {
  HttpClientOptions,
  HttpQueryResponse,
  HttpRequestAction,
} from "./client";
import { HttpClientContext } from "./context";
import { httpQuery } from "./query";
import type { HttpResponseReducer } from "./reducer";
import {
  HTTP_LOADED,
  HTTP_LOADING,
  HTTP_RESET,
  HTTP_RESPONSE,
  httpResponseReducer,
} from "./reducer";

export type useHttpQueryResponse<T> = {
  loading: boolean;
  abort: () => void;
  reset: () => void;
  query: () => Promise<HttpQueryResponse<T>>;
} & HttpQueryResponse<T>;

export const useHttpQuery = <T = any>(
  action: HttpRequestAction<T>,
  client?: HttpClientOptions,
): useHttpQueryResponse<T> => {
  const context = useContext(HttpClientContext);
  if (!context.client) {
    throw new Error('You must use the "HttpClientProvider" to use context!');
  }
  const _client = client ? client : context.client[0];
  const controller = useRef<AbortController | null>();
  const hasMounted = useRef<boolean>(true);
  const hasQueried = useRef<boolean>(false);
  const [state, dispatch] = useReducer(
    httpResponseReducer as HttpResponseReducer<T>,
    {
      response: null,
      loading: false,
    },
  );

  const query = useCallback(async () => {
    const abortController =
      "AbortController" in window ? new AbortController() : undefined;
    const signal =
      action.signal || (abortController ? abortController.signal : undefined);

    if (controller.current) {
      controller.current.abort();
    }

    controller.current = abortController;

    if (!hasMounted.current || hasQueried.current) {
      return { error: false } as HttpQueryResponse<T>;
    }

    dispatch({ type: HTTP_LOADING });

    const response = await httpQuery<T>(_client, {
      ...action,
      signal: action.signal || signal,
    });

    hasQueried.current = true;

    if (hasMounted.current) {
      dispatch({ type: HTTP_RESPONSE, response: response });
    }

    if (
      hasMounted.current &&
      response.errorObject &&
      response.errorObject.name === "AbortError" &&
      controller.current &&
      controller.current === abortController
    ) {
      controller.current = undefined;
      dispatch({ type: HTTP_LOADED });
    }

    return response;
  }, [action, _client]);

  const queryHandler = useCallback(() => {
    return query();
  }, [query]);

  const resetHandler = useCallback(() => {
    dispatch({ type: HTTP_RESET });
  }, []);

  const abortHandler = useCallback(() => {
    if (controller.current) {
      controller.current.abort();
    }
  }, [controller]);

  useEffect(() => {
    hasMounted.current = true;
    query();
    return () => {
      hasMounted.current = false;
      abortHandler();
    };
  }, [abortHandler, query]);

  return {
    loading: state.loading,
    query: queryHandler,
    reset: resetHandler,
    abort: abortHandler,
    ...state.response,
  };
};

export const useHttpClient = (id?: string | undefined): HttpClientOptions => {
  const context = useContext(HttpClientContext);
  if (!context.client) {
    throw new Error('You must use the "HttpClientProvider" to use context!');
  } else {
    if (id) {
      return context.client.find(
        (client: HttpClientOptions) => client.id === id,
      );
    }
    return context.client[0];
  }
};
