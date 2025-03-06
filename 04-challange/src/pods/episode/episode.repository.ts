import { getEpisodeApi } from "./api"
import { mapEpisodeToVm } from "./episode.mapper"
import { EpisodeViewModel } from "./episode.vm"

export const getEpisodeRepository = (
  locationId: string
): Promise<EpisodeViewModel> => {
  return new Promise(resolve => {
    getEpisodeApi(locationId).then(
      response => resolve(mapEpisodeToVm(response)))
  })
}
