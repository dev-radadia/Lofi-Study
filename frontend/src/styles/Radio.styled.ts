import styled from "styled-components";

export const StyledRadio = styled.div`
  flex: 1;
  margin-top: -15px;
  h1 {
    font-size: 16px;
    position: absolute;
    margin-top: 5px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    left: 0;
    right: 0;
    max-width: 600px;
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
    white-space: normal;
  }

  @media screen and (max-width: 1025px) {
    margin-bottom: 100px;

    h1 {
      max-width: 100%;
    }
  }
`;

export const StyledRadioMedia = styled.div`
  display: flex;
  padding: 5px 0px;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
