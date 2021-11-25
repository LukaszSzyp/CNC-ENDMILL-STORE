import styled from "styled-components";

export const GroupBoxContainer = styled.div`
  width: min(270px, 30vw);
  height: min(500px, 60vh);
  background-color: #f2f2f2;
  border-radius: 5px;
  border-top: solid 2px ${({ theme }) => theme.colors.yellow};
  display: flex;
  flex-direction: column;

  h2 {
    color: #3e4244;
    text-align: center;
  }
`;
