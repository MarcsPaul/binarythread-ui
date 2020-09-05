/**
 * Login page component rendered here
 */
import React from "react";
import { useForm } from "react-hook-form";
/**importing styles */
import "./login.css";

import { validationMessages } from "../../constants/text-constants";
import { loginApi } from "../../services/AJAX";

const Login = (props) => {
  const onSubmit = (data) => {
    loginApi({ body: data }).then((res) => {
      if (res.status) {
        props.history.push({ pathname: "/dashboard" });
      }
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card card-signin my-5">
            <div className="card-body">
              <h5 className="card-title text-center">Sign In</h5>
              <LoginForm onSubmit={onSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

/**
 *
 * @param {onSubmit} param0 the function called when user submits form
 */
const LoginForm = ({ onSubmit }) => {
  const { register, handleSubmit, errors } = useForm();
  let { usernameMsg, passwordMsg } = validationMessages;
  return (
    <form className="form-signin" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-label-group">
        <input
          type="email"
          name="username"
          ref={register({
            required: true,
            pattern: /^\S+@\S+$/i,
          })}
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          autofocus
        />
        <label for="inputEmail">Email address</label>
      </div>
      {errors.username && usernameMsg}
      <div className="form-label-group">
        <input
          type="password"
          name="password"
          ref={register({ required: true, minLength: 8 })}
          id="inputPassword"
          className="form-control"
          placeholder="Password"
        />
        <label for="inputPassword">Password</label>
      </div>
      {errors.password && passwordMsg}
      <button
        className="btn btn-lg btn-primary btn-block text-uppercase"
        type="submit"
      >
        Sign in
      </button>
    </form>
  );
};
