export interface EpisodeViewModel {
  id: number;
  name: string;
}

export const createEmptyEpisodeCollection = (): EpisodeViewModel[] => ([
  {
    id: 0,
    name: '',
  }
])
