import styled from "styled-components";

export const Header = styled.header`
  display: box;
  height: 100px;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.header};
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 5px 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  a {
    margin: 0 5px;
    padding: 0;
    border-bottom: 3px solid transparent;
    &:hover {
      border-bottom: 3px solid ${({ theme }) => theme.colors.yellow};
    }
    button {
      cursor: pointer;
      background-color: transparent;
    }
  }
  button {
    font-size: 1rem;
  }
  .selected {
    border-bottom: 3px solid ${({ theme }) => theme.colors.yellow};
  }
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 10px;
`;

export const Logo = styled.img`
  height: 60px;
  width: auto;
  padding: 5px;
`;

export const Button = styled.button`
  cursor: pointer;
  font-weight: 700;
  padding: 15px 20px;
  margin: 0 1rem;

  color: white;
  letter-spacing: 0.5px;
  background-color: transparent;
  border: 3px solid transparent;
`;
