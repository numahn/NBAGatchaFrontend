import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
//Pack1: Display all cards and choose random one to give user after using currency
export default function Pack1() {
  const [players, setPlayers] = useState([]);

  const getPlayers = async () => {
    try {
      const response = await axios(
        "https://ttp-capstone-project-backend.herokuapp.com/players_cards"
      );
      console.log(response);
      setPlayers(response.data.slice(20, 30));
    } catch (err) {
      console.error(err.message);
    }
  };
  console.log(players);
  useEffect(() => {
    getPlayers();
  }, []);

  return (
    <Fragment>
      <div className="card d-flex flex-wrap justify-content-center mt-2">
        {players.map((player) => (
          <div class="card text-white bg-dark">
            <img src={player.player_image} class="card-img-top" alt={player.player_id} />
            <div class="card-body">
              <h5 class="card-title">{player.player_name}</h5>
              <p class="card-text">Team: {player.player_team}</p>
              <p>Overall: {player.player_overall_rating}</p>
              <p>Height: {player.player_height}</p>
              <p>Weight: {player.player_weight}</p>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
}
