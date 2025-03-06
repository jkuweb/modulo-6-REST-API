import axios from 'axios';
import { CharacterApiModel } from './character.api.model';
import { CharacterViewModel } from '../character.vm';

const characterUrl = '/api/character'

export const getCharacterApi = async (id: string): Promise<CharacterApiModel> => {
  try {
    const { data } = await axios.get<CharacterApiModel>(`${characterUrl}/${id}`);
    return data;

  } catch (error) {
    throw new Error("No se ha podido obtener los personajes");
  }
};

// export const putBestSentence = async (id: string, sentence: string): Promise<void> => {
//   await axios.put(`${characterUrl}/${id}`, sentence);
// }


export const putBestSentence = async (character): Promise<void> => {
  try {
    await axios.put(`${characterUrl}/${character.id}`, character)
  } catch (error) {
    throw new Error("No se ha podido actualizar el personaje");
  }
}

