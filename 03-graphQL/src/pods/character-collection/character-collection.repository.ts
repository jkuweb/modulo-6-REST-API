import { getCharacterCollection } from "./api";
import { mapCharacterCollectionToVm } from "./character-collection.mapper";
import { CharacterViewModel } from "./character-collection.vm";

export const getCharacterCollectionRepository = (
): Promise<CharacterViewModel[]> => {
  return new Promise(resolve => {
    getCharacterCollection().then(result =>
      resolve(mapCharacterCollectionToVm(result))
    );
  });
};
