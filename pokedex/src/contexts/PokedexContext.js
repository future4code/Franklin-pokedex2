import { createContext, useContext, useState } from "react";

const PokedexContext = createContext();

export function usePokedexContext() {
  const { pokedex, setPokedex } = useContext(PokedexContext);

  return { pokedex, setPokedex };
}

export default function PokedexProvider({ children }) {
  const [pokedex, setPokedex] = useState([]);

  return (
    <PokedexContext.Provider value={{ pokedex, setPokedex }}>
      {children}
    </PokedexContext.Provider>
  );
}
