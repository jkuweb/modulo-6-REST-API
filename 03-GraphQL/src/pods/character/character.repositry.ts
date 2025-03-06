import { getCharacterApi } from './api';
import { mapCharacterToVm } from './character.mapper';
import { CharacterViewModel } from './character.vm';

export const getCharacterRepository = (
  id: string
): Promise<CharacterViewModel> => {
  return new Promise(resolve => {
    getCharacterApi(id).then(response =>
      resolve(mapCharacterToVm(response))
    );
  });
};
