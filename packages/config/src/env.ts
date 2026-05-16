export interface CoreEnv {
  NODE_ENV: 'development' | 'test' | 'production';
  DATABASE_URL: string;
  APP_BASE_URL: string;
  API_BASE_URL: string;
}

type EnvSource = Record<string, string | undefined>;

const required = (source: EnvSource, key: string): string => {
  const value = source[key];
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
};

export const loadCoreEnv = (source: EnvSource = process.env): CoreEnv => {
  const nodeEnv = (source.NODE_ENV ?? 'development') as CoreEnv['NODE_ENV'];
  if (!['development', 'test', 'production'].includes(nodeEnv)) {
    throw new Error(`Invalid NODE_ENV value: ${nodeEnv}`);
  }

  return {
    NODE_ENV: nodeEnv,
    DATABASE_URL: required(source, 'DATABASE_URL'),
    APP_BASE_URL: required(source, 'APP_BASE_URL'),
    API_BASE_URL: required(source, 'API_BASE_URL'),
  };
};

export const getOptionalEnv = (key: string, fallback: string, source: EnvSource = process.env): string =>
  source[key] ?? fallback;
