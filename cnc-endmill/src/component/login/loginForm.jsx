import { useState } from "react";
import * as loginFormStyles from "./styledLogin";
import Input from "./input";

export const LoginForm = () => {
  const [state, setState] = useState({
    account: { username: "", password: "" },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = ({ currentTarget: input }) => {
    const account = { ...state.account };
    account[input.name] = input.value;
    setState({ account });
  };
  return (
    <loginFormStyles.LoginForm>
      <h1>Logowanie</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Input
          name="username"
          label="Username"
          value={state.account.username}
          onChange={handleChange}
        />
        <Input
          name="password"
          label="Password"
          value={state.account.password}
          onChange={handleChange}
        />
        <button className="btn btn-primary">Login</button>
      </form>
    </loginFormStyles.LoginForm>
  );
};
