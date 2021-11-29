import * as loginFormStyles from "./styledLogin";

export const LoginForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <loginFormStyles.LoginForm>
      <h1>Logowanie</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input autoFocus id="username" type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input id="password" type="text" />
        </div>
        <button className="btn btn-primary">Login</button>
      </form>
    </loginFormStyles.LoginForm>
  );
};
