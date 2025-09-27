"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type User = {
    id: string;
    email: string;
    name: string;
    phone: string;
    address: string;
  } | null;

interface AppContextType {
  user: User;
  loading: boolean;
  setUser: (user: User) => void;
  setLoading: (loading: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// Props du provider
interface AppProviderProps {
  children: ReactNode;
}

// Provider du contexte
export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>(null);
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
