import * as contentStyled from "./styledContent";
import { Switch, Route } from "react-router-dom";
import { Home } from "../home";
import { Products } from "../products";

export const Content = () => {
  return (
    <contentStyled.Content>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
      </Switch>
    </contentStyled.Content>
  );
};
