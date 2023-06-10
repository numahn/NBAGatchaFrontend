import React, { useState, useEffect } from "react";
import "./App.scss";
import { useSelector } from "react-redux";
import axios from "axios";
import ReactDOM from "react-dom";

function Mycollection() {
  const [user, isFetchingUser] = useSelector((state) => [
    state.user.user,
    state.user.isFetchingUser,
  ]);

  const getPlayers = async () => {
    const response = await axios.get(
      `https://ttp-capstone-project-backend.vercel.app/users_collection/${user.userId}`
    );
    let result = response.data;
    let result2 = result.map((e) => e.playerId);
    let i = 0;

    result2.map(async (e) => {
      let playerAPIResponse = await axios.get(
        `https://ttp-capstone-project-backend.vercel.app/players_cards/${e}`
      );

      ReactDOM.render(
        <div className="collection-card text-white bg-dark me-4 mb-3 mt-4">
          <img
            src={playerAPIResponse.data[0].playerImage}
            className="card-img-top"
            alt={playerAPIResponse.data[0].playerId}
          />
          <div className="card-body">
            <h5 className="card-title">
              {playerAPIResponse.data[0].playerName}
            </h5>
            <p className="card-text">
              Overall: {playerAPIResponse.data[0].playerRating}
            </p>
            <p className="card-text">
              Team: {playerAPIResponse.data[0].playerTeam}
            </p>
            <p className="card-text">
              Number: {playerAPIResponse.data[0].playerNumber}
            </p>
            <p className="card-text">
              Height: {playerAPIResponse.data[0].playerHeight}
            </p>
            <p className="card-text">
              Weight: {playerAPIResponse.data[0].playerWeight}
            </p>
          </div>
        </div>,
        document.getElementById(`cards${i}`)
      );
      i++;
    });
  };

  useEffect(() => {
    getPlayers();
  }, []);

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderContent = () => (
    <>
      <div className="homegrids">
        <div data-aos="fade-down" className="homeboxes">
          <h1 className="Parallax__content__heading__text">NBA COLLECTION</h1>
          <h2 className="Parallax__content__heading__caption">Your Cards:</h2>
        </div>
        <div data-aos="fade-up" className="homeboxes">
          <div className="text-center">
            <div className="d-flex flex-wrap justify-content-around">
              <div id="cards0"></div>
              <div id="cards1"></div>
              <div id="cards2"></div>
              <div id="cards3"></div>
              <div id="cards4"></div>
              <div id="cards5"></div>
              <div id="cards6"></div>
              <div id="cards7"></div>
              <div id="cards8"></div>
              <div id="cards9"></div>
              <div id="cards10"></div>
              <div id="cards11"></div>
              <div id="cards12"></div>
              <div id="cards13"></div>
              <div id="cards14"></div>
              <div id="cards15"></div>
              <div id="cards16"></div>
              <div id="cards17"></div>
              <div id="cards18"></div>
              <div id="cards19"></div>
              <div id="cards20"></div>
              <div id="cards21"></div>
              <div id="cards22"></div>
              <div id="cards23"></div>
              <div id="cards24"></div>
              <div id="cards25"></div>
              <div id="cards26"></div>
              <div id="cards27"></div>
              <div id="cards28"></div>
              <div id="cards29"></div>
              <div id="cards30"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <section className="Parallax">
      <div
        className="Parallax__background"
        style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
      />
      <div
        className="Parallax__background-triangles"
        style={{ transform: `translateY(${offsetY * 0.8}px)` }, {height: `7000px`}}
      />

      <div className="Parallax__content">{renderContent()}</div>
    </section>
  );
}
export default Mycollection;
