import { graphql } from "#core/api";
import { CharacterMemberApiModel } from "#pods/character-collection/api";

interface GetCharacterCollection {
  character: CharacterMemberApiModel
}

export const getCharacter = async (id: number): Promise<CharacterMemberApiModel> => {
  const query = `
      query ($id: ID!) {
        character(id: $id) {
          id
          name
          status
          species
          gender
          image
        }
      }

    `;
  const { character } = await graphql<GetCharacterCollection>({ query, variables: { id }, })
  return character;
};
