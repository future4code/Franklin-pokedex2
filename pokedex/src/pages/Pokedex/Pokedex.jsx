import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import PokeCard from "../../components/PokeCard/PokeCard";
import { usePokedexContext } from "../../contexts/PokedexContext";
import PokeBall from "../../components/PokeBall/PokeBall";
import { Container, ContainerGrid } from "./styles";

const Pokedex = () => {
  const navigate = useNavigate();
  const { pokedex } = usePokedexContext();

  return (
    <Container>
      <Header
        onClick={() => navigate(-1)}
        children={<PokeBall img={"/images/pokeball.png"} />}
      />
      <ContainerGrid>
        {pokedex?.map((pokemon, index) => {
          return <PokeCard key={index} pokemonCard={pokemon} />;
        })}
      </ContainerGrid>
    </Container>
  );
};

export default Pokedex;
