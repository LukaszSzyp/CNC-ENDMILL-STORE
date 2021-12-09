import { useEffect, useState } from "react";
import { GroupBox } from "../groupBox";
import * as productsStyled from "./styledProducts";
import { getData } from "./../../db-data/services";

export const Products = () => {
  const [storeCategory, setStoreCategory] = useState([]);
  const path = "store.json";

  useEffect(() => {
    getData(path)
      .then((r) => r.json())
      .then((data) => {
        const storeCategory = Object.keys(data).map((item) => ({
          category: item,
          subCategory: Object.keys(data[item]).map((subCategoryItem) => ({
            title: subCategoryItem,
            imgURL: data[item][subCategoryItem].imgURL,
          })),
        }));
        setStoreCategory(storeCategory);
      });
  }, []);

  return (
    <productsStyled.Products>
      {storeCategory.map((category) => (
        <GroupBox
          key={category.category}
          title={category.category}
          subCategory={category.subCategory}
        />
      ))}
    </productsStyled.Products>
  );
};
