import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function Store() {
  //Displaying card packs
  return (
    <Fragment>
      <div className="d-flex justify-content-around mt-5">
        <Link to="/pack1">
          <div className="card text-white bg-dark mb-3">
            <img
              src="https://static.turbosquid.com/Preview/001285/051/IC/_600.jpg"
              width="10%"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Pack 1</h5>
            </div>
          </div>
        </Link>

        <Link to="/pack2">
          <div className="card text-white bg-dark mb-3">
            <img
              src="https://static.turbosquid.com/Preview/001285/051/IC/_600.jpg"
              width="10%"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Pack 2</h5>
            </div>
          </div>
        </Link>

        <Link to="/pack3">
          <div className="card text-white bg-dark mb-3">
            <img
              src="https://static.turbosquid.com/Preview/001285/051/IC/_600.jpg"
              width="10%"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Pack 3</h5>
            </div>
          </div>
        </Link>
      </div>
    </Fragment>
  );
}