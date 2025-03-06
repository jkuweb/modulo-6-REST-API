export interface LocationViewModel {
  id: number;
  name: string;
  type: string;
  dimension: string;
}

export const createEmptyCharacterCollection = (): LocationViewModel[] => [
  {
    id: 0,
    name: '',
    type: '',
    dimension: '',
  },
];
