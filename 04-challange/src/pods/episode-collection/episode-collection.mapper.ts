import * as am from './api'
import * as vm from './episode-collection.vm'

const mapEpisodeToVM = (
  episode: am.Episode
): vm.EpisodeViewModel => ({
  id: episode.id,
  name: episode.name
})

export const mapEpisodeCollectionToVM = (
  episodes: am.Episode[]): vm.EpisodeViewModel[] =>
  episodes ? episodes.map(episode => mapEpisodeToVM(episode)) : [];


