import { Container, OrangeBox, StatisticName, Title } from "./styles.jsx";

function MainAttacks({ moves, color }) {
  return (
    <Container>
      <Title color={color}>Main Attacks</Title>
      <OrangeBox color={color}>
        {moves?.slice(0, 5).map((slot, index) => {
          return (
            <StatisticName key={index}>
              {slot.move?.name}
            </StatisticName>
          );
        })}
      </OrangeBox>
    </Container>
  );
}

export default MainAttacks;
