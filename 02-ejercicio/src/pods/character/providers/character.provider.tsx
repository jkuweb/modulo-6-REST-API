import React, { PropsWithChildren } from "react";
import { CharacterViewModel, createEmptyCharacterDetail } from "#pods/character/character.vm";
import { getCharacterRepository } from "#pods/character/character.repositry";
import { putBestSentence } from "../api";
import { Character } from '../../../../server/src/model';

interface CharacterContextModel {
  character: CharacterViewModel;
  getCharacterDetail: (id: string) => Promise<CharacterViewModel>;
  insertCharacterSentence: (character: CharacterViewModel) => void;
  setCharacter: (character: CharacterViewModel) => void;
}

export const CharacterContext = React.createContext<CharacterContextModel>(null);


export const CharacterProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [character, setCharacter] = React.useState(createEmptyCharacterDetail());

  const getCharacterDetail = async (id: string) => {
    const character = await getCharacterRepository(id);
    setCharacter(character);
    return character;
  }

  const insertCharacterSentence = async (character: CharacterViewModel) => {
    putBestSentence(character)
  }

  return (
    <CharacterContext.Provider value={{ getCharacterDetail, insertCharacterSentence, character, setCharacter }}>
      {children}
    </CharacterContext.Provider>
  )
}

export const useCharacterContext = (): CharacterContextModel => React.useContext(CharacterContext);
