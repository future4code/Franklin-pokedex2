import { Container, OrangeBox, StatisticName, Title } from "./styles.jsx";

function MainAttacks() {
  return (
    <Container>
      <Title>Main Attacks</Title>
      <OrangeBox>
        <StatisticName>HP</StatisticName>
        <StatisticName>ATTACK</StatisticName>
        <StatisticName>DEFENSE</StatisticName>
        <StatisticName>SPECIAL-ATTACK</StatisticName>
        <StatisticName>SPECIAL-DEFENSE</StatisticName>
        <StatisticName>SPEED</StatisticName>
      </OrangeBox>
    </Container>
  );
}

export default MainAttacks;
