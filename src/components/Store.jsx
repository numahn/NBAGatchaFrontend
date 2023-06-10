import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import "./App.scss";

function Store() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

 

  //Displaying card packs
  return (
    <Fragment>
      <section className="Parallax">
        <div
          className="Parallax__background"
          style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
        />
        <div
          className="Parallax__background-triangles"
          style={{ transform: `translateY(${offsetY * 0.8}px)` }, {height: `3000px`}}
        />
        {/* <div className="Parallax__content">{renderContent()}</div> */}

        <div className="d-flex justify-content-center align-items-center">
          <div data-aos="fade-up" className="box text-white px-3">
            <h1> Choosing Packs</h1>
          </div>
        </div>
      </section>
      <div className="grids">
        <div data-aos="flip-right" className="boxes">
          <Link to="/pack1">
            <img
              src="https://asset-preview.nbatopshot.com/packs/rare/pack_2_2021_all_star_game_rare.png"
              width="10%"
              className="card-img-top"
              alt="..."
            />
          </Link>
          <h5 className="card-title text-center text-white">
            ALL STAR RARE PACK
          </h5>
        </div>

        <div data-aos="flip-up" className="boxes">
          <Link to="/pack2">
            <img
              src="https://assets.nbatopshot.com/packs/legendary/pack_1_2020_nba_finals_legendary.png"
              width="10%"
              className="card-img-top"
              alt="..."
            />
          </Link>
          <h5 className="card-title text-center text-white">
            RETRO LEGENDARY PACK
          </h5>
        </div>

        <div data-aos="flip-left" className="boxes">
          <Link to="/pack3">
            <img
              src="https://asset-preview.nbatopshot.com/packs/common/pack_1_got_game_common.png"
              width="10%"
              className="card-img-top"
              alt="..."
            />
          </Link>
          <h5 className="card-title text-center text-white">COMMON PACK</h5>
        </div>
      </div>
    </Fragment>
  );
}
export default Store;
