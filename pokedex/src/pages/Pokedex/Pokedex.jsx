import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import PokeCards from "../../components/PokeCards";
import { goToLastPage } from "../../routes/coordinator";
import { CardContainer } from "../Home/styled";

const Pokedex = ({addPokemon, setAddPokemon}) => {
    const navigate = useNavigate()
    const removeFromPokedex = (poke) =>{
        const newPokemon =[...addPokemon]
        const index  = newPokemon.findIndex((pokemon) => { return pokemon.url === poke}, [0])
        newPokemon.splice(index, 1)
            setAddPokemon(newPokemon)
            console.log(index, 'pokdex')
    } 

    return(
        <div>
            <Header onClick={() => goToLastPage(navigate)}/>
        <CardContainer>
            {addPokemon && addPokemon.map((pokemon) => {
           return (
            <PokeCards key={pokemon.url} name={pokemon.name} url={pokemon.url}
            nameButton='Remover'
            onClick={removeFromPokedex}/>      
        )   
    })}
        </CardContainer>
        </div>
    )
}


export default Pokedex