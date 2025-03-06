import axios from 'axios';
import { ENV_VARIABLES } from '#core/env';
import { LocationCollectionApiModel } from './location-collection.api.model';


export const getLocationCollectionApi = async (): Promise<LocationCollectionApiModel> => {
  const { data } = await axios.get<LocationCollectionApiModel>(`${ENV_VARIABLES.CHARACTERS_API_BASE_URL}/location`);
  return data;
}
