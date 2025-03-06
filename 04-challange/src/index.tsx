import React from 'react';
import { createRoot } from 'react-dom/client';
import { PaginationProvider } from '#common/providers';
import { ThemeProviderComponent } from '#core/theme';
import { App } from '#app';
import { CharacterProvider } from '#pods/character-collection/providers';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ThemeProviderComponent>
    <PaginationProvider>
      <CharacterProvider>
        <App />
      </CharacterProvider>
    </PaginationProvider>
  </ThemeProviderComponent>
);
