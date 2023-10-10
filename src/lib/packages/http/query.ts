import { omit } from "next/dist/shared/lib/router/utils/omit";

import type {
  HttpClient,
  HttpQueryResponse,
  HttpRequestAction,
} from "./client";
import { resolveHttpResponse } from "./client";
import { makeEndpoint, prepareHeaders } from "./utils";

type HttpQueryOptions = {
  noCache?: boolean;
};

export const httpQuery = async <T>(
  client: HttpClient,
  action: HttpRequestAction,
  options?: HttpQueryOptions,
): Promise<HttpQueryResponse<T>> => {
  try {
    const { baseUrl = undefined, defaultHeaders = {} } = client;
    const { noCache = false } = options ?? {};
    const { endpoint, responseType, ...restActions } = omit(action, [
      "headers",
      "method",
    ]);
    const method = action.method || "GET";
    const headers = prepareHeaders({
      ...defaultHeaders,
      ...(action.headers ?? undefined),
    });
    const input = makeEndpoint(endpoint, baseUrl);
    const _fetch = client.fetch || fetch;

    if (client.cache && !noCache) {
      const cacheData = client.cache.get(action);
      if (cacheData) {
        return cacheData as HttpQueryResponse<T>;
      }
    }

    const response = await _fetch(input, {
      ...{ method: method, headers: headers },
      ...restActions,
    });
    const data = await resolveHttpResponse(response, responseType);

    const result: HttpQueryResponse<T> = {
      response: response,
      data: data,
      error: !response.ok,
      headers: response.headers,
      status: response.status,
      statusText: response.statusText,
    };

    if (client.cache && !noCache && response.ok) {
      client.cache.add(action, result);
    }

    return result;
  } catch (error: any) {
    return {
      error: true,
      errorObject: error,
    };
  }
};
