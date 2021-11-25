import styled from "styled-components";

export const TilesContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  background-color: #6d7274;
  padding-bottom: 1.5rem;
  height: max(100%, 20%);
  justify-content: center;
  padding: 4px 5px;
  border-bottom: solid 1px black;

  h3 {
    font-size: 1rem;
    text-align: center;
  }

  img {
    margin: 0px auto;
    width: 80%;
  }

  &:hover {
    cursor: pointer;
  }
`;
