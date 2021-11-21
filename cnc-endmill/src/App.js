import { ThemeProvider } from "styled-components";
import { Content } from "./component/content";

import { Header } from "./component/header/header";
import StyledGlobal from "./component/styledGlobal";

const theme = {
  colors: {
    header: "rgb(41, 45, 47)",
    body: "#3e4244",
    footer: "rgb(41, 45, 47)",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledGlobal />
      <Header />
      <Content />
    </ThemeProvider>
  );
}

export default App;
