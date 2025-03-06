import React from 'react'
import { EpisodeCollection } from './episode-collection.component'
import { createEmptyEpisodeCollection, EpisodeViewModel } from './episode-collection.vm';
import { getEpisodeCollectionRepository } from './episode-collection.repository';

export const EpisodeCollectionContainer: React.FC = () => {
  const [episodes, setEpisodes] = React.useState<EpisodeViewModel[]>(createEmptyEpisodeCollection());

  React.useEffect(() => {
    getEpisodeCollectionRepository().then(setEpisodes)
  }, [])

  return (
    <EpisodeCollection episodes={episodes} />
  )
}
