import React from 'react'
import { LocationComponent } from './location.component'
import { createEmptyLocation, LocationViewModel } from './location.vm';
import { useParams } from 'react-router-dom';
import { getLocationRepository } from './location.repository';

export const LocationContainer: React.FC = () => {
  const [location, setLocation] = React.useState<LocationViewModel>(createEmptyLocation());

  const { id } = useParams<{ id: string }>();

  React.useEffect(() => {
    if (id) {
      getLocationRepository(id).then(setLocation)
    }
  }, [id]);

  return (
    <LocationComponent location={location} />
  )
}
