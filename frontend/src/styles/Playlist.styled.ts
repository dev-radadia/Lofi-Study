import styled from "styled-components";

export const StyledPlaylist = styled.div`
  display: flex;
  border: 10px solid;
  position: absolute;
  padding: 10px 30px;
  bottom: 2%;
  left: 1%;
  flex-direction: column;
  min-height: 300px;
  width: 450px;

  @media screen and (max-width: 1025px) {
    right: 1%;
    width: auto;
    height: 35%;
    top: 20%;
    bottom: 0;
  }
`;
