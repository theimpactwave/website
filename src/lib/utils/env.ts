export type EnvProps = {
  BASE_URL: string;
  API_BASE_URL: string;
  MAPBOX_API_KEY: string;
} & Record<string, any>;

export const getEnv = (): EnvProps => {
  const env: Record<string, any> = {
    BASE_URL: typeof window !== "undefined" ? window.location.origin : "",
  };
  if (process.env.NEXT_PUBLIC_MAPBOX_API_KEY) {
    env.MAPBOX_API_KEY = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;
  }
  if (process.env.MAPBOX_API_KEY) {
    env.MAPBOX_API_KEY = process.env.MAPBOX_API_KEY;
  }
  if (process.env.NEXT_PUBLIC_API_BASE_URL) {
    env.API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  }
  if (process.env.API_BASE_URL) {
    env.API_BASE_URL = process.env.API_BASE_URL;
  }
  return env as EnvProps;
};
