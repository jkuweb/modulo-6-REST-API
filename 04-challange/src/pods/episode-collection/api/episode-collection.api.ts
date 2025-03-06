import axios from "axios";
import { EpisodeCollectionApiModel } from "./episode-collection.api.model";
import { ENV_VARIABLES } from "#core/env";

export const getEpisodeCollectionApi = async (): Promise<EpisodeCollectionApiModel> => {
  const { data } = await axios.get<EpisodeCollectionApiModel>(`${ENV_VARIABLES.CHARACTERS_API_BASE_URL}/episode`);
  return data;
}
