import { createContext, useState } from "react"

export const CharacterContext = createContext();

export const CharacterContextProvider = ({ children }) => {
  const [characters, setCharacters] = useState(null);

  const backHome = () => {
    setCharacters(null);
  }

  return (
    <CharacterContext.Provider value={[characters, setCharacters, backHome]}>
      {children}
    </CharacterContext.Provider>
  )
};