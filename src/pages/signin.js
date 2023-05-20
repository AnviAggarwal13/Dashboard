import {React, useState, useEffect} from "react";
import '../style.css';
// import axios from "axios";
import { Link } from "react-router-dom";
import { GoogleLogin, googleLogout } from '@react-oauth/google'


const RegistrationForm=()=> {
// const [user, setUser] = useState([]);
// const [profile, setProfile] = useState([]);

// const login = GoogleLogin({
//   onSuccess : (codeResponse) => setUser(codeResponse),
//   onError : (error) => alert('Login Failed', error)
// });

// useEffect(()=>{
//   if(user){
//     axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
//       headers:{
//         Authorization: `Bearer $(user.access_token)`,
//         Accept: 'application/json'
//       }
//     })
//     .then((res)=>{
//       setProfile(res.data);
//     })
//     .catch((err)=>console.log(err));
//   }
// },[user]);

// const logOut = () =>{
//   googleLogout();
//   setProfile(null);
// };

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

      const responseMsg = (response) =>{
        console.log(response);
        // user.push("/home");
        // profile.push("/home");
      }

      const errorMsg = (error) =>{
        console.log(error);
      }

    return(
        <div className="page">
        <div style={style}>
        <span>Board.</span>
      </div>
      <div className="form">
        <h2>Sign In</h2>
        <p>Sign in to your account</p>
        
        <div className="btn">
          <GoogleLogin onSuccess={responseMsg} onError={errorMsg}></GoogleLogin>
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