import styled from "styled-components";

export const StyledTask = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  h2 {
    font-size: 16px;
    flex: 3;
    max-width: 500px;
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
    white-space: normal;
  }

  button {
    flex: 1;
  }
  
  .strike-through {
    text-decoration: line-through solid 3px;
  }
`;
