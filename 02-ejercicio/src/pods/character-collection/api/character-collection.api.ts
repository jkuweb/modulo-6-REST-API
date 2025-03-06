import axios from "axios";
import { CharacterListResponse } from "./character-collection.api.model";

const url = '/api/character';

export const getCharacterCollectionApi = async (): Promise<CharacterListResponse> => {
  const { data } = await axios.get<CharacterListResponse>(url);
  return data;
};
