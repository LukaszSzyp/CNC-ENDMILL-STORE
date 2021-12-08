import { ThemeProvider } from "styled-components";
import StyledGlobal from "./component/styledGlobal";

import { Header } from "./component/header/header";
import { Content } from "./component/content";
import { UserContextProvider } from "./context/userContext";

const theme = {
  colors: {
    header: "rgb(41, 45, 47)",
    body: "#3e4244",
    footer: "rgb(41, 45, 47)",
    yellow: "#fd9e00",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledGlobal />
      <UserContextProvider>
        <Header />
        <Content />
      </UserContextProvider>
    </ThemeProvider>
  );
}

export default App;
