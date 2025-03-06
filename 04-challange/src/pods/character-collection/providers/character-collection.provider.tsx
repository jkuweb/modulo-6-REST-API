import React, { PropsWithChildren } from 'react';
import {
  getCharacterCollectionRepository,
  getCharacterPerPage,
} from '../character-collection.repository';
import { CharacterViewModel, createEmptyCharacterCollection } from '../character-collection.vm';


interface CharacterContext {
  characters: CharacterViewModel[];
  setPage: (value: string) => void;
  setFilter: (value: string) => void;
  page: string;
}

const CharacterContext = React.createContext<CharacterContext>({
  characters: [],
  setFilter: (value: string) => { },
  setPage: () => { },
  page: '1',
});

export const CharacterProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [characters, setCharacters] = React.useState<CharacterViewModel[]>(
    createEmptyCharacterCollection()
  );
  const [filter, setFilter] = React.useState('');
  const [page, setPage] = React.useState('0');

  React.useEffect(() => {
    getCharacterCollectionRepository(filter).then(setCharacters);
  }, [filter]);

  React.useEffect(() => {
    getCharacterPerPage(page).then(setCharacters);
  }, [page]);

  return (
    <CharacterContext.Provider value={{ characters, setFilter, page, setPage }}>
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacterContext = () => React.useContext(CharacterContext);
