import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 3.25fr;
  justify-content: stretch;
  align-items: stretch;
  height: 100%;
  padding: 4px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.color};
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
`;

export const OrangeBox = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.color};
  background-image: url("/images/pokeball-transparent.png");
  background-position: top 50% right 50% ;
  background-repeat: no-repeat;
  border-radius: 12px;
`;

export const StatisticName = styled.div`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  text-align: center;

  color: #ffffff;
`;

export const StatisticBar = styled.img``;
