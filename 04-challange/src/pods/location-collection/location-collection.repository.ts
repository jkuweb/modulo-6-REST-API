import { getLocationCollectionApi } from "./api";
import { mapLocationCollectionToVm } from "./location-collection.mapper";
import { LocationViewModel } from "./location-collection.vm";

export const getLocationCollectionRepository = (): Promise<LocationViewModel[]> => {
  return new Promise(resolve => {
    getLocationCollectionApi().then(data => resolve(mapLocationCollectionToVm(data.results)))
  })
}
