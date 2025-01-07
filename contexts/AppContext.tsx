import React, { useState, ReactNode, createContext, useContext } from "react";

interface AppContextProps {
    channel: any | null; // Replace `any` if possible later
    setChannel: (channel: any | null) => void; 
    thread: any | null;
    setThread: (thread: any | null) => void; 
  }

export const AppContext = createContext<AppContextProps>({
  channel: null,
  setChannel: (channel) => {},
  thread: null,
  setThread: (thread) => {},
});


interface AppProviderProps {
    children: ReactNode;
  }

export const AppProvider = ({ children } : AppProviderProps) => {
  const [channel, setChannel] = useState();
  const [thread, setThread] = useState();

  return (
    <AppContext.Provider value={{ channel, setChannel, thread, setThread }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);