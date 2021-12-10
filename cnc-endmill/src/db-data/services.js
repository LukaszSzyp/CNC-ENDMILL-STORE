import { DATABASE_URL } from "./firebase-config";

export const getData = (path) => {
  return fetch(`${DATABASE_URL}/${path}`);
};
//end-mill/milling-tools.json
