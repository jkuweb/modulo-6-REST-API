import React from 'react';
import { CharacterCollection } from './character-collection.component';
import { getCharacterCollectionRepository } from './character-collection.repository';
import { CharacterViewModel, createEmptyCharacterCollection } from './character-collection.vm';

export const CharacterCollectionContainer: React.FC = () => {
  const [characters, setCharacters] = React.useState<CharacterViewModel[]>(createEmptyCharacterCollection());

  React.useEffect(() => {
    getCharacterCollectionRepository().then(setCharacters)
  }, []);

  return (
    <CharacterCollection characters={characters} />
  )
}
