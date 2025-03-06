import * as am from './api/character.api.model';
import * as vm from './character.vm';

export const mapCharacterToVm = (
  characterDetail: am.CharacterApiModel
): vm.CharacterViewModel => ({
  id: characterDetail.id,
  name: characterDetail.name,
  image: characterDetail.image,
  gender: characterDetail.gender,
  species: characterDetail.species,
  status: characterDetail.status,
});
