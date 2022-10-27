import React from "react";
import { useNavigate } from "react-router-dom";
import { signUpRequest } from "../apis/customer";

const SignUp = () => {
  const navigate = useNavigate();
  

  const onSubmit = () => {
    const fname = document.getElementById("firstname").value;
    const lname = document.getElementById("lastname").value;
    const birthday = document.getElementById("birthday").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const street = document.getElementById("street").value;
    const postalcode = document.getElementById("postalcode").value;
    const city = parseInt(document.getElementById("city").value);
    const country = document.getElementById("country").value;

    signUpRequest(fname, lname, birthday, email, password, street, city, postalcode, country);
    navigate("/");
  };

  return (
    <div className="ui center">
      <div className="ui container">
        <h3>Registration</h3>
        <form className="ui form">
          <div className="field">
            <div className="three fields">
              <div className="field">
                <label>First Name</label>
                <input type="text" id="firstname" placeholder="First Name" />
              </div>
              <div className="field">
                <label>Last Name</label>
                <input type="text" id="lastname" placeholder="Last Name" />
              </div>
              <div className="field">
                <label>Birthday</label>
                <input type="text" id="birthday" placeholder="YYYY-MM-DD" />
              </div>
            </div>
          </div>
          <div className="field">
            <div className="two fields">
              <div className="field">
                <label>Email</label>
                <input type="text" id="email" placeholder="example@mail.com" />
              </div>
              <div className="field">
                <label>Password</label>
                <input type="text" id="password" placeholder="*******" />
              </div>
            </div>
          </div>
          <div className="field">
            <div className="two fields">
              <div className="field">
                <label>Street. + Nr</label>
                <input type="text" id="street" placeholder="Hauptstr 79 ..." />
              </div>
              <div className="field">
                <label>Postal code</label>
                <input type="text" id="postalcode" placeholder="69214" />
              </div>
            </div>
            <div className="two fields">
              <div className="field">
                <label>City</label>
                <input id="city" type="text" placeholder="Eppelheim" />
              </div>
              <div className="field">
                <label>Country</label>
                <input type="text" id="country" placeholder="Germany" />
              </div>
            </div>
          </div>
          <br></br>
          <div
            className="ui blue right floated submit button"
            onClick={onSubmit}
          >
            Submit
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
