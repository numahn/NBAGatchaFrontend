import React, { Fragment, useState } from "react";
import Axios from "axios";

function Login() {
  const [usernameLog, setUsernameLog] = useState("");
  const [passwordLog, setpasswordLog] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

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
            <label for="Username" class="form-label">
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

          <label for="password" class="form-label mt-2">
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

          <button onClick={login} class="btn btn-primary mt-3">
            {" "}
            Login{" "}
          </button>
        </div>
        <h1> {loginStatus}</h1>
      </div>
    </Fragment>
  );
}
export default Login;