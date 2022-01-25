import React, { Fragment, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import Axios from "axios";
import { Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { getUserThunk } from "../redux/actions/userThunk";
import { loginStatusActions} from "../redux/actions/loginStatusActions"

function Login() {
  const [emailLog, setEmailLog] = useState("");
  const [passwordLog, setpasswordLog] = useState("");

  const [loginStatus, setLoginStatus] = useState("");
  const [redirect, setRedirect] = useState(false) //redirect to main page
  

  const navigate = useNavigate()
  const redirectSignup = () =>{
    navigate("/signup")
  }

  const dispatch = useDispatch(); 

  const login = () => {
    Axios.post("http://localhost:5000/login", {
      email: emailLog,
      password: passwordLog,
      
    }).then((response) => {
      console.log(response);
      if (response.status==200) { //if login is correct
        setLoginStatus(`Welcome, ${response.data.data.username}`); 
        setTimeout(() => {(setRedirect(true))}, 2000); //timeout so user can see welcome tag
        dispatch(getUserThunk(response.data.data.id)) //this dispatch gets the user by using their id
      }
    }).catch(error => {
      if (error.response.status==400){ //if email is incorrect
        setLoginStatus(error.response.data.errors)
        console.log(error.response.data.errors)
      }
      if (error.response.status==401){ //if password is incorrect
        setLoginStatus(error.response.data.password)
        console.log(error.response.data.password)
      }
    })
  };


  

  //redux
  const [user, isFetchingUser] = useSelector((state) => [ //now that we have the user by getting their id, we may display them on this, or
    state.user.user,                                      //other pages
    state.user.isFetchingUser, 
  ]); 
  
  if (redirect) {
    return (<Navigate to="/"/>) //redirect to home upon correct login 
  }
  return (
    <Fragment>
      <div className="container mt-5">
        <div className="text-center mt-2">
          <div className="">
            <h1> Login </h1>
            <label for="Username" className="form-label">
              Email:{" "}
            </label>
            <input
              text="text"
              className=" form-control"
              placeholder=" Username..."
              onChange={(e) => {
                setEmailLog(e.target.value);
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
            type="password"
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
    {isFetchingUser && user === {} ? (
          <div>Fetching User...</div>
        ) : (
          <div>
            <div>{user.username}</div>
          </div>
        )}

  
        <em> Don't have an account already? Click below to Sign up!</em>
        <div className="d-flex justify-content-center">
        <button className="button btn btn-primary mt-3" onClick={redirectSignup}>Sign up</button>
      </div>
      </div>
    </Fragment>
  );
}
export default Login;