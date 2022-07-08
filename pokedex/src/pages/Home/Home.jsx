import React from "react";
import useRequestData from "../../hooks/useRequestData";
import PokeCards from "../../components/PokeCards";
import { CardContainer } from "./styled";
import { BASE_URL } from "../../constants/urls";

const Home = ({addPokemon, setAddPokemon}) => {

    const addToPokedex = (pokemon) => {
        console.log('oi')
        const newPokemon = [...addPokemon]
        newPokemon.push(pokemon)
        setAddPokemon(newPokemon)
       console.log(addPokemon)
    }
   
    const pokemons = useRequestData(`${BASE_URL}/pokemon`, {})

    const pokemonsList = pokemons.results && pokemons.results.map((pokemon) => {
        
           return (
               
            <PokeCards key ={pokemon.url} name={pokemon.name} url={pokemon.url} addToPokedex={() => addToPokedex(pokemon)}/>        
        )
    })
   
    return(
        <CardContainer>
            {pokemonsList}
        </CardContainer>
    )
}

export default Home