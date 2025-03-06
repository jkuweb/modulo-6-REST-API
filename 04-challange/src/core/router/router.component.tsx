import React from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import { switchRoutes } from './routes';
import { CharacterCollectionScene, CharacterScene, EpisodeCollectionScene, EpisodeScene, LocationCollectionScene, LocationScene } from '#scenes';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={switchRoutes.characterCollection}
          element={<CharacterCollectionScene />}
        />
        <Route path={switchRoutes.character} element={<CharacterScene />} />
        <Route
          path={switchRoutes.root}
          element={<Navigate to={switchRoutes.characterCollection} />}
        />
        <Route path={switchRoutes.locationCollection} element={<LocationCollectionScene />} />
        <Route path={switchRoutes.location} element={<LocationScene />} />
        <Route path={switchRoutes.episodeCollection} element={<EpisodeCollectionScene />} />
        <Route path={switchRoutes.episode} element={<EpisodeScene />} />
      </Routes>
    </BrowserRouter>
  )
}
