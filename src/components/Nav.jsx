import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
              <Link
                to="/"
                className="navbar-brand me-4"
                style={{
                  margin: 0,
                  textDecoration: "underline",
                  textDecorationColor: "#0d6efd",
                }}
              >
                Home
              </Link>
              <Link
                to="/store"
                className="navbar-brand me-4"
                style={{
                  margin: 0,
                  textDecoration: "underline",
                  textDecorationColor: "#0d6efd",
                }}
              >
                Store
              </Link>
              <Link
                to="/mycollection"
                className="navbar-brand me-4"
                style={{
                  margin: 0,
                  textDecoration: "underline",
                  textDecorationColor: "#0d6efd",
                }}
              >
                My Collection
              </Link>
              {isFetchingUser || user === {} ? (
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Link
                    to="/login"
                    className="navbar-brand"
                    style={{
                      margin: 0,
                      textDecoration: "underline",
                      textDecorationColor: "#0d6efd",
                    }}
                  >
                    Log in
                  </Link>
                  <Link
                    to="/signup"
                    className="navbar-brand"
                    style={{
                      margin: 0,
                      textDecoration: "underline",
                      textDecorationColor: "#0d6efd",
                    }}
                  >
                    Sign up
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
