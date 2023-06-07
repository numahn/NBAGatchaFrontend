import React, { Fragment, useState } from "react";
import { useNavigate, Link, Navigate } from "react-router-dom";
import Axios from "axios";

function Signup() {
  const [usernameSign, setUsernameSign] = useState("");
  const [passwordSign, setPasswordSign] = useState("");
  const [emailSign, setemailSign] = useState("");
  const [currencySign, setCurrencySign] = useState();
  const [redirect, setRedirect] = useState(false); //redirect to main page

  const navigate = useNavigate();
  const redirectLogin = () => {
    navigate("/login");
  };

  const users = () => {
    Axios.post("https://ttp-capstone-project-backend.vercel.app/signup", {
      username: usernameSign,
      password: passwordSign,
      email: emailSign,
      accountBalance: currencySign,
    }).then((response) => {
      console.log(response);
      redirectLogin();
    });
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
                  className=" form-control"
                  placeholder="Enter Username..."
                  onChange={(e) => {
                    setUsernameSign(e.target.value);
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
                    setemailSign(e.target.value);
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
                    setPasswordSign(e.target.value);
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
                  setCurrencySign(e.target.value);
                }}
              />
              <button onClick={users} className="btn btn-primary mt-3">
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
                <Link to="/login" style={{ paddingLeft: "0.5rem"}}>Click here to Log in!</Link>
              </em>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Signup;
