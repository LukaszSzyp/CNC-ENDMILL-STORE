import * as contentStyled from "./styledContent";
import { Switch, Route } from "react-router-dom";
import { Home } from "../home";

export const Content = () => {
  return (
    <contentStyled.Content>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </contentStyled.Content>
  );
};
