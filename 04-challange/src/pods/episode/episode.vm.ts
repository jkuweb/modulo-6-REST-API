export interface EpisodeViewModel {
  id: number;
  name: string;
  airDate: string;
  episode: string;
}

export const createEmptyEpisode = (): EpisodeViewModel => (
  {
    id: 0,
    name: '',
    airDate: '',
    episode: '',
  }
)
