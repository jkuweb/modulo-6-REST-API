import React from 'react';
import { CharacterViewModel } from './character.vm';
import { CharacterCard } from './components/character-card.component';

interface Props {
  character: CharacterViewModel
}

export const CharacterComponent: React.FC<Props> = ({ character }) => {
  return (
    <CharacterCard character={character} />
  )
}
