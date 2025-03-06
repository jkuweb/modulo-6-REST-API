import { AppLayout } from '#layouts'
import { CharacterCollectionContainer } from '#pods/character-collection'
import React from 'react'

export const CharacterCollectionScene: React.FC = () => {
  return (
    <AppLayout>
      <CharacterCollectionContainer />
    </AppLayout>
  )
}
