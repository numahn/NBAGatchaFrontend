import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getUserThunk } from "../redux/actions/userThunk";
import "./App.scss";
export default function Pack3() {
  const [user, isFetchingUser] = useSelector((state) => [
    state.user.user,
    state.user.isFetchingUser,
  ]);
  const [currency, setCurrency] = useState(user.currency);

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
      setPlayers(response.data.slice(10, 20));
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getPlayers();
  }, []);

  const getRandom = async () => {
    let selector = Math.floor(Math.random() * 10);
    let chosenCard = players[selector];

    cards.push(
      <div key={cards.length}>
        <div data-aos="flip-down" className="homeboxes">
          <div className=" maincontainer">
            <div className="  thecard">
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
      console.log(response);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Fragment>
      <div className="bg3">
        <h1></h1>
        <div data-aos="fade-left" className="homeboxes">
          <h1 className="text-center text-white mt-5">Retro/Hall of Fame</h1>

          <div className="image d-flex justify-content-center">
            <img
              src="https://s3.envato.com/files/85563070/1.png"
              alt="chest"
              width="35%"
            ></img>
          </div>
        </div>
        <div className="image d-flex justify-content-center">
          {user.currency < 15 ? (
            <h1>Please add more {vcImg} to Open </h1>
          ) : (
            <button
              type="button"
              className="btn btn-secondary mb-3"
              onClick={handleSubmit}
            >
              Open (15 {vcImg})
            </button>
          )}
        </div>
        <div className="d-flex justify-content-center">
          {cards}
          <div></div>
        </div>

        <div className="d-flex flex-wrap justify-content-around mt-4 mx-3">
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
