import React from 'react';
import { useParams } from 'react-router-dom';
import { CharacterComponent } from './character.component';
import { getCharacterRepository } from './character.repository';
import { createEmptyCharacterDetail } from './character.vm';

export const CharacterContainer: React.FC = () => {
  const [character, setCharacter] = React.useState(createEmptyCharacterDetail());
  const { id } = useParams<{ id: string }>();

  React.useEffect(() => {
    if (id) {
      getCharacterRepository(Number(id)).then(setCharacter);
    }
  }, [id]);


  return (
    <CharacterComponent character={character} />
  )
}
