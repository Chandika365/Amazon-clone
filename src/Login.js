import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { GoogleButton } from "react-google-button";

function Login() {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const navigate = useNavigate();

  //   const signIn = (e) => {
  //     e.preventDefault();

  //     //firebase code
  //     // for login
  //     // signInWithEmailAndPassword(auth, email, password)
  //     //   .then((auth) => {
  //     //     console.log(auth);
  //     //     if (auth) {
  //     //       navigate("/");
  //     //     }
  //     //   })
  //     //   .catch((error) => alert(error.message));

  //     // new aded code

  //     const auth = firebase.auth();
  //     auth
  //       .signInWithEmailAndPassword(auth, email, password)
  //       .then((auth) => {
  //         console.log(auth);
  //         if (auth) {
  //           navigate("/");
  //         }
  //       })
  //       .catch((error) => {
  //         const errorCode = error.code;
  //         const errorMessage = error.message;
  //       });
  //     // end of new aded code
  //   };

  //   const register = (e) => {
  //     e.preventDefault();
  //     // for registration
  //     //firebase code

  //     const auth = firebase.auth();
  //     auth
  //       .createUserWithEmailAndPassword(auth, email, password)
  //       .then((auth) => {
  //         console.log(auth);
  //         // successfully created a new user with email and password
  //         if (auth) {
  //           navigate("/");
  //         }
  //       })
  //       .catch((error) => alert(error.message));
  //   };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>

      <div className="login-container">
        <h1>Sign-in</h1>
        <form action="">
          <h5>E-mail</h5>
          <input
            type="text"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            // onClick={signIn}
            className="login-signInButton"
          >
            Sign In
          </button>
          <GoogleButton className="google-button" />
        </form>
        <p>
          By signing-in you agree to the AMAZON CLONE Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button
          // type="submit"
          // onClick={register}
          className="login-registerButton"
        >
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
