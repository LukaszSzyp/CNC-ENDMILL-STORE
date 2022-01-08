import { getChoiceData } from "../../db-data/services";
import { useEffect, useState } from "react";

export const Table = ({ selectedCategory }) => {
  const [choiceData, setChoiceData] = useState([]);

  useEffect(() => {
    getChoiceData(
      selectedCategory.category,
      selectedCategory.subCategory,
      setChoiceData
    );
  }, [selectedCategory.category, selectedCategory.subCategory]);

  return (
    <>
      <h1>table</h1>
    </>
  );
};
