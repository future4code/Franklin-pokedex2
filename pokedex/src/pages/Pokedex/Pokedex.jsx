import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import PokeCards from "../../components/PokeCards/PokeCards";
import { usePokedexContext } from "../../contexts/PokedexContext";
import PokeBall from "../../components/PokeBall/PokeBall";
import { goToLastPage } from "../../routes/coordinator";
import { updatePokedex } from "../../utils/updatePokedex";
import { CardContainer } from "../Home/styled";

const Pokedex = () => {
  const navigate = useNavigate();
  const { pokedex, setPokedex } = usePokedexContext();

  return (
    <div>
      <Header onClick={() => goToLastPage(navigate)} children={<PokeBall img={"/images/pokebola.png"} />} />
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
