import { ENV_VARIABLES } from "#core/env";
import { CharacterMemberApiModel } from "./character-collection.api.model";

export const getCharacterFilterCollection = async (
  characterName?: string
): Promise<CharacterMemberApiModel[]> => {
  const response = await fetch(
    `${ENV_VARIABLES.CHARACTERS_API_BASE_URL}/character/?name=${characterName}`
  ).then(response => response.json());

  return response.results;
};


export const getCharacterCollectionPerPage = async (page: string): Promise<CharacterMemberApiModel[]> => {
  const response = await fetch(
    `${ENV_VARIABLES.CHARACTERS_API_BASE_URL}/character/?page=${page}`
  ).then(response => response.json());


  return response.results;
};
