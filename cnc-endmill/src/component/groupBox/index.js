import * as groupBoxStyled from "./styledBox";
import { Tiles } from "./tiles";
import { millEndsCategoryPL } from "../storeCategory";

export const GroupBox = ({ title, subCategory }) => {
  return (
    <>
      <groupBoxStyled.GroupBoxContainer>
        <h2>{`${title}`}</h2>
        {subCategory.map((subCategory) => (
          <Tiles title={subCategory.title} img={subCategory.img} />
        ))}
      </groupBoxStyled.GroupBoxContainer>
    </>
  );
};
