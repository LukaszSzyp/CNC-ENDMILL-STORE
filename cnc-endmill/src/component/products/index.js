import { GroupBox } from "../groupBox";
import * as productsStyled from "./styledProducts";
import { storeCategoryPL } from "../storeCategory";

export const Products = () => {
  return (
    <productsStyled.Products>
      {storeCategoryPL.map((category) => (
        <GroupBox title={category} />
      ))}
    </productsStyled.Products>
  );
};
