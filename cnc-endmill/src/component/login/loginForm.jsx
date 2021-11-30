import { useState } from "react";
import Joi from "joi-browser";
import * as loginFormStyles from "./styledLogin";
import Input from "./input";

export const LoginForm = (props) => {
  const [state, setState] = useState({
    account: { username: "", password: "" },
    errors: {},
  });

  const schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  const validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(state.account, schema, options);

    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
    /* const errors = {};

    const account = state.account;
    if (account.username.trim() === "") errors.username = "Imię jest wymagane.";
    if (account.password.trim() === "") errors.password = "Hasło jest wymagane";

    return Object.keys(errors).length === 0 ? null : errors; */
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setState({ ...state, errors: errors || {} });
    if (errors) return;
  };

  const validateProperty = ({ name, value }) => {
    if (name === "username") {
      if (value.trim() === "") return "Imię jest wymagane.";
    }
    if (name === "password") {
      if (value.trim() === "") return "Hasło jest wymagane";
    }
  };

  const handleChange = ({ currentTarget: input }) => {
    const errors = { ...state.errors };
    const errorMessage = validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = { ...state.account };
    account[input.name] = input.value;

    setState({ account, errors });
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
