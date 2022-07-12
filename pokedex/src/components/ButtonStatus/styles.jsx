import styled from "styled-components";

export const Button = styled.button`
 
  padding: 6px;
  border-radius: 6px;

  color: #ffffff;
  background: ${(props) => props.color};
`;