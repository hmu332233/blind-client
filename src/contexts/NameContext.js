import React, { useState, createContext } from 'react';


export const NameStateContext = createContext();
export const NameSetContext = createContext();

export function NameProvider({ children }) {
  const [name, setName] = useState('');
  return (
    <NameSetContext.Provider value={setName}>
      <NameStateContext.Provider value={name}>
        {children}
      </NameStateContext.Provider>
    </NameSetContext.Provider>
  );
}