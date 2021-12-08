import { createContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    listenOnAuthStateChanged();
  }, []);

  const listenOnAuthStateChanged = () => {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  };

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
