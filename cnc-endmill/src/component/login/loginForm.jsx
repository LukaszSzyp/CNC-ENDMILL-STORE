import { useState } from "react";
import * as loginFormStyles from "./styledLogin";
import Input from "./input";

export const LoginForm = (props) => {
  const [state, setState] = useState({
    account: { username: "", password: "" },
    errors: {},
  });

  const validate = () => {
    const errors = {};

    const account = state.account;
    if (account.username.trim() === "") errors.username = "Imię jest wymagane.";
    if (account.password.trim() === "") errors.password = "Hasło jest wymagane";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    console.log(errors);
    setState({ ...state, errors: errors || {} });
    if (errors) return;
  };

  const handleChange = ({ currentTarget: input }) => {
    const account = { ...state.account };
    account[input.name] = input.value;
    setState({ ...state, account });
  };

  return (
    <loginFormStyles.LoginForm>
      <h1>Logowanie</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Input
          name="username"
          label="Imię"
          value={state.account.username}
          onChange={handleChange}
          error={state.errors.username}
        />
        <Input
          name="password"
          label="Hasło"
          value={state.account.password}
          onChange={handleChange}
          error={state.errors.password}
        />
        <button className="btn btn-primary">Login</button>
      </form>
    </loginFormStyles.LoginForm>
  );
};
