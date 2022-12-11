import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';
import { RootStoreProvider } from './store';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <RootStoreProvider>
      <App />
    </RootStoreProvider>
);
