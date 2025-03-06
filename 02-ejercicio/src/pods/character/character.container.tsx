import React from 'react';
import { useParams } from 'react-router-dom';
import { createEmptyCharacterDetail } from './character.vm';
import { CharacterComponent } from './character.component';
import { useCharacterContext } from './providers';

export const CharacterContainer: React.FC = () => {
  const { getCharacterDetail } = useCharacterContext();
  const [character, setCharacter] = React.useState(createEmptyCharacterDetail());
  const { id } = useParams<{ id: string }>();

  React.useEffect(() => {
    if (id) {
      getCharacterDetail(id).then(setCharacter);
    }
  }, [id])

  return (
    <CharacterComponent character={character} />
  )
}
