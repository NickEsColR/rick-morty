import { createContext } from "react";

export const CharacterFilterContext = createContext([
  "",
  () => {},
  "",
  () => {},
  "",
  () => {},
  "",
  () => {},
  "",
  () => {},
]);

/**
 * This function is a provider for the CharacterFilterContext
 * @param {JSX.Element} param0 
 * @returns {JSX.Element}
 */
export const CharacterFilterContextProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  const [type, setType] = useState("");
  const [gender, setGender] = useState("");

  return (
    <CharacterFilterContext.Provider
      value={{
        name,
        setName,
        status,
        setStatus,
        species,
        setSpecies,
        type,
        setType,
        gender,
        setGender,
      }}
    >
      {children}
    </CharacterFilterContext.Provider>
  );
};
