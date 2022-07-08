import React from "react";
import useRequestData from "../../hooks/useRequestData";
import PokeCards from "../../components/PokeCards";
import { CardContainer } from "./styled";
import { BASE_URL } from "../../constants/urls";

const Home = () => {
   
    const pokemons = useRequestData(`${BASE_URL}/pokemon`, {})
    const pokemonsList = pokemons.results && pokemons.results.map((pokemon) => {
        
           return (
               
            <PokeCards key ={pokemon.url} name={pokemon.name} url={pokemon.url}/>        
        )
    })
   
    return(
        <CardContainer>
            {pokemonsList}
        </CardContainer>
    )
}

export default Home