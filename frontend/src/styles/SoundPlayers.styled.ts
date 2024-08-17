import styled from "styled-components";

export const StyledSoundPlayers = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px;
  place-items: center;
  grid-gap: 20px;

  @media (max-width: 1025px) {
    margin-left: 20px;
    margin-top: 10px;
  }
`;
