import React from "react";
import '../style.css';
import { Link } from "react-router-dom";

const SignupForm=()=> {
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
        <h2>Sign Up</h2>
        <p>Create a new account</p>
        
        <div className="btn">
        <button className="google"><i className="fa-brands fa-google"></i>Sign up with google</button>
        <button className="apple"><i className="fa-brands fa-apple" color="black"></i>Sign up with apple</button>
        </div>
       
        <div className="form-body">
            <div className="formContainer">
          <div className="username">
                  <label className="form__label" htmlFor="username">Username</label>
                  <input className="form__input" type="text" id="username" />
              </div>
              <div className="email">
                  <label className="form__label" htmlFor="email">Email address </label>
                  <input className="form__input" type="text" id="email" />
              </div>
              <div className="password">
                  <label className="form__label" htmlFor="password">Password </label>
                  <input className="form__input" type="password" id="password" />
              </div>
              <Link to="/home">
              <button className="signbtn" >Sign Up</button>
              </Link>
            <div className="para">
            <p>Already have an account? <Link to="/login"><span id="register"> Sign In</span></Link></p>
            </div>
            </div>
            </div>
    </div>
    </div>
    )
}

export default SignupForm;