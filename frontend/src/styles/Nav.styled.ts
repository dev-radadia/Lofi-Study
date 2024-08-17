import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  position: fixed;
  z-index: 1000;
  justify-content: flex-end;
  align-items: center;
  padding-top: 7px;
  padding-bottom: 7px;
  padding-right: 15px;
  width: 100%;
  gap: 15px;
  border-bottom: 4px solid black;

  h1 {
    font-size: 16px;
  }

  li {
    list-style-type: none;
  }

  .word-btn {
    border: 5px solid;
    padding: 8px;
    width: 120px;
  }

  .ul-btn {
    display: flex;
    gap: 50px;
    padding: 0;
  }

  .ul-word-btn {
    display: flex;
    gap: 25px;
    padding: 0;
  }

  @media (max-width: 1025px) {
    padding-right: 3vw;

    .word-btn {
      width: 40vw;
    }
    
    .ul-word-btn {
      gap: 14vw;
    }
  }
`;
