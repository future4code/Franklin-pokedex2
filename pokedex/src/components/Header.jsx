import React from "react";
import { HeaderContainer, LogoPokebola, PokeButton} from "./styled";
import pokebola from '../assets/pokebola.png';
import {useNavigate} from 'react-router-dom';
import { goToPokedex } from "../routes/coordinator";

const Header = () => {
    const navigate = useNavigate()
    return(
        <HeaderContainer>
            <PokeButton onClick={() => goToPokedex(navigate)}><LogoPokebola src={pokebola} alt='pokebola'/></PokeButton>
            <h1>Pokemon</h1>
        </HeaderContainer>
    )
}

export default Header