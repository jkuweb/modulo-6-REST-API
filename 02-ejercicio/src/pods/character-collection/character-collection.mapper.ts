import * as am from './api'
import * as vm from './character-collection.vm';

const mapCharacterToVm = (
  character: am.CharacterApiModel
): vm.CharacterViewModel => ({
  id: character.id,
  name: character.name,
  image: character.image,
});

export const mapCharacterCollectionToVm = (
  characterCollectionApi: am.CharacterListResponse
): vm.CharacterViewModel[] => {
  const characters = characterCollectionApi.results;
  return characters ? characters.map(character => mapCharacterToVm(character)) : [];
}
