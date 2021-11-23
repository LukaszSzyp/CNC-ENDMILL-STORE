import * as groupBoxStyled from "./styledBox";
import { Tiles } from "./tiles";

export const GroupBox = () => {
  return (
    <>
      <groupBoxStyled.GroupBoxContainer>
        <h3>GroupBox</h3>
        <Tiles />
      </groupBoxStyled.GroupBoxContainer>
    </>
  );
};
