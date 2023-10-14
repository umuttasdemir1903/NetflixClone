import React from "react";

const Login = () => {
  return (
    <div className="container">
      <div className="login">
        <h1>SIGN IN</h1>
        <input
          type="text"
          className=" mb-2"
          placeholder="Email or phone number"
        />
        <input type="password" className=" mb-2" placeholder="Password" />
        <button>Sign in</button>
        <div className="form-check mt-2">
          <input type="checkbox" className="form-check-input" />
            <label className="form-check-label" for="remember-me">
              Remember me
            </label>
          <p className="mt-4">Need help ?</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
