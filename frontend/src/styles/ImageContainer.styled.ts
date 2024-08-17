import styled from "styled-components";

export const ImageContainer = styled.div`
  border: 10px solid;
  width: 80%;
  flex: 1;
  margin-top: -35px;

  @media (max-width: 1025px) {
    flex: 1;
    margin-top: 0px;
  }

  img {
    display: block;
  }
`;
