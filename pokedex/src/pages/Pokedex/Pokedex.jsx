import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import PokeCards from "../../components/PokeCards";
import { goToLastPage } from "../../routes/coordinator";
import { CardContainer } from "../Home/styled";

const Pokedex = ({addPokemon}) => {
    const navigate = useNavigate()
    console.log(addPokemon, 'pokedex')
    return(
        <div>
            <Header onClick={() => goToLastPage(navigate)}/>
        <CardContainer>
            {addPokemon && addPokemon.map((pokemon) => {
           return (
            <PokeCards key={pokemon.url} name={pokemon.name} url={pokemon.url}
            nameButton='Remover'/>      
        )   
    })}
        </CardContainer>
        </div>
    )
}


export default Pokedex