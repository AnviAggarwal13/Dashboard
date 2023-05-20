import React from "react";
import '../style.css';
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faApple} from '@fortawesome/free-solid-svg-icons';

const RegistrationForm=()=> {
    const style = {
        backgroundColor: "black",
        width: "40vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontSize: 72,
        fontWeight: 700,
        FontFace: "Montserrat"
      };

    return(
        <div className="page">
        <div style={style}>
        <span>Board.</span>
      </div>
      <div className="form">
        <h2>Sign In</h2>
        <p>Sign in to your account</p>
        
        <div className="btn">
        <button className="google"><i className="fa-brands fa-google"></i>Sign in with google</button>
        <button className="apple"><i className="fa-brands fa-apple" color="black"></i>Sign in with apple</button>
        </div>
       
          <div className="form-body">
            <div className="formContainer">
              <div className="email">
                  <label className="form__label" htmlFor="email">Email address </label>
                  <input className="form__input" type="text" id="email" />
              </div>
              <div className="password">
                  <label className="form__label" htmlFor="password">Password </label>
                  <input className="form__input" type="password" id="password" />
              </div>
              <span id="forgot">Forgot password?</span><br />
              <Link to="/home">
              <button className="signbtn login">Sign in</button>
              </Link>
            <div className="para">
            <p>Don't have an account? <Link to="/"><span id="register"> Register here</span></Link></p>
            </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default RegistrationForm;