import React from 'react'
import { AppLayout } from '#layouts'
import { LocationCollectionContainer } from '../pods/location-collection/location-collection.container';

export const LocationCollectionScene: React.FC = () => {
  return (
    <AppLayout>
      <LocationCollectionContainer />
    </AppLayout>
  )
}
