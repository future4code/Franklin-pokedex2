import React from "react";
import useRequestData from "../../hooks/useRequestData";
import PokeCards from "../../components/PokeCards";
import { CardContainer } from "./styled";
import { BASE_URL } from "../../constants/urls";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import {goToPokedex} from "../../routes/coordinator"

const Home = ({addPokemon, setAddPokemon}) => {
    const navigate = useNavigate()
    const pokemons = useRequestData(`${BASE_URL}/pokemon`, {})
    const addToPokedex = (pokemon) => {
        const newPokemon = [...addPokemon]
        newPokemon.push(pokemon)
        setAddPokemon(newPokemon)  
    }
     console.log(addPokemon)
    return(
        <div>
        <Header onClick={() => goToPokedex(navigate)}/>
        <CardContainer>
        {pokemons.results && pokemons.results.map((pokemon) => {
           return ( 
            <PokeCards key={pokemon.url} name={pokemon.name} url={pokemon.url} onClick={() => addToPokedex(pokemon)}
            nameButton='Adicionar a Pokedex'/>        
        )
    })}
        </CardContainer>
        </div>
    )
}

export default Home