import { useRef } from "react";
import * as StyledCategory from "./styles/styledCategory";

export const Category = ({
  category,
  handleSelectedCategory,
  selectedCategory,
  showInput,
  hidden,
}) => {
  const inputField = useRef(null);

  return (
    <>
      <StyledCategory.Container>
        {category &&
          category.map((item) => (
            <div
              key={item.category}
              className={
                selectedCategory === item.category
                  ? "categoryItem selected"
                  : "categoryItem"
              }
              categoryName={item.category}
              onClick={(e) => handleSelectedCategory(e, inputField)}
            >
              {item.category}
            </div>
          ))}
        <div
          className="inputContainer"
          onMouseOver={() => {
            showInput(inputField);
          }}
        >
          <div className="categoryItem">+</div>
          <input
            className={hidden}
            type="text"
            id="newCategory"
            name="newCategory"
            ref={inputField}
          ></input>
        </div>
      </StyledCategory.Container>
    </>
  );
};
