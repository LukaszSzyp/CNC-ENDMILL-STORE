import * as StyledCategory from "./styles/styledCategory";

export const Category = ({
  category,
  handleSelectedCategory,
  selectedCategory,
}) => {
  return (
    <>
      <StyledCategory.Container>
        {category.map((item) => (
          <div
            key={item.category}
            className={
              selectedCategory.category === item.category
                ? "categoryItem selected"
                : "categoryItem"
            }
            categoryName={item.category}
            onClick={(e) => handleSelectedCategory(e)}
          >
            {item.category}
          </div>
        ))}
        <div className="categoryItem">+</div>
      </StyledCategory.Container>
    </>
  );
};
