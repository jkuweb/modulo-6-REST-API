import React from 'react';
import { CharacterViewModel } from './character-collection.vm';
import { CharacterCard } from './components';
import * as classes from './character-collection.styles'

interface Props {
  characters: CharacterViewModel[]
}

export const CharacterCollection: React.FC<Props> = ({ characters }) => {
  return (
    <>
      <div className={classes.root}>
        <ul className={classes.list}>
          {characters.map((character) => (
            <li key={character.id}>
              <CharacterCard character={character} />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
