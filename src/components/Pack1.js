import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
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
      <div className="card d-flex flex-wrap justify-context-center">
        {players.map((player) => (
          <div class="card">
            <img src={player.player_image} class="card-img-top" alt={player.player_id} />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
}
