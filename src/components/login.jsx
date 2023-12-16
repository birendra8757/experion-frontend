import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./LoginForm.css"; // Import your custom CSS file for additional styling

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform the login action here
    console.log("A login was submitted: " + username);
  };

  return (
    <div class='signin'>
      <div class='content'>
        <h2>Sign In</h2>

        <div class='form'>
          <div class='inputBox'>
            <input type='text' required>
              {" "}
              <i>Username</i>/
            </input>
          </div>

          <div class='inputBox'>
            <input type='password' required>
              {" "}
              <i>Password</i>/
            </input>
          </div>

          <div class='links'>
            {" "}
            <a href='#'>Forgot Password</a> <a href='#'>Signup</a>
          </div>

          <div class='inputBox'>
            <input type='submit' value='Login'>
              /
            </input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
