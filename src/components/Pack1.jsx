import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./App.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getUserThunk } from "../redux/actions/userThunk";

// import Confetti from "react-confetti";
//import Fireworks from "react-native-fireworks";

//Pack1: Display all cards and choose random one to give user after using currency

export default function Pack1() {
  const [user, isFetchingUser] = useSelector((state) => [
    state.user.user,
    state.user.isFetchingUser,
  ]);
  const [currency, setCurrency] = useState(user.accountBalance);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const redirectCardopen = () => {
    navigate("/cardopen");
  };

  const updateCurrency = async () => {
    try {
      const newCurrency = user.accountBalance - 5;
      const body = { accountBalance: newCurrency };
      const response = await fetch(
        `https://ttp-capstone-project-backend.vercel.app/user/${user.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      dispatch(getUserThunk(user.id));
      console.log(newCurrency);
    } catch (err) {
      console.error(err.message);
    }
  };
  const handleSubmit = () => {
    getRandom();
    updateCurrency();
  };

  const [{ cards }, setCards] = useState({ cards: [] });
  const [players, setPlayers] = useState([]);
  const [randomcard, setrandomCard] = useState([]);
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
      setPlayers(response.data.slice(20, 30));
      console.log(players)
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
        <div data-aos="flip-right" className="homeboxes">
          <div className="maincontainer">
            <div className="thecard">
              <div className="thefront">
                <img
                  src={chosenCard.player_image}
                  className="card-img-top"
                  alt={chosenCard.player_id}
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

    let user_id = user.id;
    let player_id = chosenCard.playerId;
    console.log(chosenCard);
    console.log(chosenCard.playerId);

    try {
      const response = await fetch(
        "https://ttp-capstone-project-backend.vercel.app/users_collection",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ user_id, player_id }),
        }
      );
    } catch (error) {
      console.error(error.message);
    }
  };

  // setRandomCard = () => {

  // }

  return (
    <Fragment>
      <div className="bg1">
        <h1> </h1>

        <div data-aos="fade-right" className="homeboxes">
          <h1 className="text-center text-white mt-5">
            Starter Pack(The Benchwarmers)
          </h1>

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
          <h1>Please add more {vcImg} to Open  </h1>
        ) : (
          <button type="button" class="btn btn-secondary mb-3" onClick={handleSubmit} > 
          Open (15 {vcImg}) 
          </button>
        )}
        </div>
        <div className="d-flex justify-content-center">
          {cards}
          <div></div>
        </div>

        <div className="d-flex flex-wrap justify-content-around mt-4 mx-3 pt-5">
          {players.map((player) => (
            <div class="player-card text-white bg-dark mt-4 pt-3">
              <img
                src={player.playerImage}
                class="card-img-top"
                alt={player.playerId}
              />

              <div class="card-body">
                <h5 class="card-title">{player.playerName}</h5>
                <p className="card-text">
                  Overall: {player.playerRating}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}
