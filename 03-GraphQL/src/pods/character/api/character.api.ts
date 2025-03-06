import { ENV_VARIABLES } from '#/core/env';
import { CharacterApiModel } from './character.api.model';

export const getCharacterApi = async (
  id: string
): Promise<CharacterApiModel> => {
  return await fetch(
    `${ENV_VARIABLES.CHARACTERS_API_BASE_URL}/character/${id}`
  ).then(response => response.json());
};
