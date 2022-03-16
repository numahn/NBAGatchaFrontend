import React, {Fragment, useState, useEffect} from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { getUserThunk } from "../redux/actions/userThunk";
import "./App.scss"
export default function Pack3() {
  const [user, isFetchingUser] = useSelector((state) => [
    state.user.user, 
    state.user.isFetchingUser, 
  ]);
  const [currency, setCurrency] = useState(user.currency)

  const [{ cards }, setCards] = useState({ cards: [] });
  const dispatch = useDispatch(); 
  
 
    const updateCurrency = async() => { 
      
        try {
          const newCurrency = user.currency-15; 
            const body = {currency: newCurrency}
            const response = await fetch(`https://ttp-capstone-project-backend.herokuapp.com/user/${user.id}`, {
              method: "PUT", 
              headers: {"Content-Type": "application/json"},
              body: JSON.stringify(body)
            })
            dispatch(getUserThunk(user.id))
            console.log(newCurrency); 
        } catch (err) {
            console.error(err.message)
        }
    }

    const handleSubmit = () => {
      getRandom(); 
      updateCurrency(); 
    }

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
        setPlayers(response.data.slice(10, 20));
      } catch (err) {
        console.error(err.message);
      }
    };
    useEffect(() => {
      getPlayers();
    }, []);
  
    const getRandom = async () => {
      let selector = Math.floor(Math.random() * 10)
      let chosenCard = players[selector];
      
  
  
  
      cards.push(<div key={cards.length}>
          <div data-aos = "flip-down" className="homeboxes">
        <div className=" maincontainer"> 
  
  <div className="  thecard">
  
  
  <div className="thefront"> 
  
  
    
     <img
                src={chosenCard.player_image}
                className="card-img-top"
                alt={chosenCard.player_id}
              /> 
  
  
  
  </div>
  <div className="theback">
    <ul className="flex">
  <b> Name: {chosenCard.player_name} </b>
  <b> Number: {chosenCard.player_number} </b>
  <b> Overall:{chosenCard.player_overall_rating} </b>
  <b> Team: {chosenCard.player_team} </b>
  <b> Height: {chosenCard.player_height} </b>
  <b> Weight: {chosenCard.player_weight} </b>
  </ul>
  </div>
  
  
  </div>
  
  </div>
  </div>  
        
      
        </div>
        );
      setCards({ cards: [...cards] });
  
  
  
      console.log(chosenCard)
      console.log(chosenCard.player_id)
      //Need to add currency subtraction later here

    let user_id = user.id; 
    let player_id = chosenCard.player_id
    console.log(chosenCard)
    console.log(chosenCard.player_id)
    //Need to add currency subtraction later here


    try {
      const response = await fetch("https://ttp-capstone-project-backend.herokuapp.com/users_collection", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({user_id, player_id}),
      });
    } catch (error) {
      console.error(error.message);
    }
    }
    return (
      <Fragment>
        <div  className="bg3">



        <h1></h1>
        <div data-aos = "fade-left" className="homeboxes">
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
          <h1>Please add more {vcImg} to Open  </h1>
        ) : (
          <button type="button" class="btn btn-secondary mb-3" onClick={handleSubmit} > 
          Open (15 {vcImg}) 
          </button>
        )}
  


</div>
      <div className="d-flex justify-content-center">
      
      {cards}
<div>
       
        </div>

      </div>

        <div className="d-flex flex-wrap justify-content-around mt-4 mx-3">
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
        </div>
      </Fragment>
    );
}