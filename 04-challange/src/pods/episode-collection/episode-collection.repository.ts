import { getEpisodeCollectionApi } from "./api"
import { mapEpisodeCollectionToVM } from "./episode-collection.mapper"
import { EpisodeViewModel } from "./episode-collection.vm"

export const getEpisodeCollectionRepository = (): Promise<EpisodeViewModel[]> => {
  return new Promise(resolve => {
    getEpisodeCollectionApi().then(data => resolve(mapEpisodeCollectionToVM(data.results)))
  })
}


