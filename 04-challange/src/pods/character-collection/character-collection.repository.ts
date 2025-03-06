import { getCharacterFilterCollection, getCharacterCollectionPerPage } from "./api";
import { mapCharacterCollectionToVm } from "./character-collection.mapper";
import { CharacterViewModel } from "./character-collection.vm";

export const getCharacterCollectionRepository = (
  characterName?: string
): Promise<CharacterViewModel[]> => {
  return new Promise(resolve => {
    getCharacterFilterCollection(characterName).then(result =>
      resolve(mapCharacterCollectionToVm(result))
    );
  });
};

export const getCharacterPerPage = (page: string) => {
  return new Promise(resolve => {
    getCharacterCollectionPerPage(page).then(result =>
      resolve(mapCharacterCollectionToVm(result))
    );
  });
};
