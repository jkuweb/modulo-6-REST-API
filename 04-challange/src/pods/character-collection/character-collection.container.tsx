import React from 'react'
import { CharacterCollection } from './character-collection.component'
import { useCharacterContext } from './providers';

export const CharacterCollectionContainer: React.FC = () => {
  const { characters } = useCharacterContext();

  return (
    <CharacterCollection characters={characters} />
  )
}
