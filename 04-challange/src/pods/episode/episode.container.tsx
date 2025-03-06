import React from 'react';
import { useParams } from 'react-router-dom';
import { Episode } from './episode.component';
import { createEmptyEpisode, EpisodeViewModel } from './episode.vm';
import { getEpisodeRepository } from './episode.repository';

export const EpisodeContainer: React.FC = () => {
  const [episode, setEpisode] = React.useState<EpisodeViewModel>(createEmptyEpisode());

  const { id } = useParams<{ id: string }>();

  React.useEffect(() => {
    if (id) {
      getEpisodeRepository(id).then(setEpisode)
    }
  }, [id]);


  return (
    <Episode episode={episode} />
  )
}
