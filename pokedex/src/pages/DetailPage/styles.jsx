import styled from "styled-components";

export const Container = styled.main`
  display: grid;
  grid-template-areas: "img-front skills main-attacks" "img-back skills main-attacks";

  gap: 16px;
  padding: 16px;

  font-family: "Poppins";
  background: #ffffff7f;
  border-radius: 12px;
`;

export const ImgFront = styled.div`
  grid-area: img-front;

  display: flex;
  justify-content: center;
  align-items: center;
  background: #f57d31;

  border-radius: 12px;
`;

export const ImgBack = styled.div`
  grid-area: img-back;

  display: flex;
  justify-content: center;
  align-items: center;
  background: #f57d31;

  border-radius: 12px;
`;

export const Skills = styled.div`
  grid-area: skills;

  display: grid;
  justify-content: stretch;
  align-items: center;
  padding: 4px;

  background: #f57d31;
  border-radius: 12px;
`;

export const MainAttacksContainer = styled.div`
  grid-area: main-attacks;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  background: #f57d31;
  border-radius: 12px;
`;

export const Name = styled.div`
  text-align: center;
  color: #ffffff;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
`;

export const Image = styled.img``;

export const WhiteBox = styled.div`
  display: grid;
  height: 100%;
  width: 100%;

  background: #ffffff;
  border-radius: 8px;
`;

export const TypeContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px;
  gap: 16px;
`;

export const Type = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 8px;

  width: 35px;
  height: 20px;

  background: #f57d31;
  border-radius: 10px;

  font-weight: 700;
  font-size: 10px;
  line-height: 16px;

  color: #ffffff;
`;