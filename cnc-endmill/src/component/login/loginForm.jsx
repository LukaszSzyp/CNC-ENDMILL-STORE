import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, Redirect } from "react-router-dom";

import * as loginFormStyles from "./styledLogin";
import Input from "./input";

export const LoginForm = ({ validate, handleSubmit, handleChange, state }) => {
  const [shouldRedirect, setShouldRedirect] = useState("");

  const doSubmit = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, state.data.username, state.data.password)
      .then(() => {
        setShouldRedirect(true);
      })
      .catch((err) => alert(err.message));
  };

  if (shouldRedirect) return <Redirect to="/products" />;

  return (
    <loginFormStyles.LoginForm>
      <h1>Logowanie</h1>
      <form onSubmit={(e) => handleSubmit(e, doSubmit)}>
        <Input
          name="username"
          label="Imię"
          value={state.data.username}
          onChange={handleChange}
          error={state.errors.username}
        />
        <Input
          type="password"
          name="password"
          label="Hasło"
          value={state.data.password}
          onChange={handleChange}
          error={state.errors.password}
        />
        <button disabled={validate} className="btn btn-primary">
          Zaloguj
        </button>
      </form>
    </loginFormStyles.LoginForm>
  );
};
