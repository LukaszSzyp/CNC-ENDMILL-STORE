import Joi from "joi-browser";
import { LoginForm } from "./loginForm";
import { useState } from "react";

export const Form = () => {
  const [state, setState] = useState({
    data: { username: "", password: "" },
    errors: {},
  });

  const validate = (schema) => {
    /*  const options = { abortEarly: false };
    const { error } = Joi.validate(state.data, schema, options);

    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors; */
    const errors = {};

    const data = state.data;
    if (data.username.trim() === "") errors.username = "Imię jest wymagane.";
    if (data.password.trim() === "") errors.password = "Hasło jest wymagane";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  const validateProperty = ({ name, value }, schema) => {
    /* const obj = { [name]: value };
    const schemaFragment = { [name]: schema[name] };
    const { error } = Joi.validate(obj, schemaFragment);
    return error ? error.details[0].message : null; */

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
