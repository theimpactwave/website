import type { HttpQueryResponse } from "./client";

export const HTTP_LOADING = "http/loading";
export const HTTP_LOADED = "http/loaded";
export const HTTP_RESPONSE = "http/response";
export const HTTP_RESET = "http/reset";

export type HttpResponseReducerState<T> = {
  response: HttpQueryResponse<T> | null;
  loading: boolean;
};

export type HttpResponseAction<T> = {
  type: string;
  response?: HttpQueryResponse<T> | null;
};

export type HttpResponseReducer<T> = (
  state: HttpResponseReducerState<T>,
  action: HttpResponseAction<T>,
) => HttpResponseReducerState<T>;

export const httpResponseReducer = <T>(
  state: HttpResponseReducerState<T>,
  action: HttpResponseAction<T>,
) => {
  switch (action.type) {
    case HTTP_LOADING:
      return {
        ...state,
        loading: true,
      };
    case HTTP_LOADED:
      return {
        ...state,
        loading: false,
      };
    case HTTP_RESPONSE:
      return {
        ...state,
        loading: false,
        response: action.response,
      };
    case HTTP_RESET:
      return {
        loading: false,
        response: {
          error: false,
        },
      };
    default: {
      throw new Error(
        `Invalid "httpResponseReducer" action type: ${action.type}`,
      );
    }
  }
};
