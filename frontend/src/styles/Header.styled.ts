import styled from "styled-components";

export const StyledHeader = styled.header`
  max-height: 97px;
  margin-top: -5px;
  text-align: center;
  flex: 0.5;

  h1 {
    font-size: 45px;
  }

  @media screen and (max-width: 1025px) {
    margin-top: 55px;
  }
`;
