import { useEffect, useState } from "react";
import { GroupBox } from "../groupBox";
import * as productsStyled from "./styledProducts";
import { getDataCategories } from "./../../db-data/services";

export const Products = () => {
  const [storeCategory, setStoreCategory] = useState([]);
  useEffect(() => {
    getDataCategories(setStoreCategory);
  }, []);
  return (
    <productsStyled.Products>
      {storeCategory &&
        storeCategory.map((category) => (
          <GroupBox
            key={category.category}
            title={category.category}
            subCategory={category.subCategory}
          />
        ))}
    </productsStyled.Products>
  );
};
