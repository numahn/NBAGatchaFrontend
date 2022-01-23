import React, { Fragment, useState } from "react";
import { useNavigate } from 'react-router-dom'
import Axios from "axios";

function Login() {
  const [usernameLog, setUsernameLog] = useState("");
  const [passwordLog, setpasswordLog] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const navigate = useNavigate()
  const redirectSignup = () =>{
    navigate("/signup")
  }
  const login = () => {
    Axios.post("http://localhost:5000/login", {
      username: usernameLog,
      password: passwordLog,
    }).then((response) => {
      console.log(response);
      if (response.data.error) {
        setLoginStatus(response.data.error.message);
      } else {
        setLoginStatus(response.data[0].username);
      }
    });
  };

  return (
    <Fragment>
      <div className="container mt-5">
        <div className="text-center mt-2">
          <div className="">
            <h1> Login </h1>
            <label for="Username" className="form-label">
              Username:{" "}
            </label>
            <input
              text="text"
              className=" form-control"
              placeholder=" Username..."
              onChange={(e) => {
                setUsernameLog(e.target.value);
              }}
            />
          </div>

          <label type="password" className="form-label mt-2">
            Password:{" "}
          </label>
          <input
            className="mb-3"
            className="form-control"
            placeholder="Password..."
            onChange={(e) => {
              setpasswordLog(e.target.value);
            }}
          />

          <button onClick={login} className="btn btn-primary mt-3">
            {" "}
            Log in{" "}
          </button>
        </div>
        <h1> {loginStatus}</h1>

  
        <em> Don't have an account already? Click below to Sign up!</em>
        <div className="d-flex justify-content-center">
        <button className="button btn btn-primary mt-3" onClick={redirectSignup}>Sign up</button>
      </div>
      </div>
    </Fragment>
  );
}
export default Login;
