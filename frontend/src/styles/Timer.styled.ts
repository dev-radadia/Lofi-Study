import styled from "styled-components";

export const StyledTimer = styled.div`
  display: flex;
  margin-top: 100px;
  margin-bottom: 15px;
  gap: 20px;

  @media screen and (max-width: 1025px) {
    margin-top: 10px;
  }

  h1 {
    font-size: 50px;
    margin: 0 0 10px 0;
  }
`;
