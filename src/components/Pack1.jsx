import React, { Fragment, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { getUserThunk } from "../redux/actions/userThunk";
import { useDispatch } from "react-redux";
import "./App.scss";
export default function Pack2() {
  const [user, isFetchingUser] = useSelector((state) => [
    state.user.user,
    state.user.isFetchingUser,
  ]);
  

  const [{ cards }, setCards] = useState({ cards: [] });

  const dispatch = useDispatch();

  const updateCurrency = async () => {
    try {
      const newCurrency = user.accountBalance - 10;
      const response = await axios.put(
        `https://ttp-capstone-project-backend.vercel.app/user/${user.userId}`,
        {
          accountBalance: newCurrency,
        }
      );
      dispatch(getUserThunk(user.userId));
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleSubmit = () => {
    getRandom();
    updateCurrency();
  };

  const [players, setPlayers] = useState([]);
  const vcImg = (
    <img
      src="https://i.kinja-img.com/gawker-media/image/upload/t_original/rqzu9vldxphnlthogvrs"
      alt="$"
      width="5%"
    ></img>
  );
  const getPlayers = async () => {
    try {
      const response = await axios(
        "https://ttp-capstone-project-backend.vercel.app/players_cards"
      );
      setPlayers(response.data.slice(0, 10));
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getPlayers();
  }, []);
  const getRandom = async () => {
    //Get random number from players array, 0-9
    let selector = Math.floor(Math.random() * 10);
    let chosenCard = players[selector];

    cards.push(
      <div key={cards.length}>
        <div data-aos="flip-up" className="homeboxes">
          <div className="maincontainer">
            <div className="thecard">
              <div className="thefront">
                <img
                  src={chosenCard.playerImage}
                  className="card-img-top"
                  alt={chosenCard.playerId}
                />
              </div>
              <div className="theback">
                <ul className="flex">
                  <b> Name: {chosenCard.playerName} </b>
                  <b> Number: {chosenCard.playerNumber} </b>
                  <b> Overall:{chosenCard.playerRating} </b>
                  <b> Team: {chosenCard.playerTeam} </b>
                  <b> Height: {chosenCard.playerHeight} </b>
                  <b> Weight: {chosenCard.playerWeight} </b>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    setCards({ cards: [...cards] });

    try {
      const response = await axios.post(
        "https://ttp-capstone-project-backend.vercel.app/users_collection",
        {
          userId: user.userId,
          playerId: chosenCard.playerId,
        }
      );
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Fragment>
      <div className="bg2">
        <div data-aos="fade-up" className="homeboxes">
          <h1 className="text-center mt-5 text-white ">All-Stars</h1>

          <div className="image d-flex justify-content-center">
            <img
              src="https://s3.envato.com/files/85563070/1.png"
              alt="chest"
              width="35%"
            ></img>
          </div>
        </div>
        <div className="image d-flex justify-content-center">
          {user.currency < 10 ? (
            <h1>Please add more {vcImg} to Open </h1>
          ) : (
            <button
              type="button"
              className="btn btn-secondary mb-3"
              onClick={handleSubmit}
            >
              Open (10 {vcImg})
            </button>
          )}
        </div>
        <div className="d-flex justify-content-center">
          {cards}
          <div></div>
        </div>

        <div className="d-flex flex-wrap justify-content-around mx-3">
          {players.map((player) => (
            <div className="player-card text-white bg-dark mt-4">
              <img
                src={player.playerImage}
                className="card-img-top"
                alt={player.playerId}
              />
              <div className="card-body">
                <h5 className="card-title">{player.playerName}</h5>
                <p className="card-text">Overall: {player.playerRating}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}
