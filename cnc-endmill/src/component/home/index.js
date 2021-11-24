import { useEffect } from "react";
import { getMillingTolls } from "../../db-data/services";

export const Home = () => {
  useEffect(() => {
    getMillingTolls()
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return <h3>Home page</h3>;
};
