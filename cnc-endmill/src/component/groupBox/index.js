import * as groupBoxStyled from "./styledBox";
import { Tiles } from "./tiles";

export const GroupBox = ({ title, subCategory }) => {
  return (
    <>
      <groupBoxStyled.GroupBoxContainer>
        <h2>{`${title}`}</h2>
        {subCategory.map((subCategory) => (
          <Tiles
            title={subCategory.title}
            imgURL={subCategory.imgURL}
            key={subCategory.title}
          />
        ))}
      </groupBoxStyled.GroupBoxContainer>
    </>
  );
};
