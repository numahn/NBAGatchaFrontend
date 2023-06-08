import React, { Fragment, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserThunk } from "../redux/actions/userThunk";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [redirect, setRedirect] = useState(false); //redirect to main page
  const navigate = useNavigate();
  const redirectSignup = () => {
    navigate("/signup");
  };

  const dispatch = useDispatch();

  const login = async () => {
    const response = await axios.post(
      "https://ttp-capstone-project-backend.vercel.app/login",
      {
        email,
        password,
      }
    );
    console.log(response);

    if (response.status === 200) {
      setLoginStatus(`Welcome, ${response.data[0].username}`);
      setTimeout(() => {
        setRedirect(true);
      }, 2000); //timeout so user can see welcome tag
      dispatch(getUserThunk(response.data[0].userId));
    }

    // .catch((error) => {
    //   if (error.response.status === 400) {
    //     //if email is incorrect
    //     setLoginStatus(error.response.data.errors);
    //     console.log(error.response.data.errors);
    //   }
    //   if (error.response.status === 401) {
    //     //if password is incorrect
    //     setLoginStatus(error.response.data.password);
    //     console.log(error.response.data.password);
    //   }
    // });
  };

  //redux
  const [user, isFetchingUser] = useSelector((state) => [
    //now that we have the user by getting their id, we may display them on this, or
    state.user.user, //other pages
    state.user.isFetchingUser,
  ]);

  if (redirect) {
    return <Navigate to="/" />; //redirect to home upon correct login
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
            <div className="text-center">
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
              />

              <button onClick={login} className="btn btn-primary mt-3">
                Login
              </button>
            </div>
            <h1> {loginStatus}</h1>
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
