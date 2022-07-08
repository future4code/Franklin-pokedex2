import React from "react";
import { HeaderContainer, LogoPokebola, PokeButton} from "./styled";
import pokebola from '../assets/pokebola.png';

const Header = (props) => {
    return(
        <HeaderContainer>
            <PokeButton onClick={props.onClick}><LogoPokebola src={pokebola} alt='pokebola'/></PokeButton>
            <h1>Pokemon</h1>
        </HeaderContainer>
    )
}

export default Header