import * as contentStyled from "./styledContent";
import { Switch, Route } from "react-router-dom";
import { Home } from "../home";
import { Products } from "../products";
import { Login } from "../login";
import { Contact } from "../contact";

export const Content = () => {
  return (
    <contentStyled.Content>
      <Switch>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </contentStyled.Content>
  );
};
