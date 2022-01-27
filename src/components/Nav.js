import {Link} from 'react-router-dom'
import React, { useState, useEffect, Fragment } from "react";
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import  Axios  from 'axios';
function Nav() {
 
  const [user, isFetchingUser] = useSelector((state) => [
    state.user.user, 
    state.user.isFetchingUser, 
  ]); 
  const [currency, setCurrency] = useState()

    
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <img src="https://pngimg.com/uploads/nba/nba_PNG15.png" alt="logo" width="1%" className="img me-3"></img>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <p className="mt-3  navbar-brand">GGC</p>
              </li>
            </ul>
            <ul className="navbar-nav mb-2 mb-lg-0">
                <Link to="/">
                <li className="nav-item me-4 home">
                    <a className="navbar-brand">Home</a>
                </li>
                </Link>
                <Link to="/store">
                <li className="nav-item me-4 store">
                    <a className="navbar-brand">Store</a>
                </li>
                </Link>
                <Link to="/mycollection">
                <li className="nav-item me-4 collection">
                    <a className="navbar-brand">My Collection</a>
                </li>
                </Link>
                
                {isFetchingUser || user === {} ? (
          <div><Link to ="/login">
          <li className="nav-item me-4 login">
              <a className="navbar-brand">Log in</a>
          </li>
          </Link>
          <Link to ="/signup">
          <li className="nav-item me-4 signup">
              <a className="navbar-brand">Sign up</a>
          </li>
          </Link></div>
        ) : (
          <div className="text-white">
            <div>{user.username}</div>
            <div id="currency">{"$ "}{user.currency}</div>
            <button className='btn btn-danger'>Log Out</button>
          </div>  
        )}
            </ul>


          </div>

        
        </div>
      </nav>
    </Fragment>
  );
}

export default Nav