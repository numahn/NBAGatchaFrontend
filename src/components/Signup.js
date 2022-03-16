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
    Axios.post("https://ttp-capstone-project-backend.herokuapp.com/signup", {
      username: usernameSign,
      password: passwordSign,
      email: emailSign,
      currency: currencySign,
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
      <div className="bg5">
        <div className="homeboxes pt-5">
          <div className="container mt-5">
            <div className="text-center ">
              <div className="Signup ">
                <h1> Signup</h1>
                <label type="Username" className="form-label">
                  Username:
                </label>

                <input
                  type="text"
                  className=" form-control"
                  placeholder=" Enter Username..."
                  onChange={(e) => {
                    setUsernameSign(e.target.value);
                  }}
                />
              </div>

              <div className="email">
                <label type="email" className="form-label">
                  Email:
                </label>

                <input
                  type="text"
                  className=" form-control"
                  placeholder=" Enter email..."
                  onChange={(e) => {
                    setemailSign(e.target.value);
                  }}
                />
              </div>

              <label
                text="password"
                text="passwordSign"
                className="form-label mt-2"
              >
                Password:
              </label>
              <input
                type="password"
                className="mb-3"
                className="form-control"
                placeholder="Enter Password..."
                onChange={(e) => {
                  setPasswordSign(e.target.value);
                }}
              />
              <label text="currencySign" className="form-label mt-2">
                Currency:
              </label>
              <input
                type="text"
                className="mb-3"
                className="form-control"
                placeholder="Enter Amount to start off with..."
                onChange={(e) => {
                  setCurrencySign(e.target.value);
                }}
              />
              <button onClick={users} className="btn btn-primary mt-3">
                Sign up
              </button>
            </div>

            <em>
              Already have an account?
              <Link to="/login">Click here to Log in!</Link>
            </em>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Signup;
