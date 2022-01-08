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
          category: subCategoryItem,
          imgURL: data[item][subCategoryItem].imgURL,
        })),
      }));
      setData(storeCategory);
    });
};

export const getChoiceData = (category, subCategory, setChoiceData) => {
  fetch(`${DATABASE_URL}/store/${category}/${subCategory}.json`)
    .then((r) => r.json())
    .then((data) => {
      const choiceData = Object.keys(data);
      console.log(choiceData);
      setChoiceData(choiceData);
    });
};

/* export const sendCategory = (data, categoryPath) => {
  fetch(`${DATABASE_URL}/${path}${categoryPath}`, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => console.log("Success " + data))
    .catch((error) => console.log("error " + error));
};
 */
