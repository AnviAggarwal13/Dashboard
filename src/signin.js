import React from "react";
import './style.css';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faApple} from '@fortawesome/free-solid-svg-icons';

const RegistrationForm=()=> {

    return(
      <div className="form">
        <h2>Sign In</h2>
        <p>Sign in to your account</p>
        
        <div className="btn">
        <button className="google"><i className="fa-brands fa-google"></i>Sign in with google</button>
        <button className="apple"><i className="fa-brands fa-apple" color="black"></i>Sign in with apple</button>
        </div>
       
          <div className="form-body">
              <div className="email">
                  <label className="form__label" htmlFor="email">Email address </label>
                  <input className="form__input" type="text" id="email" />
              </div>
              <div className="password">
                  <label className="form__label" htmlFor="password">Password </label>
                  <input className="form__input" type="password" id="password" />
              </div>
              <span>Forgot password?</span><br />
              <button className="signbtn">Sign in</button>
            </div>
            <div className="para">
            <p>Don't have an account?<span id="register">Register here</span></p>
            </div>
           
        </div>
    )
}

export default RegistrationForm;