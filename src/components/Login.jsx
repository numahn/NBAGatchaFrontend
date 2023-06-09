import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { getUserThunk } from "../redux/actions/userThunk";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false); //redirect to main page
  const dispatch = useDispatch();
  const userLogin = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "https://ttp-capstone-project-backend.vercel.app/login",
      {
        email,
        password,
      }
    );

    if (response.data.status !== 200) {
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

    toast("✅ " + response.data.message, {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      theme: "dark",
      progressStyle: { background: "#00B700" },
    });
    dispatch(getUserThunk(response.data.userId));
    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to="/store" />; //redirect to store upon correct login
  }

  return (
    <Fragment>
      <div
        className="bg4"
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
            <form className="text-center" onSubmit={(e) => userLogin(e)}>
              <div className="">
                <h1>Login</h1>
                <label
                  htmlFor="Username"
                  className="form-label"
                  style={{ textAlign: "start", width: "100%" }}
                >
                  Email:
                </label>
                <input
                  text="text"
                  className=" form-control"
                  placeholder="Email..."
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
              </div>
              <label
                type="password"
                className="form-label mt-2"
                style={{ textAlign: "start", width: "100%" }}
              >
                Password:
              </label>
              <input
                type="password"
                className="mb-3 form-control"
                placeholder="Password..."
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
              <button type="submit" className="btn btn-primary mt-3">
                Login
              </button>
            </form>
            <em
              style={{
                justifyContent: "center",
                display: "block",
                width: "100%",
                marginTop: "1.5rem",
              }}
            >
              Don't have an account already? Click{" "}
              <Link to="/signup">here</Link> to sign up!
            </em>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Login;
