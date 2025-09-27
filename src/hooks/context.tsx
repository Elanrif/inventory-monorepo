"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// Types pour les données du contexte
interface AppContextType {
  user: {
    id: string;
    email: string;
    name: string;
  } | null;
  loading: boolean;
  setUser: (user: AppContextType["user"]) => void;
  setLoading: (loading: boolean) => void;
}

// Création du contexte
const AppContext = createContext<AppContextType | undefined>(undefined);

// Props du provider
interface AppProviderProps {
  children: ReactNode;
}

// Provider du contexte
export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [user, setUser] = useState<AppContextType["user"]>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const contextValue: AppContextType = {
    user,
    loading,
    setUser,
    setLoading,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }

  return context;
};
