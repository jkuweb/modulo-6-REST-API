import React from "react"
import { AppLayout } from "#layouts"
import { EpisodeCollectionContainer } from "#pods/episode-collection"

export const EpisodeCollectionScene: React.FC = () => {
  return (
    <AppLayout>
      <EpisodeCollectionContainer />
    </AppLayout>
  )
}
