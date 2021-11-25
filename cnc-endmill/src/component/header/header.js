import * as headerStyles from "./styledHeader";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <headerStyles.Header>
        <headerStyles.Container>
          <headerStyles.Nav>
            <NavLink to={"/"}>
              <headerStyles.Logo src="./img/fanarLogo.jpg" alt="Logo Fanar" />
            </NavLink>
            <headerStyles.ButtonContainer>
              <NavLink to={"/products"} activeClassName="selected">
                <headerStyles.Button>Produkty</headerStyles.Button>
              </NavLink>
              <NavLink to={"/contact"} activeClassName="selected">
                <headerStyles.Button>Kontakt</headerStyles.Button>
              </NavLink>
              <NavLink to={"/logIn"} activeClassName="selected">
                <headerStyles.Button>Zaloguj</headerStyles.Button>
              </NavLink>
              <NavLink to={"/basket"} activeClassName="selected">
                <headerStyles.Button>
                  <ShoppingCartIcon />
                </headerStyles.Button>
              </NavLink>
            </headerStyles.ButtonContainer>
          </headerStyles.Nav>
        </headerStyles.Container>
      </headerStyles.Header>
    </>
  );
};
