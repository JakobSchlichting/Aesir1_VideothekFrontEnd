import { signInRequest } from "../apis/customer";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
import { login, userInfo } from "../redux/userSlice";
import React, { Component }  from 'react';

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const OnSignUp = () => {
    navigate("/signUp");
  };

  const onSubmitSignIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
   
    signInRequest(email, password)
      .then((response) => {
        navigate("films");
        dispatch(login());
        dispatch(userInfo(response.data));
      })
      .catch((error) => {
        if (error.response.status === 401) {
          console.warn(error.response.data);
        } else if (error.response.status === 404) {
          console.warn(error.response.data);
        }
        else{
          console.warn(error);
        }
      });
  };

  return (
    <div className="ui grid container">
      <div className="ui placeholder segment">
        <div className="ui two column very relaxed stackable grid">
          <div className="column">
            <div className="ui form">
              <div className="field">
                <label>Username</label>
                <div className="ui left icon input">
                  <input type="text" id="email" placeholder="Email"></input>
                  <i className="user icon"></i>
                </div>
              </div>
              <div className="field">
                <label>Password</label>
                <div className="ui left icon input">
                  <input type="password" id="password"></input>
                  <i className="lock icon"></i>
                </div>
              </div>
              <div className="ui blue submit button" onClick={onSubmitSignIn}>
                Login
              </div>
              <br></br>
              <Link to="passwortBackup">Password forgoten?</Link>
            </div>
          </div>
          <div className="middle aligned column">
            <div onClick={OnSignUp} className="ui big button">
              <i className="signup icon"></i>
              Sign Up
            </div>
          </div>
        </div>
        <div className="ui vertical divider">Or</div>
      </div>
    </div>
  );
};

export default SignIn;
