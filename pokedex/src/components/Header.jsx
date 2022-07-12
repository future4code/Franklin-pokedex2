import React from "react";
import { HeaderContainer, LogoPokebola, PokeButton, PokeLogo} from "./styled";
import pokebola from '../assets/pokebola.png';
import Pokémon_logo from '../assets/Pokémon_logo.png'

const Header = (props) => {
    return(
        <HeaderContainer>
            <PokeButton onClick={props.onClick}><LogoPokebola src={pokebola} alt='pokebola'/></PokeButton>
            <PokeLogo src={Pokémon_logo} alt="pokemon nome"/>
        </HeaderContainer>
    )
}

export default Header