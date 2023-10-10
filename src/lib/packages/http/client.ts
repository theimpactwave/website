import type { Cache, CacheOptions } from "./cache";
import { createCache } from "./cache";
import { httpQuery } from "./query";

export type HttpClientQuery = <T = any, R = any>(
  action: HttpRequestAction<R>,
) => Promise<HttpQueryResponse<T>>;

export type RequestMethod =
  | "GET"
  | "HEAD"
  | "POST"
  | "PUT"
  | "PATCH"
  | "DELETE"
  | "OPTIONS";
export type ResponseType =
  | "arrayBuffer"
  | "blob"
  | "json"
  | "text"
  | "formData";

export type HttpRequestAction<T = {}> = {
  endpoint: string;
  method?: RequestMethod;
  body?: any;
  headers?: { [propName: string]: string | undefined };
  credentials?: RequestCredentials;
  cache?: RequestCache;
  mode?: RequestMode;
  referrerPolicy?: ReferrerPolicy;
  referrer?: string;
  integrity?: string;
  keepalive?: boolean;
  redirect?: RequestRedirect;
  signal?: AbortSignal | null;
  window?: any;
  responseType?: ResponseType;
} & T;

export type HttpQueryResponse<T = any> = {
  status?: number;
  statusText?: string;
  error?: boolean;
  errorObject?: any;
  headers?: Headers;
  response?: Response;
  data?: T;
};

export type HttpClientOptions<T = any> = {
  id?: string;
  cache?: boolean | CacheOptions<HttpQueryResponse>;
  baseUrl?: string;
  defaultHeaders?: { [propName: string]: string | undefined };
  defaultParams?: { [propName: string]: string };
} & T;

export type HttpClient<T = any, R = any> = {
  query: HttpClientQuery;
  get: HttpClientQuery;
  post: HttpClientQuery;
  put: HttpClientQuery;
  patch: HttpClientQuery;
  delete: HttpClientQuery;
  cache?: Cache<HttpQueryResponse>;
  fetch?: (
    input: RequestInfo,
    init?: Partial<HttpRequestAction<R>> & RequestInit,
  ) => Promise<Response>;
} & HttpClientOptions<T>;

export const HttpClients: HttpClient[] = [];

export const resolveHttpResponse = async (
  response: Response,
  responseType: ResponseType | undefined,
): Promise<any | string | ArrayBuffer | Blob | FormData> => {
  if (responseType) {
    return response[responseType]();
  } else {
    const contentType = response.headers.get("Content-Type");
    const isJSON =
      [204, 205].indexOf(response.status) === -1 &&
      contentType &&
      contentType.indexOf("json") !== -1;
    return isJSON ? response.json() : response.text();
  }
};

export const createHttpClient = <R = any>(
  options?: HttpClientOptions<R>,
): HttpClient => {
  const cacheClient = (): Cache<HttpQueryResponse> | undefined => {
    if (typeof options?.cache === "object") {
      return createCache(options?.cache?.isCacheable, options?.cache?.isValid);
    } else if (options?.cache) {
      return createCache(
        (action: HttpRequestAction) => {
          return action.method === "GET";
        },
        (response: HttpQueryResponse & { timestamp: number }) => {
          return new Date().getTime() - response.timestamp < 600000;
        },
      );
    }
    return undefined;
  };

  if (options?.id) {
    const cachedClient: HttpClient = HttpClients.find(
      (client: HttpClient) => client?.id === options?.id,
    );
    if (cachedClient) {
      return cachedClient;
    }
  }

  const mergedOptions = { ...options, ...{ cache: cacheClient() } };

  const query = async <T>(
    action: HttpRequestAction,
  ): Promise<HttpQueryResponse<T>> => httpQuery(mergedOptions, action);
  const get = async <T>(
    action: HttpRequestAction,
  ): Promise<HttpQueryResponse<T>> =>
    httpQuery(mergedOptions, { ...action, ...{ method: "GET" } });
  const post = async <T>(
    action: HttpRequestAction,
  ): Promise<HttpQueryResponse<T>> =>
    httpQuery(mergedOptions, { ...action, ...{ method: "POST" } });
  const put = async <T>(
    action: HttpRequestAction,
  ): Promise<HttpQueryResponse<T>> =>
    httpQuery(mergedOptions, { ...action, ...{ method: "PUT" } });
  const patch = async <T>(
    action: HttpRequestAction,
  ): Promise<HttpQueryResponse<T>> =>
    httpQuery(mergedOptions, { ...action, ...{ method: "PATCH" } });
  const _delete = async <T>(
    action: HttpRequestAction,
  ): Promise<HttpQueryResponse<T>> =>
    httpQuery(mergedOptions, { ...action, ...{ method: "DELETE" } });

  const mergedClient = {
    ...mergedOptions,
    ...{
      query: query,
      get: get,
      post: post,
      put: put,
      patch: patch,
      delete: _delete,
    },
  } as HttpClient;
  HttpClients.push(mergedClient);
  return mergedClient;
};

export const getHttpClient = (
  id: string | undefined,
): HttpClient | undefined => {
  if (id) {
    return HttpClients.find((client) => client.id === id);
  }
  return HttpClients;
};
