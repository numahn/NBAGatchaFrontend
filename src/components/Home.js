import React, { useState, useEffect, Fragment } from "react";
import { useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux";

export default function Home() {
    const navigate = useNavigate()
    const redirectSignup = () =>{
        navigate("/signup")
    }

    //redux
 
  const [user, isFetchingUser] = useSelector((state) => [
    state.user.user, 
    state.user.isFetchingUser, 
  ]); 
  
    return (
        <Fragment>
            <h1 className="text-center mt-2">About Us</h1>
            <div className="text-center mt-5">
                <p>Welcome to NBA Gatcha! Get your favorite players in the form of a virtual card here!</p>
                <p>The new era of trading cards are here! Sign up now and we give you 500 VC (Virtual Currency) to get some of your favorite players for free!</p>
                <b>Sign up below!</b>
            </div>
            <div className="d-flex justify-content-center">
            <button className="button btn btn-primary mt-3" onClick={redirectSignup}>Sign up</button>
            
            </div>
        </Fragment>
    )
}
