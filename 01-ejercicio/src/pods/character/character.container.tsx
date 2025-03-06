import React from 'react'
import { createEmptyCharacterDetail } from './character.vm'
import { getCharacterRepository } from './character.repositry';
import { useParams } from 'react-router-dom';
import { CharacterComponent } from './character.component';

export const CharacterContainer: React.FC = () => {
  const [character, setCharacter] = React.useState(createEmptyCharacterDetail());
  const { id } = useParams<{ id: string }>();

  React.useEffect(() => {
    if (id) {
      getCharacterRepository(id).then(setCharacter);
    }
  }, [id]);

  return (
    <CharacterComponent character={character} />
  )
}
