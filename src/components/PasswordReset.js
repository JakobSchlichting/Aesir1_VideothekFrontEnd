import React from "react";
import { useNavigate } from "react-router-dom";
import { passwordReset } from "../apis/customer";


const PasswordReset = () => {
    const navigate = useNavigate();

    const onSubmit = () =>{
        const email = document.getElementById("email").value;
        passwordReset(email);

        return navigate("/");
    }

    return (
    <div className="ui segment">
      <div className="ui container">
        <h2>Password reset</h2>
        <form className="ui form">
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="example@mail.com"
            ></input>
          </div>
          <button
            className="ui primary right floated button"
            onClick={onSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordReset;
