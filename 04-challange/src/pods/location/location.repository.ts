import { getLocationApi } from "./api"
import { mapLocationToVm } from "./location.mapper"
import { LocationViewModel } from "./location.vm"

export const getLocationRepository = (
  locationId: string
): Promise<LocationViewModel> => {
  return new Promise(resolve => {
    getLocationApi(locationId).then(
      response => resolve(mapLocationToVm(response)))
  })
}
