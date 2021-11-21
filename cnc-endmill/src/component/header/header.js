import * as headerStyles from "./styledHeader";

export const Header = () => {
  return (
    <>
      <headerStyles.Header>
        <headerStyles.Container>
          <headerStyles.Nav>
            <headerStyles.Logo src="./img/fanarLogo.jpg" alt="Logo Fanar" />
            <headerStyles.ButtonContainer>
              <headerStyles.Button>Produkty</headerStyles.Button>
              <headerStyles.Button>Produkty</headerStyles.Button>
            </headerStyles.ButtonContainer>
          </headerStyles.Nav>
        </headerStyles.Container>
      </headerStyles.Header>
    </>
  );
};
