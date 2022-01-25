import {Link} from 'react-router-dom'
import React, { useState, useEffect, Fragment } from "react";
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { getUserThunk } from "../redux/actions/userThunk";


import * as ReactBootStrap from "react-bootstrap"
function Nav() {
  //redux
  const [user, isFetchingUser] = useSelector((state) => [
    state.user.user, 
    state.user.isFetchingUser, 
  ]); 

  return (
    <Fragment>



<div  className="Container">

<ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="dark" variant="dark">
<img src="https://pngimg.com/uploads/nba/nba_PNG15.png" alt="logo" width="1%" className="img me-3"></img>
  <ReactBootStrap.Navbar.Brand href="/"> NBA GATCHA</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="me-auto">

      <ReactBootStrap.Nav.Link href="#Home">
      <Link to="/">
            
                    <a className="navbar-brand">Home</a>
          
                </Link>
      
      </ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#store">
      <Link to="/store">
                <li className="nav-item store">
                    <a className="navbar-brand">Store</a>
                </li>
                </Link>
      
      </ReactBootStrap.Nav.Link>
      
       
       <ReactBootStrap.Nav.Link href="#Mycollection">
       
       <Link to="/Mycollection">
                <li className="nav-item  Mycollection">
                    <a className="navbar-brand">MyCollection</a>
                </li>
       
                 </Link>
       
       </ReactBootStrap.Nav.Link>
      
   
      <ReactBootStrap.Nav.Link href="#Login">
      
      <Link to ="/login">
                <li className="nav-item  login">
                    <a className="navbar-brand">Log in</a>
                </li>
                </Link>
      
      </ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link eventKey={2} href="#Signup">

      <Link to ="/signup">
                <li className="nav-item signup">
                    <a className="navbar-brand">Sign up</a>
                </li>
                </Link>
              

      </ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>

</ReactBootStrap.Navbar>



</div>



























{/*  
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <img src="https://pngimg.com/uploads/nba/nba_PNG15.png" alt="logo" width="1%" className="img me-3"></img>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <p className="mt-3 navbar-brand">NBA Gatcha</p>
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
                <Link to="/collection">
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
          <div>
            <div>{user.username}</div>
            <div>{"$ "}{user.currency}</div>
            <button className='btn btn-danger'>Log Out</button>
          </div>  
        )}
            </ul>


          </div>
        
        </div>
      </nav>  */}
    </Fragment>
  );
}

export default Nav
