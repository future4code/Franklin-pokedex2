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
} from "./styles";

import BaseStats from "../../components/BaseStats/BaseStats.jsx";
import MainAttacks from "../../components/MainAttacks/MainAttacks";
import Header from "../../components/Header";

function DetailPage() {
  return (
    <Container>
      <ImgFront>
        <Image src="images/charmander.png" height={200} width={200} />
      </ImgFront>

      <ImgBack>
        <Image src="images/charmander.png" height={200} width={200} />
      </ImgBack>

      <Skills>
        <Name>Charmander</Name>
        <WhiteBox>
          <TypeContainer>
            <Type>Fire</Type>
            <Type>Grass</Type>
          </TypeContainer>
          <BaseStats></BaseStats>
        </WhiteBox>
      </Skills>

      <MainAttacksContainer>
        <WhiteBox>
          <MainAttacks></MainAttacks>
        </WhiteBox>
      </MainAttacksContainer>
    </Container>
  );
}

export default DetailPage;
