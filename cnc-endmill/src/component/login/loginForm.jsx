import * as loginFormStyles from "./styledLogin";
import Input from "./input";

export const LoginForm = ({
  handleSubmit,
  handleChange,
  state,
  handleSignIn,
}) => {
  const doSubmit = () => {
    handleSignIn();
  };

  return (
    <loginFormStyles.LoginForm>
      <h1>Logowanie</h1>
      <form onSubmit={(e) => handleSubmit(e, doSubmit)}>
        <Input
          type="email"
          name="username"
          label="Email"
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
        <button className="btn btn-primary">Zaloguj</button>
      </form>
    </loginFormStyles.LoginForm>
  );
};
