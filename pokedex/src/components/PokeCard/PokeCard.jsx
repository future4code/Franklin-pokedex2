import { Container, Image, Name, ButtonContainer } from "./styles";
import ButtonStatus from "../ButtonStatus/ButtonStatus";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api";
import useColor from "../../hooks/useColor";

const PokeCard = ({ pokemonCard }) => {
  const [pokemon, setPokemon] = useState({});
  const { color, setColor } = useColor();

  useEffect(() => {
    api
      .get(`pokemon/${pokemonCard.name}`)
      .then((response) => {
        setPokemon(response.data);
        setColor(response.data.types[0].type.name);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [pokemonCard.name, setColor]);

  return (
    <Container color={color}>
      <ButtonContainer>
        <ButtonStatus pokemon={pokemon} />
      </ButtonContainer>
      <Image src={pokemon.sprites?.front_default} />
      <Link to={`/detalhes/${pokemon?.name}`}>
        <Name color={color}>{pokemon?.name}</Name>
      </Link>
    </Container>
  );
};

export default PokeCard;
