import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { register } from "../../services/services";
import SignupComplete from "../../components/SignupComplete";
import LoginTab from "../../components/LoginTab";

const Signup = () => {
  const [complete, setComplete] = useState(false);
  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const passwordConfirmRef = useRef("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const passwordConfirm = passwordConfirmRef.current.value;
    // validation
    if (password !== passwordConfirm) {
      setError("Passwords do not match");
    } else {
      // signup
      const data = {
        "email": `${email}`,
        "password": `${password}`,
        "firstName": `${firstName}`,
        "lastName": `${lastName}`,
      }
      register(data)
        .then(res => {
          // console.log(res);
          setComplete(true);
        })
        .catch(err => {
          console.log(err);
        })
    }
  }

  return (
    <div id="signup">
      {complete
        ? <SignupComplete />
        : <>
          <LoginTab>
            <p>Sing up to application</p>
            <form onSubmit={handleSubmit}>
              <div className="err">{error}</div>
              <input type="text" ref={firstNameRef} placeholder="Email or User" required />
              <input type="text" ref={lastNameRef} placeholder="Full Name" required />
              <input type="email" ref={emailRef} placeholder="Email" required />
              <input type="password" ref={passwordRef} placeholder="Password" required />
              <input type="password" ref={passwordConfirmRef} placeholder="Confirm Password" required />
              <button className="bigButton" type="submit">Sign Up</button>
            </form>
          </LoginTab>
        </>
      }
    </div>
  );
}

export default Signup;