import * as am from './api';
import * as vm from './episode.vm';

export const mapEpisodeToVm = (episode: am.EpisodeApiModel): vm.EpisodeViewModel => ({
  id: episode.id,
  name: episode.name,
  airDate: episode.air_date,
  episode: episode.episode,
});
