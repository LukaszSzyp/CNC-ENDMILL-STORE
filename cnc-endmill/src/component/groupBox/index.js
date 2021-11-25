import * as groupBoxStyled from "./styledBox";
import { Tiles } from "./tiles";
import { millEndsCategoryPL } from "../storeCategory";

export const GroupBox = ({ title }) => {
  return (
    <>
      <groupBoxStyled.GroupBoxContainer>
        <h2>{`${title}`}</h2>
        {millEndsCategoryPL.map((category) => (
          <Tiles category={category} />
        ))}
      </groupBoxStyled.GroupBoxContainer>
    </>
  );
};
