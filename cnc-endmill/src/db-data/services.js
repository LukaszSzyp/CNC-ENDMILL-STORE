import { DATABASE_URL } from "./firebase-config";

export const getMillingTolls = () => {
  return fetch(`${DATABASE_URL}/store/milling-tools.json`);
};
