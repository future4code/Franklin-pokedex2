import React from "react";
import useRequestData from "../../hooks/useRequestData";
import PokeCards from "../../components/PokeCards/PokeCards";
import { CardContainer } from "./styled";
import { BASE_URL } from "../../constants/urls";
import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import { goToPokedex } from "../../routes/coordinator";
import { usePokedexContext } from "../../contexts/PokedexContext";
import PokeLogo from "../../components/PokeLogo/PokeLogo";


const Home = () => {
  const navigate = useNavigate();
  const pokemons = useRequestData(`${BASE_URL}/pokemon`, {});
  const { pokedex, setPokedex } = usePokedexContext();

  const addToPokedex = (pokemon) => {
    const newPokemon = [...pokedex];
    newPokemon.push(pokemon);
    setPokedex(newPokemon);
    let index = pokemons.results.indexOf(pokemon);
    pokemons.results.splice(index, 1);
  };

  return (
    <div>
      <Header onClick={() => goToPokedex(navigate)} children={<PokeLogo/>} />
      <CardContainer>
        {pokemons.results &&
          pokemons.results.map((pokemon) => {
            return (
              <PokeCards
                key={pokemon.url}
                name={pokemon.name}
                url={pokemon.url}
                onClick={() => addToPokedex(pokemon)}
                nameButton="Adicionar a Pokedex"
              />
            );
          })}
      </CardContainer>
    </div>
  );
};

export default Home;
