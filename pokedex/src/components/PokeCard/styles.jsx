import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  gap: 8px;

  font-family: "Poppins";
  background: ${(props) => props.color};
  border: 1px solid ${(props) => props.color};
  border-radius: 8px;

  img {
    height: 150px;
    width: 150px;
  }

  @media only screen and (min-width: 576px) {
    img {
      height: 200px;
      width: 200px;
    }
  }
`;

export const Image = styled.img``;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  margin: 8px;
  font-size: 10px;
`;

export const Name = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  color: #ffffff;
  background: ${(props) => props.color};
`;
