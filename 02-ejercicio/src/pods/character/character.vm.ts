export interface CharacterViewModel {
  id: number;
  name: string;
  species: string;
  image: string;
  gender: string;
  status: string;
  bestSentence?: string;
}

export const createEmptyCharacterDetail = (): CharacterViewModel => ({
  id: 0,
  name: '',
  species: '',
  image: '',
  gender: '',
  status: '',
});
