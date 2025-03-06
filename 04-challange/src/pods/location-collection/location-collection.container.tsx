import React from 'react'
import { LocationCollection } from './location-collection.component'
import { createEmptyCharacterCollection } from './location-collection.vm'
import { getLocationCollectionRepository } from './location-collection.repository';

export const LocationCollectionContainer: React.FC = () => {
  const [locations, setLocations] = React.useState(createEmptyCharacterCollection());

  React.useEffect(() => {
    getLocationCollectionRepository().then(setLocations);
  }, [])
  return (
    <LocationCollection locations={locations} />
  )
}
