import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  gap: 8px;

  font-family: "Poppins";
  background: #ffffff;
  border: 1px solid #74cb48;
  border-radius: 8px;
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
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  color: #ffffff;
  background: #74cb48;
`;
