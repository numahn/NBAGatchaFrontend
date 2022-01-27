import React ,{ useState, useEffect} from "react";
import "./App.scss"
import { useSelector } from "react-redux";
import axios from "axios";
import { Axios } from "axios";
import ReactDOM from 'react-dom';

 function Mycollection() {

  const [user, isFetchingUser] = useSelector((state) => [
    state.user.user, 
    state.user.isFetchingUser, 
  ]);
let result = []; 
let result2 = []; 
let i
const getPlayers = async () => {

  try {
    const response =  await axios.get(`https://ttp-capstone-project-backend.herokuapp.com/users_collection/${user.id}`);
    result=response.data; 
    result2 = result.map((e) => e.player_id)
    i=0
    result2.map((e) => {
      let playerAPIResponse = axios.get(
        `https://ttp-capstone-project-backend.herokuapp.com/players_cards/${e}`
      ).then((response) => {

        console.log(response.data)
        /*<div class="card player-card text-white bg-dark mb-3">
        <img class="card-img-top" src={response.data.player_image} alt="Card image cap"/>
        <div class="card-body">
          <h5 class="card-title">{response.data.player_name}</h5>
          <p class="card-text">text.</p>
        </div>
      </div>*/
        //<h1>{response.data.player_name}</h1>
        ReactDOM.render(
          <div class="collection-card text-white bg-dark me-4 mb-3 mt-4">
            <img
              src={response.data.player_image}
              class="card-img-top"
              alt={response.data.player_id}
            />

            <div class="card-body">
              <h5 class="card-title">{response.data.player_name}</h5>
              <p className="card-text">
                Overall: {response.data.player_overall_rating}
              </p>
              <p className="card-text">
                Team: {response.data.player_team}
              </p>
              <p className="card-text">
                Number: {response.data.player_number}
              </p>
              <p className="card-text">
                Height: {response.data.player_height}, Weight: {response.data.player_weight}
              </p>
            </div>
          </div>, document.getElementById(`cards${i}`))
        i++;
      })
      
    });
    
    //ReactDOM.render( <h1>{result2}</h1>,document.getElementById("cards"))
    console.log(result2) 
    
  }
   catch (error) {
    console.error(error.message);
  }
}
//console.log(result)

// const renderPlayers = async () => (
  
//   ReactDOM.render( ,document.getElementById("cards"))
//   console.log(result2)
// )


 useEffect(() => {
   getPlayers() 
 }, [])



let link = "https://cdn.wallpapersafari.com/72/99/oRxvNl.jpeg"

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  const renderContent = () => (
    <>
         <div className="homegrids">
      <div data-aos = "fade-down" className="homeboxes">
 
        <h1 className="Parallax__content__heading__text">NBA COLLECTION</h1>
        <h2 className="Parallax__content__heading__caption">
       Your Cards:
        </h2>
      </div>
      <div data-aos = "fade-up" className="homeboxes">
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

  return(
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


  )
}
export default Mycollection