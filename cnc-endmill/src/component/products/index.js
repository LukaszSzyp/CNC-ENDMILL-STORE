import { GroupBox } from "../groupBox";
import * as productsStyled from "./styledProducts";
import { storeCategoryPL } from "../storeCategory";

export const Products = () => {
  return (
    <productsStyled.Products>
      {storeCategoryPL.map((category) => (
        <GroupBox
          key={category.categoryTitle}
          title={category.categoryTitle}
          subCategory={category.subCategory}
        />
      ))}
    </productsStyled.Products>
  );
};
