import styled from "styled-components";

export const StatisticName = styled.div`
  padding-right: 12px;
  font-weight: 700;
  font-size: 10px;
  line-height: 16px;
  text-align: right;

  border-right: 1px solid #e0e0e0;

  color: ${(props) => props.color};
`;

export const StatisticValue = styled.div`
  padding-left: 12px;
  padding-right: 8px;
  font-weight: 400;
  font-size: 10px;
  line-height: 16px;

  color: #212121;
`;

export const StatisticBar = styled.img``;

export const ProgressBar = styled.div`
  div {
    div {
      background-color: ${(props) => props.color};
      -webkit-animation: animation-52bxzi 1s linear infinite;
      animation: animation-52bxzi 1s linear infinite;
    }
  }
`;
