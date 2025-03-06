import axios from "axios";
import { EpisodeApiModel } from "./episode.api.model";
import { ENV_VARIABLES } from "#core/env";

export const getEpisodeApi = async (
  episodeId: string
): Promise<EpisodeApiModel> => {
  const { data } = await axios.get<EpisodeApiModel>(`${ENV_VARIABLES.CHARACTERS_API_BASE_URL}/episode/${episodeId}`);
  return data;
}
