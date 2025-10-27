"use client";

import React, { createContext, useContext, useReducer } from "react";

export type Tab = {
  id: string;
  title: string;
};

type State = {
  tabs: Tab[];
  activeId: string | null;
};

type Action =
  | { type: "OPEN_TAB"; tab: Tab }
  | { type: "ACTIVE_TAB"; id: string }
  | { type: "CLOSE_TAB"; id: string };

const initialState: State = {
  tabs: [{ id: "1.1.1", title: "Home" }],
  activeId: "1.1.1",
};

const intialCtx: Ctx = {
  activeId: initialState.activeId,
  tabs: initialState.tabs,
  closeTab: () => {},
  activeTab: () => {},
  openTab: () => {},
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "OPEN_TAB": {
      const exists = state.tabs.some((t) => t.id === action.tab.id);
      const tabs = exists ? state.tabs : [...state.tabs, action.tab];
      return { tabs, activeId: action.tab.id };
    }
    case "ACTIVE_TAB": {
      if (!state.tabs.some((t) => t.id === action.id)) return state;
      return { ...state, activeId: action.id };
    }
    case "CLOSE_TAB": {
      const idx = state.tabs.findIndex((t) => t.id === action.id);
      if (idx === -1) return state;
      const tabs = state.tabs.filter((t) => t.id != action.id);
      if (tabs.length === 0) return { tabs: [], activeId: null };
      const wasActive = state.activeId === action.id;
      const nextIndex = idx < tabs.length ? idx : tabs.length - 1;
      const nextActiveId = wasActive ? tabs[nextIndex].id : state.activeId;
      return { tabs, activeId: nextActiveId };
    }
    default:
      return state;
  }
}

type Ctx = {
  tabs: State["tabs"];
  activeId: State["activeId"];
  openTab: (tab: Tab) => void;
  activeTab: (id: string) => void;
  closeTab: (id: string) => void;
};

const SelectedTabContext = createContext<Ctx | undefined>(intialCtx);

export const SelectedTabProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value: Ctx = {
    tabs: state.tabs,
    activeId: state.activeId,
    openTab: (tab) => dispatch({ type: "OPEN_TAB", tab }),
    activeTab: (id: string) => dispatch({ type: "ACTIVE_TAB", id }),
    closeTab: (id: string) => dispatch({ type: "CLOSE_TAB", id }),
  };
  return (
    <SelectedTabContext.Provider value={value}>
      {children}
    </SelectedTabContext.Provider>
  );
};

export const useSelectedTab = (): Ctx => {
  const context = useContext(SelectedTabContext);
  if (!context)
    throw new Error("useLogs must be used within a SelectedTabProvider");
  return context;
};
