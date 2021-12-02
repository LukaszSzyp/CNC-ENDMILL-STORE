import * as loginFormStyles from "./styledLogin";
import Input from "./input";
import Joi from "joi-browser";

export const LoginForm = ({ validate, handleSubmit, handleChange, state }) => {
  const schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  const doSubmit = () => {
    // Call the server
    console.log("Submitted");
  };

  return (
    <loginFormStyles.LoginForm>
      <h1>Logowanie</h1>
      <form onSubmit={(e) => handleSubmit(e, doSubmit)}>
        <Input
          schema={schema}
          name="username"
          label="Imię"
          value={state.data.username}
          onChange={handleChange}
          error={state.errors.username}
        />
        <Input
          schema={schema}
          type="password"
          name="password"
          label="Hasło"
          value={state.data.password}
          onChange={handleChange}
          error={state.errors.password}
        />
        <button disabled={validate} className="btn btn-primary">
          Login
        </button>
      </form>
    </loginFormStyles.LoginForm>
  );
};
