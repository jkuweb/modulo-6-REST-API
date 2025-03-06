import axios from 'axios';
import { ENV_VARIABLES } from '#core/env';
import { LocationApiModel } from './location.api.model';


export const getLocationApi = async (
  locationId: string
): Promise<LocationApiModel> => {
  const { data } = await axios.get<LocationApiModel>(`${ENV_VARIABLES.CHARACTERS_API_BASE_URL}/location/${locationId}`);
  return data;
}

