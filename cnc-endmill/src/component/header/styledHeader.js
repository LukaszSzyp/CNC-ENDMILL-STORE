import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  height: 100px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.header};

  /* h3 {
    color: white;
  }

  &:hover {
    text-decoration: underline;
    text-decoration-thickness: 3px;
    text-decoration-color: yellow;
  } */
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
  height: 100%;

  a {
    margin: 0;
    padding: 0;
    border-bottom: 3px solid transparent;
    &:hover {
      border-bottom: 3px solid ${({ theme }) => theme.colors.yellow};
    }
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
`;

export const Logo = styled.img`
  height: 60px;
  width: auto;
  padding: 5px;
`;

export const Button = styled.button`
  cursor: pointer;
  font-weight: 700;
  padding: 15px 60px;
  color: white;
  letter-spacing: 0.5px;
  background-color: transparent;
  border: 3px solid transparent;
`;
