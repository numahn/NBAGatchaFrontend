import React, { useState, useEffect, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import "./App.scss";

function Home() {
  const navigate = useNavigate();
  const redirectSignup = () => {
    navigate("/signup");
  };

  //redux

  

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderContent = () => (
    <>
      <div className="homegrid">
        <div className="homeboxes">
          <p>
            <h1 className="text-center mt-2">About Us</h1>
            <div className="text-center mt-5">
              <p>
                Welcome to the GGC (Goat Grade Collectables)! Get your favorite
                players in the form of a virtual card here!
              </p>
              <p>
                The new era of trading cards are here! Sign up now and we give
                you a 500 VC (Virtual Currency) to get some of your favorite
                players for free!
              </p>
              <b>Sign up below!</b>
            </div>
            <div className="d-flex justify-content-center">
              <button
                className="button btn btn-primary mt-3"
                onClick={redirectSignup}
              >
                Sign up
              </button>
            </div>
          </p>
        </div>
      </div>
    </>
  );

  return (
    <Fragment>
      <section className="Parallax">
        <div
          className="Parallax__background"
          style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
        />
        <div
          className="Parallax__background-triangles"
          style={{ transform: `translateY(${offsetY * 0.8}px)` }}
        />
        <div className="Parallax__content">{renderContent()}</div>
      </section>
    </Fragment>
  );
}
export default Home;
