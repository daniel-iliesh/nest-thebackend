const parseOrigins = (value?: string): string[] =>
  value
    ?.split(',')
    .map((origin) => origin.trim())
    .filter(Boolean) ?? [];

const DEFAULT_FRONTEND_ORIGINS = ['https://daniel-iliesh.github.io'];

export default () => {
  const configuredOrigins = parseOrigins(
    process.env.FRONTEND_ORIGINS ?? process.env.FRONT_ORIGIN,
  );

  return {
    frontend: {
      origins: Array.from(
        new Set([...DEFAULT_FRONTEND_ORIGINS, ...configuredOrigins]),
      ),
    },
  };
};
