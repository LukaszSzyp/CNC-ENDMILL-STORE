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

  const handleSelectedCategory = (e) => {
    const categoryName = e.target.getAttribute("categoryName");
    setSelectedCategory({ ...selectedCategory, category: categoryName });
  };

  return (
    <StyledStore.Container>
      <h3>Store</h3>
      <Category
        category={storeCategory}
        selectedCategory={selectedCategory}
        handleSelectedCategory={handleSelectedCategory}
      />
    </StyledStore.Container>
  );
};
