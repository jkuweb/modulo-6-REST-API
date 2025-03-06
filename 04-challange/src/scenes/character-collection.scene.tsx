import React from 'react'
import { AppLayout, TableLayout } from '#layouts'
import { CharacterCollectionContainer } from '#pods/character-collection'

export const CharacterCollectionScene: React.FC = () => {
  return (
    <AppLayout>
      <TableLayout>
        <CharacterCollectionContainer />
      </TableLayout>
    </AppLayout>
  )
}
