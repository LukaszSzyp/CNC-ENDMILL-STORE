export const LoginForm = () => {
  return (
    <div>
      <h1>
        <form action="">
          <div className="form-group">
            <label>
              Username
              <input id="username" type="text" />
            </label>
          </div>
          <div className="form-group">
            <label>
              Password
              <input id="password" type="text" />
            </label>
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </h1>
    </div>
  );
};
