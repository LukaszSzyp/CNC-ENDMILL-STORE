import { createGlobalStyle } from "styled-components";

const StyledGlobal = createGlobalStyle`
body {
    background-color: ${({ theme }) => theme.colors.body};
    margin: 0px;
    padding: 0px;
    color: #fff;
  font-family: zeitung, sans-serif;
}
`;

export default StyledGlobal;
