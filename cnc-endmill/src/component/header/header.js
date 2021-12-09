import * as headerStyles from "./styledHeader";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { signOut } from "@firebase/auth";

import { UserContext } from "../../context/userContext";

export const Header = () => {
  const { user, auth } = useContext(UserContext);

  return (
    <>
      <headerStyles.Header>
        <headerStyles.Container>
          <headerStyles.Nav>
            <NavLink to={"/"}>
              <headerStyles.Logo src="./img/fanarLogo.jpg" alt="Logo Fanar" />
            </NavLink>
            <headerStyles.ButtonContainer>
              {user && (
                <NavLink to={"/store"} activeClassName="selected">
                  <headerStyles.Button>Magazyn</headerStyles.Button>
                </NavLink>
              )}
              <NavLink to={"/products"} activeClassName="selected">
                <headerStyles.Button>Produkty</headerStyles.Button>
              </NavLink>
              <NavLink to={"/contact"} activeClassName="selected">
                <headerStyles.Button>Kontakt</headerStyles.Button>
              </NavLink>
              {user ? (
                <NavLink to="">
                  <headerStyles.Button onClick={() => signOut(auth)}>
                    Wyloguj
                  </headerStyles.Button>
                </NavLink>
              ) : (
                <NavLink to={"/logIn"} activeClassName="selected">
                  <headerStyles.Button>Zaloguj</headerStyles.Button>
                </NavLink>
              )}
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
