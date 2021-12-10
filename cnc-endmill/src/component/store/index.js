import { Category } from "./category";
import * as StyledStore from "./styles/styledStore";

export const Store = () => {
  return (
    <StyledStore.Container>
      <h3>Store</h3>;
      <Category />
    </StyledStore.Container>
  );
};
