import * as loginFormStyles from "./styledLogin";

export const LoginForm = () => {
  return (
    <loginFormStyles.LoginForm>
      <h1>Logowanie</h1>
      <form action="">
        <div className="form-group">
          <label htmlFro="username">Username</label>
          <input id="username" type="text" />
        </div>
        <div className="form-group">
          <label htmlFro="password">Password</label>
          <input id="password" type="text" />
        </div>
        <button className="btn btn-primary">Login</button>
      </form>
    </loginFormStyles.LoginForm>
  );
};
