import { useState, useEffect } from "react";
import { getDataCategories, sendCategory } from "../../db-data/services";
import { Category } from "./category";
import { Table } from "./table";
import * as StyledStore from "./styles/styledStore";

export const Store = () => {
  const [storeCategory, setStoreCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({
    category: "",
    subCategory: "",
  });

  let inputData = "";

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
    setSelectedCategory({ category: categoryName, subCategory: "" });
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

  const getInputData = (e) => {
    inputData = e.target.value;
  };

  const addCategory = (level, inputField) => {
    if (inputData === "") return alert("Wartość jest pusta");
    if (level === "category") {
      const newStoreCategory = [
        ...storeCategory,
        {
          category: inputData,
          subCategory: [],
        },
      ];
      setStoreCategory(newStoreCategory);
    }

    if (level === "subCategory") {
      const newStoreSubCategory = storeCategory.map((element) => {
        if (element.category === selectedCategory.category) {
          element = {
            category: selectedCategory.category,
            subCategory: [...element.subCategory, { category: inputData }],
          };
        }
        return element;
      });
      setStoreCategory(newStoreSubCategory);
    }
    inputField.current.value = "";
  };

  return (
    <StyledStore.Container>
      <h3>Store</h3>
      <Category
        category={storeCategory}
        selectedCategory={selectedCategory.category}
        handleSelectedCategory={handleSelectedCategory}
        showInput={showInput}
        getInputData={getInputData}
        level="category"
        addCategory={addCategory}
      />
      {selectedCategory.category && (
        <Category
          category={subCategoryItem}
          selectedCategory={selectedCategory.subCategory}
          handleSelectedCategory={handleSelectedSubCategory}
          showInput={showInput}
          getInputData={getInputData}
          level="subCategory"
          addCategory={addCategory}
        />
      )}
      {selectedCategory.subCategory !== "" ? <Table /> : ""}
    </StyledStore.Container>
  );
};
