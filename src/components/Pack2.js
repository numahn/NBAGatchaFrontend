import React, {Fragment, useState, useEffect} from 'react'
import axios from 'axios';
export default function Pack2() {
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
          "https://ttp-capstone-project-backend.herokuapp.com/players_cards"
        );
        console.log(response);
        setPlayers(response.data.slice(0, 10));
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
        <h1 className="text-center">All-Stars</h1>
        <div className="image d-flex justify-content-center">
          <img
            src="https://s3.envato.com/files/85563070/1.png"
            alt="chest"
            width="75%"
          ></img>
        </div>
        <div className="d-flex justify-content-center">
          <button type="button" class="btn btn-secondary ">
            Open (10 {vcImg})
          </button>
        </div>
        <div className="d-flex flex-wrap justify-content-around mx-3">
          {players.map((player) => (
            <div class="player-card text-white bg-dark mt-4">
              <img
                src={player.player_image}
                class="card-img-top"
                alt={player.player_id}
              />
              <div class="card-body">
                <h5 class="card-title">{player.player_name}</h5>
                <p className="card-text">
                  Overall: {player.player_overall_rating}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Fragment>
    );
}
