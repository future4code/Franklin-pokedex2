import React from "react";
import PokeCards from "../../components/PokeCards";
import { CardContainer } from "./styled";


const Home = () => {
    return(
        <CardContainer>
            <PokeCards/>
            <PokeCards/>
            <PokeCards/>
            <PokeCards/>
            <PokeCards/>
        </CardContainer>
    )
}

export default Home