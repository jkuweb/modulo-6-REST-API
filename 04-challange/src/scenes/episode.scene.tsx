import React from 'react'
import { AppLayout } from '#layouts'
import { LocationContainer } from '#pods/location';
import { EpisodeContainer } from '#pods/episode/episode.container';

export const EpisodeScene: React.FC = () => {
  return (
    <AppLayout>
      <EpisodeContainer />
    </AppLayout>
  )
}
