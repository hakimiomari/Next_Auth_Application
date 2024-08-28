"use client";
import React, { createContext, ReactNode, useState } from "react";

type AuthContextType = {
  isAuth: boolean;
  setIsAuth: (isAuth: boolean) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  message: string;
  setMessage: (message: string) => void;
};

export const AppContext = createContext<AuthContextType>({
  isAuth: false,
  setIsAuth: () => {},
  isLoading: true,
  setIsLoading: () => {},
  message: '',
  setMessage: (message: string) => {}
});

interface AuthProviderProps {
  children: ReactNode;
}

export function AppWrapper({ children }: AuthProviderProps) {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  return (
    <AppContext.Provider value={{ isAuth, setIsAuth, isLoading, setIsLoading, message, setMessage }}>
      {children}
    </AppContext.Provider>
  );
}
