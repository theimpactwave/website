export const makeEndpoint = (
  endpoint: string,
  base: string | undefined,
): string => {
  if (base) {
    return `${base}/${endpoint.replace(/^http[s]?:\/\/.+?\//g, "")}`;
  }
  return endpoint;
};

export const prepareHeaders = (headers: {
  [propName: string]: string | undefined;
}): { [propName: string]: string } => {
  const _headers: { [propName: string]: string } = {};
  for (const [key, value] of Object.entries(headers)) {
    if (value) {
      _headers[key] = value;
    }
  }
  return _headers;
};
