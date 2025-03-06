export interface CharacterViewModel {
  id: number;
  name: string;
  image: string;
}

export interface CharacterListResponse {
  info: {
    count: number;
  };
  results: CharacterViewModel[];
}

export const createEmptyCharacterList = (): CharacterViewModel[] => {
  const listResponse = {
    info: {
      count: 0
    },
    results: [
      {
        id: 0,
        name: '',
        image: ''
      }
    ]
  }
  return listResponse.results;
}
