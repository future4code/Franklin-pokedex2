import React from "react";
import useRequestData from "../../hooks/useRequestData";
import PokeCards from "../../components/PokeCards/PokeCards";
import { CardContainer, PaginationContainer } from "./styled";
import { BASE_URL } from "../../constants/urls";
import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import { goToPokedex } from "../../routes/coordinator";
import { usePokedexContext } from "../../contexts/PokedexContext";
import PokeLogo from "../../components/PokeLogo/PokeLogo";
import { useEffect, useState } from "react";
import Pagination from "../../components/PaginationButton/PaginationButton";

const Home = () => {
  const navigate = useNavigate();
  const [currentPageUrl, setCurrentPageUrl] = useState(`${BASE_URL}/pokemon`);
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const pokemons = useRequestData(currentPageUrl, {});
  const { pokedex, setPokedex } = usePokedexContext();

  useEffect(() => {
    setNextPageUrl(pokemons.next);
    setPrevPageUrl(pokemons.previous);
  }, [pokemons]);

  function goToNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }
  function goToPrevPage() {
    setCurrentPageUrl(prevPageUrl);
  }
  const addToPokedex = (pokemon) => {
    const newPokemon = [...pokedex];
    newPokemon.push(pokemon);
    setPokedex(newPokemon);
    let index = pokemons.results.indexOf(pokemon);
    pokemons.results.splice(index, 1);
  };

  return (
    <div>
       <div>
      <Header onClick={() => goToPokedex(navigate)} children={<PokeLogo />} />
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
    <PaginationContainer>
      {goToPrevPage && (
        <Pagination goToPrevPage={prevPageUrl ? goToPrevPage : null} />
      )}
      {goToNextPage && (
        <Pagination goToNextPage={nextPageUrl ? goToNextPage : null} />
      )}
    </PaginationContainer>
    </div>
  );
};

export default Home;
