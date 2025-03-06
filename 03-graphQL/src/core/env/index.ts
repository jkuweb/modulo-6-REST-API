interface EnvVariables {
  CHARACTERS_API_BASE_URL: string;
}

export const ENV_VARIABLES: EnvVariables = {
  CHARACTERS_API_BASE_URL: import.meta.env.VITE_CHARACTERS_API_BASE_URL,
};
