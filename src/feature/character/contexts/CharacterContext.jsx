import { createContext, useState } from "react"

export const CharacterContext = createContext();

export const CharacterContextProvider = ({ children }) => {
  const [characters, setCharacters] = useState(null);

  return (
    <CharacterContext.Provider value={[characters, setCharacters]}>
      {children}
    </CharacterContext.Provider>
  )
};