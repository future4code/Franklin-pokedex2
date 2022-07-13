import React from "react"
import { PokemonLogo } from "./styled"
import Pokémon_logo from '../../assets/Pokémon_logo.png'


const PokeLogo = () => {
    return(
        <PokemonLogo src={Pokémon_logo} alt="pokemon nome"/>
    )
}

export default PokeLogo