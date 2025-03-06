import React from 'react';
import { ThemeProviderComponent } from '#core/theme';
import { RouterComponent } from '#core/router';
import { CharacterProvider } from '#pods/character/providers/character.provider';

const App: React.FunctionComponent = () => {
  return <RouterComponent />;
};

const AppProviders: React.FunctionComponent = () => {
  return (
    <ThemeProviderComponent>
      <CharacterProvider>
        <App />
      </CharacterProvider>
    </ThemeProviderComponent>
  );
};

export default AppProviders;

