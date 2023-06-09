import axios from "axios";
import React, { Fragment, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { toast } from "react-toastify";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [accountBalance, setAccountBalance] = useState(0);
  const [redirect, setRedirect] = useState(false); //redirect to main page

  const userSignUp = async (e) => {
    e.preventDefault();
    let response = await axios.post("http://localhost:5200/signup", {
      username,
      email,
      password,
      accountBalance,
    });

    const tempStatus = response.data[0]?.status ?? response.data?.status;

    if (tempStatus !== 200) {
      toast("🛑 " + response.data.message, {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "dark",
        progressStyle: { background: "red" },
      });
      return;
    }

    toast("✅ " + response.data[0].message, {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      theme: "dark",
      progressStyle: { background: "#00B700" },
    });
    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to="/login" />; //redirect to login upon correct sign up 
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
            <form className="text-center" onSubmit={(e) => userSignUp(e)}>
              <div className="Signup ">
                <h1>Signup</h1>
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
                  required
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
                  required
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
                  required
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
                type="number"
                className="form-control"
                placeholder="Enter an amount to start off with..."
                onChange={(e) => {
                  setAccountBalance(e.target.value);
                }}
                required
              />
              <button type="submit" className="btn btn-primary mt-3">
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
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Signup;
