import {
  Container,
  Image,
  ImgBack,
  ImgFront,
  MainAttacksContainer,
  Name,
  Type,
  Skills,
  WhiteBox,
  TypeContainer,
  GridContainer,
  ButtonContainer,
} from "./styles";

import BaseStats from "../../components/BaseStats/BaseStats.jsx";
import MainAttacks from "../../components/MainAttacks/MainAttacks";
import Header from "../../components/Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api";
import useColor from "../../hooks/useColor";
import ButtonStatus from "../../components/ButtonStatus/ButtonStatus";

function DetailPage() {
  const { name } = useParams();
  const { color, setColor } = useColor();
  const [pokemon, setData] = useState({});

  useEffect(() => {
    api(`pokemon/${name}`)
      .then((response) => {
        setData(response.data);
        setColor(response.data.types[0].type.name);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [name, setColor]);

  return (
    <Container>
      <Header />
      <GridContainer>
        <ImgFront color={color}>
          <Image
            src={pokemon.sprites?.front_default}
            height={200}
            width={200}
          />
        </ImgFront>

        <ImgBack color={color}>
          <Image src={pokemon.sprites?.back_default} height={200} width={200} />
        </ImgBack>

        <Skills color={color}>
          <Name>{pokemon?.name}</Name>
          <WhiteBox>
            <ButtonContainer>
              <ButtonStatus pokemon={pokemon} />
            </ButtonContainer>

            <TypeContainer>
              {pokemon.types?.map((slot, index) => {
                return (
                  <Type key={index} color={color}>
                    {slot.type?.name}
                  </Type>
                );
              })}
            </TypeContainer>
            <BaseStats stats={pokemon?.stats} color={color} />
          </WhiteBox>
        </Skills>

        <MainAttacksContainer color={color}>
          <WhiteBox>
            <MainAttacks moves={pokemon?.moves} color={color} />
          </WhiteBox>
        </MainAttacksContainer>
      </GridContainer>
    </Container>
  );
}

export default DetailPage;
