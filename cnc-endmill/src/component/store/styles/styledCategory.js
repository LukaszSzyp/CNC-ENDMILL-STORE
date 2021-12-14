import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 95%;
  justify-content: start;
  font-size: 1.3rem;
  text-transform: uppercase;

  .categoryItem {
    display: flex;
    align-items: center;
    margin: 0.3rem;
    padding: 10px 15px;
    background-color: #6d7274;
    border-radius: 5px;
    font-weight: 600;

    &:hover {
      cursor: pointer;
    }
  }
  .selected {
    background-color: ${({ theme }) => theme.colors.yellow};
    color: black;
    font-weight: 600;
  }
`;
