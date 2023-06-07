import React, { Fragment, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserThunk } from "../redux/actions/userThunk";

function Login() {
  const [emailLog, setEmailLog] = useState("");
  const [passwordLog, setpasswordLog] = useState("");
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
        email: emailLog,
        password: passwordLog,
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
      <div className="bg4">
        <div className="homeboxes pt-5">
          <div className="container">
            <div className="text-center">
              <div className="">
                <h1> Login </h1>
                <label htmlFor="Username" className="form-label">
                  Email:
                </label>
                <input
                  text="text"
                  className=" form-control"
                  placeholder="Email..."
                  onChange={(e) => {
                    setEmailLog(e.target.value);
                  }}
                />
              </div>

              <label type="password" className="form-label mt-2">
                Password:
              </label>
              <input
                type="password"
                className="mb-3"
                className="form-control"
                placeholder="Password..."
                type="password"
                onChange={(e) => {
                  setpasswordLog(e.target.value);
                }}
              />

              <button onClick={login} className="btn btn-primary mt-3">
                Login
              </button>
            </div>
            <h1> {loginStatus}</h1>
            {isFetchingUser && user === {} ? (
              <div>Fetching User...</div>
            ) : (
              <div>
                <div>{user.username}</div>
              </div>
            )}

            <em>
              Don't have an account already? Click
              <Link to="/signup"> Here to Sign up!</Link>
            </em>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Login;
