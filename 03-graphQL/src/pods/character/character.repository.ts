import { getCharacter } from './api';
import { mapCharacterToVm } from './character.mapper';
import { CharacterViewModel } from './character.vm';

export const getCharacterRepository = (
  id: number
): Promise<CharacterViewModel> => {
  return new Promise(resolve => {
    getCharacter(id).then(response =>
      resolve(mapCharacterToVm(response))
    );
  });
};
