import { Link } from "react-router-dom";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
function Nav() {
  const [user, isFetchingUser] = useSelector((state) => [
    state.user.user,
    state.user.isFetchingUser,
  ]);

  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <img
            src="https://pngimg.com/uploads/nba/nba_PNG15.png"
            alt="logo"
            width="1%"
            className="img me-3"
          />
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <p className="mt-3  navbar-brand">GGC</p>
              </li>
            </ul>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <Link to="/">
                <a className="navbar-brand me-4">Home</a>
              </Link>
              <Link to="/store">
                <a className="navbar-brand me-4">Store</a>
              </Link>
              <Link to="/mycollection">
                <a className="navbar-brand me-4">My Collection</a>
              </Link>
              {isFetchingUser || user === {} ? (
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Link to="/login">
                    <a className="navbar-brand" style={{ margin: 0 }}>
                      Log in
                    </a>
                  </Link>
                  <Link to="/signup">
                    <a className="navbar-brand" style={{ margin: 0 }}>
                      Sign up
                    </a>
                  </Link>
                </div>
              ) : (
                <div className="text-white">
                  <div>{user.username}</div>
                  <div id="currency">${user.accountBalance}</div>
                  <button className="btn btn-danger">Log Out</button>
                </div>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

export default Nav;
