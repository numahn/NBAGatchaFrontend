import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function Store() {
  //png of currency
  const vcImg = (
    <img
      src="https://i.kinja-img.com/gawker-media/image/upload/t_original/rqzu9vldxphnlthogvrs"
      alt="$"
      width="2%"
    ></img>
  );
  const cardImg = (
    <img
      src="https://i.kinja-img.com/gawker-media/image/upload/t_original/rqzu9vldxphnlthogvrs"
      alt="$"
      width="5%"
    ></img>
  );
  //Displaying card packs
  return (
    <Fragment>
      <div className="text-center mt-5 balance">
        <h1 className="text-center">Balance: {vcImg}</h1>
      </div>
      <div className="d-flex justify-content-around mt-5">
        <div className="store-card text-white bg-dark mb-3">
          <img
            src="https://static.turbosquid.com/Preview/001285/051/IC/_600.jpg"
            width="10%"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Starter Pack</h5>
            <p class="card-text">{cardImg} 5</p>
            <Link to="/pack1">
              <a href="#" class="btn btn-primary">
                Open now
              </a>
            </Link>
          </div>
        </div>

        <div className="store-card text-white bg-dark mb-3">
          <img
            src="https://static.turbosquid.com/Preview/001285/051/IC/_600.jpg"
            width="10%"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">All Stars</h5>
            <p class="card-text">{cardImg} 10</p>
            <Link to="/pack2">
              <a href="#" class="btn btn-primary">
                Open now
              </a>
            </Link>
          </div>
        </div>

        <div className="store-card text-white bg-dark mb-3">
          <img
            src="https://static.turbosquid.com/Preview/001285/051/IC/_600.jpg"
            width="10%"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Retro Pack</h5>
            <p class="card-text">{cardImg} 20</p>
            <Link to="/pack3">
              <a href="#" class="btn btn-primary">
                Open now
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
