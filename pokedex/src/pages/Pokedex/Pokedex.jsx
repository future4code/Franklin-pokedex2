import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import PokeCards from "../../components/PokeCards";
import { usePokedexContext } from "../../contexts/PokedexContext";
import { goToLastPage } from "../../routes/coordinator";
import { updatePokedex } from "../../utils/updatePokedex";
import { CardContainer } from "../Home/styled";

const Pokedex = () => {
  const navigate = useNavigate();
  const { pokedex, setPokedex } = usePokedexContext();

  return (
    <div>
      <Header onClick={() => goToLastPage(navigate)} />
      <CardContainer>
        {pokedex &&
          pokedex.map((pokemon) => {
            return (
              <PokeCards
                key={pokemon.url}
                name={pokemon.name}
                url={pokemon.url}
                nameButton="Remover"
                onClick={() => updatePokedex(pokemon, pokedex, setPokedex)}
              />
            );
          })}
      </CardContainer>
    </div>
  );
};

export default Pokedex;
