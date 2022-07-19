import React from "react";
import Router from "./routes/Router";
import { ChakraProvider } from "@chakra-ui/react";
import PokedexProvider from "./contexts/PokedexContext";

function App() {
  return (
    <ChakraProvider>
      <PokedexProvider>
        <Router />
      </PokedexProvider>
    </ChakraProvider>
  );
}

export default App;
