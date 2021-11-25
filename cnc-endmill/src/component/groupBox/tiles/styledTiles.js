import styled from "styled-components";

export const TilesContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  background-color: #6d7274;
  padding-bottom: 1.5rem;
  height: max(100%, 20%);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  h3 {
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
