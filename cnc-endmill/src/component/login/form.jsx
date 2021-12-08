import { LoginForm } from "./loginForm";
import { useState } from "react";

export const Form = () => {
  const [state, setState] = useState({
    data: { username: "", password: "" },
    errors: {},
  });

  const validate = () => {
    const errors = {};

    const data = state.data;
    if (data.username.trim() === "") errors.username = "Imię jest wymagane.";
    if (data.password.trim() === "") errors.password = "Hasło jest wymagane";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  const validateProperty = ({ name, value }) => {
    if (name === "username") {
      if (value.trim() === "") return "Imię jest wymagane.";
    }
    if (name === "password") {
      if (value.trim() === "") return "Hasło jest wymagane";
    }
  };

  const handleSubmit = (e, doSubmit) => {
    e.preventDefault();
    const errors = validate();
    setState({ ...state, errors: errors || {} });
    if (errors) return;
    doSubmit();
  };

  const handleChange = ({ currentTarget: input }, schema) => {
    const errors = { ...state.errors };
    const errorMessage = validateProperty(input, schema);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...state.data };
    data[input.name] = input.value;

    setState({ data, errors });
  };

  return (
    <LoginForm
      validate={validate}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      state={state}
    />
  );
};
