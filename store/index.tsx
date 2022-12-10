import { ModelAutoTypeCheckingMode, setGlobalConfig } from 'mobx-keystone';
import React from 'react'
import { createContext, ReactNode, useContext } from 'react';
import { UiStore } from './ui-store';

setGlobalConfig({
  modelAutoTypeChecking: ModelAutoTypeCheckingMode.AlwaysOn,
});

let store: RootStore;

interface RootStoreProviderProps {
  children: ReactNode;
}

export class RootStore {
  uiStore: UiStore;

  constructor() {
    this.uiStore = new UiStore({ check: false });
  }
}

const StoreContext = createContext<RootStore | undefined>(undefined);

function RootStoreProvider({ children }: RootStoreProviderProps) {
  const root = store ?? new RootStore();
  return <StoreContext.Provider value={root}>{children}</StoreContext.Provider>;
}

function useRootStore() {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('useRootStore must be used within RootStoreProvider');
  }
  return context;
}

export { RootStoreProvider, StoreContext, useRootStore };
