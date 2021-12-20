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

  const [hidden, setHidden] = useState("hidden");

  useEffect(() => {
    getDataCategories(setStoreCategory);
  }, []);

  let subCategoryItem =
    selectedCategory.category &&
    storeCategory.find((item) => item.category === selectedCategory.category)
      .subCategory;

  const handleSelectedCategory = (e, inputField) => {
    const categoryName = e.target.getAttribute("categoryName");
    setSelectedCategory({ ...selectedCategory, category: categoryName });
    setHidden("hidden");
    inputField.current.value = "";
  };

  const handleSelectedSubCategory = (e, inputField) => {
    const categoryName = e.target.getAttribute("categoryName");
    setSelectedCategory({ ...selectedCategory, subCategory: categoryName });
    setHidden("hidden");
    inputField.current.value = "";
  };

  const showInput = (inputField) => {
    if (hidden !== "showing") {
      setHidden("showing");
    }
    inputField.current.classList.add("stretch");
  };

  return (
    <StyledStore.Container>
      <h3>Store</h3>
      <Category
        category={storeCategory}
        selectedCategory={selectedCategory.category}
        handleSelectedCategory={handleSelectedCategory}
        showInput={showInput}
        hidden={hidden}
      />
      {selectedCategory.category && (
        <Category
          category={subCategoryItem}
          selectedCategory={selectedCategory.subCategory}
          handleSelectedCategory={handleSelectedSubCategory}
          showInput={showInput}
          hidden={hidden}
        />
      )}
    </StyledStore.Container>
  );
};
