import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  characterCollection: string;
  character: string;
  locationCollection: string;
  location: string;
  episodeCollection: string;
  episode: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  characterCollection: '/',
  character: '/character/:id',
  locationCollection: '/locations',
  location: '/location/:id',
  episodeCollection: '/episodes',
  episode: '/episode/:id',
};

type NavigationFunction = (id: string) => string;

interface LinkRoutes extends Omit<SwitchRoutes, 'character' | 'location' | 'episode'> {
  character: NavigationFunction;
  location: NavigationFunction;
  episode: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  character: (id) => generatePath(switchRoutes.character, { id }),
  location: (id) => generatePath(switchRoutes.location, { id }),
  episode: (id) => generatePath(switchRoutes.episode, { id })
};
