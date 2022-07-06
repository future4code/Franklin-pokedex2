import React from "react";
import { HeaderContainer, LogoPokebola, PokeButton} from "./styled";
import pokebola from '../assets/pokebola.png';

const Header = () => {
    return(
        <HeaderContainer>
            <PokeButton><LogoPokebola src={pokebola} alt='pokebola'/></PokeButton>
            <h1>Pokemon</h1>
        </HeaderContainer>
    )
}

export default Header