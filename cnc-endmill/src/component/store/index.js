import { useState, useEffect } from "react";
import { getDataCategories } from "../../db-data/services";
import { Category } from "./category";
import * as StyledStore from "./styles/styledStore";

export const Store = () => {
  const [storeCategory, setStoreCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({
    category: "",
    subCategory: "",
  });

  useEffect(() => {
    getDataCategories(setStoreCategory);
  }, []);

  let subCategoryItem =
    selectedCategory.category &&
    storeCategory.find((item) => item.category === selectedCategory.category)
      .subCategory;

  const hiddenInput = (inputField) => {
    let inputObject = inputField.current;
    inputObject.setAttribute("isHidden", "true");
    inputObject.classList.add("hidden");
    inputObject.value = "";
  };

  const handleSelectedCategory = (e, inputField) => {
    const categoryName = e.target.getAttribute("categoryName");
    setSelectedCategory({ ...selectedCategory, category: categoryName });
    hiddenInput(inputField);
  };

  const handleSelectedSubCategory = (e, inputField) => {
    const categoryName = e.target.getAttribute("categoryName");
    setSelectedCategory({ ...selectedCategory, subCategory: categoryName });
    hiddenInput(inputField);
  };

  const showInput = (inputField) => {
    let inputObject = inputField.current;
    if (inputObject.getAttribute("isHidden")) {
      inputObject.classList.remove("hidden");
      inputObject.setAttribute("isHidden", "false");
      inputObject.focus();
      inputObject.classList.add("stretch");
    }
  };

  return (
    <StyledStore.Container>
      <h3>Store</h3>
      <Category
        category={storeCategory}
        selectedCategory={selectedCategory.category}
        handleSelectedCategory={handleSelectedCategory}
        showInput={showInput}
      />
      {selectedCategory.category && (
        <Category
          category={subCategoryItem}
          selectedCategory={selectedCategory.subCategory}
          handleSelectedCategory={handleSelectedSubCategory}
          showInput={showInput}
        />
      )}
    </StyledStore.Container>
  );
};
