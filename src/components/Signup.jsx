import axios from "axios";
import React, { Fragment, useState } from "react";
import { Link, Navigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [accountBalance, setAccountBalance] = useState();
  const [redirect, setRedirect] = useState(false); //redirect to main page

  


  const userSign = async () => {
    const response = await axios.post(
      "https://ttp-capstone-project-backend.vercel.app/signup",
      {
        username,
        password,
        email,
        accountBalance,
      }
    );

    console.log(username);
    console.log(password);
    console.log(email);
    console.log(accountBalance);

    // .then((response) => {
    //   redirectLogin();
    // });
  };

  if (redirect) {
    return <Navigate to="/login" />; //redirect to home upon correct login
  }

  return (
    <Fragment>
      <div
        className="bg5"
        style={{
          margin: 0,
          height: "calc(100vh - 88px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="homeboxes">
          <div className="container" style={{ height: "100%" }}>
            <div className="text-center ">
              <div className="Signup ">
                <h1> Signup</h1>
                <label
                  type="Username"
                  className="form-label"
                  style={{ textAlign: "start", width: "100%" }}
                >
                  Username:
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Username..."
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </div>
              <div className="email" style={{ marginTop: "0.5rem" }}>
                <label
                  type="email"
                  className="form-label"
                  style={{ textAlign: "start", width: "100%" }}
                >
                  Email:
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter email..."
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div>
                <label
                  text="password"
                  className="form-label mt-2"
                  style={{ textAlign: "start", width: "100%" }}
                >
                  Password:
                </label>
                <input
                  type="password"
                  className="mb-2 form-control"
                  placeholder="Enter Password..."
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <label
                text="currencySign"
                className="form-label"
                style={{ textAlign: "start", width: "100%" }}
              >
                Balance:
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter an amount to start off with..."
                onChange={(e) => {
                  setAccountBalance(e.target.value);
                }}
              />
              <button
                onClick={() => userSign()}
                className="btn btn-primary mt-3"
              >
                Sign up
              </button>
              <em
                style={{
                  justifyContent: "center",
                  display: "inline-flex",
                  width: "100%",
                  marginTop: "0.5rem",
                }}
              >
                Already have an account?
                <Link to="/login" style={{ paddingLeft: "0.5rem" }}>
                  Click here to Log in!
                </Link>
              </em>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Signup;
