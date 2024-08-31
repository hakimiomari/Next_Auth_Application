"use client";
import React, { createContext, ReactNode, useState } from "react";

type AuthContextType = {
  isAuth: boolean;
  setIsAuth: (isAuth: boolean) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  message: string;
  setMessage: (message: string) => void;
  user: Object | null;
  setUser: (user: Object) => void;
};

export const AppContext = createContext<AuthContextType>({
  isAuth: false,
  setIsAuth: () => {},
  isLoading: true,
  setIsLoading: () => {},
  message: "",
  setMessage: (message: string) => {},
  user: {},
  setUser: (user: any) => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

export function AppWrapper({ children }: AuthProviderProps) {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [user, setUser] = useState<Object>({});

  return (
    <AppContext.Provider
      value={{
        isAuth,
        setIsAuth,
        isLoading,
        setIsLoading,
        message,
        setMessage,
        user,
        setUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
