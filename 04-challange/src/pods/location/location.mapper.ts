import * as am from './api';
import * as vm from './location.vm';

export const mapLocationToVm = (location: am.LocationApiModel): vm.LocationViewModel => ({
  id: location.id,
  name: location.name,
  dimension: location.dimension,
  type: location.type
});
