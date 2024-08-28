"use client";
import React, { createContext, ReactNode, useState } from "react";

type AuthContextType = {
  isAuth: boolean;
  setIsAuth: (isAuth: boolean) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
};

export const AppContext = createContext<AuthContextType>({
  isAuth: false,
  setIsAuth: () => {},
  isLoading: true,
  setIsLoading: () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

export function AppWrapper({ children }: AuthProviderProps) {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <AppContext.Provider value={{ isAuth, setIsAuth, isLoading, setIsLoading }}>
      {children}
    </AppContext.Provider>
  );
}
