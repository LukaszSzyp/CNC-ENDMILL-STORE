import { DATABASE_URL } from "./firebase-config";

const path = "store.json";

export const getData = () => {
  return fetch(`${DATABASE_URL}/${path}`);
};

export const getDataCategories = (setData) => {
  getData()
    .then((r) => r.json())
    .then((data) => {
      const storeCategory = Object.keys(data).map((item) => ({
        category: item,
        subCategory: Object.keys(data[item]).map((subCategoryItem) => ({
          title: subCategoryItem,
          imgURL: data[item][subCategoryItem].imgURL,
        })),
      }));
      setData(storeCategory);
    });
};
