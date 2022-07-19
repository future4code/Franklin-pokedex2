import React from "react";
import { HeaderContainer, PokeButton} from "./styled";

const Header = ({onClick, children}) => {
    return(
        <HeaderContainer>
           
            <PokeButton onClick={onClick}>{children}</PokeButton>
            
        </HeaderContainer>
    )
}

export default Header