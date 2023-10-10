import { Buffer } from "buffer";

import type { HttpRequestAction } from "./client";

export type Cache<T> = {
  add: (action: HttpRequestAction, value: T) => void;
  remove: (action: HttpRequestAction) => void;
  get: (action: HttpRequestAction) => (T & { timestamp: number }) | undefined;
  has: (action: HttpRequestAction) => boolean;
};

export interface CacheOptions<T> {
  isCacheable: (action: HttpRequestAction) => boolean;
  isValid: (response: T & { timestamp: number }) => boolean;
}

export const createCacheKey = (action: HttpRequestAction) => {
  return Buffer.from(JSON.stringify(action)).toString("base64");
};

export const createCache = <T>(
  isCacheable: (action: HttpRequestAction) => boolean,
  isValid: (response: T & { timestamp: number }) => boolean,
) => {
  const items: { [key: string]: any } = {};

  const add = (action: HttpRequestAction, value: T) => {
    if (isCacheable(action)) {
      items[createCacheKey(action)] = { ...value, timestamp: Date.now() };
    }
  };

  const get = (action: HttpRequestAction) => {
    const response = items[createCacheKey(action)];
    const valid = response && isValid(response);

    if (valid) {
      return response;
    }

    if (response && !valid) {
      remove(action);
    }
  };

  const has = (action: HttpRequestAction): boolean => {
    return Boolean(items[createCacheKey(action)]);
  };

  const remove = (action: HttpRequestAction) => {
    delete items[createCacheKey(action)];
  };

  return {
    add,
    get,
    has,
    remove,
  } as Cache<T>;
};
