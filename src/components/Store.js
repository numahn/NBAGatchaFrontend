import React, { Fragment } from "react";

export default function Store() {
  //https://static.turbosquid.com/Preview/001285/051/IC/_600.jpg
  return (
    <Fragment>
      <div className="d-flex justify-content-around">
        <div className="card text-white bg-dark mb-3">
          <img src="https://static.turbosquid.com/Preview/001285/051/IC/_600.jpg" width="10%" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
