import * as am from './api';
import * as vm from './location-collection.vm';

const mapLocationToVm = (location: am.Location): vm.LocationViewModel => ({
  id: location.id,
  name: location.name,
  dimension: location.dimension,
  type: location.type
})

export const mapLocationCollectionToVm = (
  locations: am.Location[]
): vm.LocationViewModel[] => {
  return locations ? locations.map(location => mapLocationToVm(location)) : [];

}
