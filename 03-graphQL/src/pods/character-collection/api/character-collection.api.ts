import { graphql } from "#core/api";
import { CharacterMemberApiModel } from "./character-collection.api.model";

interface GetCharacterCollection {
  characters: {
    results: CharacterMemberApiModel[]
  }
}

export const getCharacterCollection = async (): Promise<CharacterMemberApiModel[]> => {
  const query = `
     query {
         characters {
           results {
             id
             name
             image
          }
        }
      }

    `;
  const { characters } = await graphql<GetCharacterCollection>({ query })
  return characters.results;
};
