import { Container, Image, Name, ButtonContainer } from "./styles";
import ButtonStatus from "../ButtonStatus/ButtonStatus";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api";

const PokeCard = ({ pokemonCard }) => {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    api
      .get(`pokemon/${pokemonCard.name}`)
      .then((response) => {
        setPokemon(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },[pokemonCard.name]);

  return (
    <Container>
      <ButtonContainer>
        <ButtonStatus pokemon={pokemon} />
      </ButtonContainer>
      <Image src={pokemon.sprites?.front_default} height={200} width={200} />
      <Name>
        <Link to={`/detalhes/${pokemon?.name}`}>
          {pokemon.name?.toUpperCase()}
        </Link>
      </Name>
    </Container>
  );
};

export default PokeCard;
