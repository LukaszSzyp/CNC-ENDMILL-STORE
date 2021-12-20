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

  .inputContainer {
    display: flex;
    justify-content: center;
    align-items: center;

    input {
      border: none;
      border-radius: 5px;
      height: 2.7rem;
      background-color: #6d7274;
      font-weight: 600;
      font-size: 1.3rem;
      font-family: Arial, Helvetica, sans-serif;
      text-transform: Uppercase;
      width: 20px;
      transition: width 200ms ease-in;

      :focus {
        outline: none;
        outline: 1px solid ${({ theme }) => theme.colors.yellow};
      }

      :not(:focus) {
        width: 20px;
      }
    }

    .hidden {
      display: none;
    }

    .showing {
    }

    .stretch {
      width: 250px;
    }

    input,
    select,
    textarea {
      color: white;
    }
  }
`;
