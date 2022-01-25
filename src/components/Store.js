import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css"


function Store() {

useEffect(() => {
Aos.init({duration: 2000});
}, []);


  //Displaying card packs
  return (
    <Fragment>


<div className=" grid">
<div data-aos = "flip-up" className="box">
  
<h1> Choosing Packs</h1>
</div>

</div>



<div className="grids">
  <div 
  
  
  data-aos = "flip-right" className="boxes">
       <Link to="/pack2">
    <img
              src="https://asset-preview.nbatopshot.com/packs/rare/pack_2_2021_all_star_game_rare.png"
              width="10%"
              className="card-img-top"
              alt="..."
              />
                 </Link>
               <h5 className="card-title">ALL STAR RARE PACK</h5>
              
  </div>

   <div data-aos = "flip-up" className="boxes">
   <Link to="/pack3">
   <img
              src="https://assets.nbatopshot.com/packs/legendary/pack_1_2020_nba_finals_legendary.png"
              width="10%"
              className="card-img-top"
              alt="..."
            />
           
              <h5 className="card-title">RETRO LEGENDARY PACK</h5>
</Link>
     </div>
   
   <div  data-aos = "flip-left"className="boxes">
   <Link to="/pack1">
   <img
              src="https://asset-preview.nbatopshot.com/packs/common/pack_1_got_game_common.png"
              width="10%"
              className="card-img-top"
              alt="..."
            />
             <h5 className="card-title">COMMON PACK</h5>
             </Link>
     </div>
</div>







{/* 







      <div className="d-flex justify-content-around mt-5">
        <div className=" image">
        <Link to="/pack1">
          <div className="card text-white bg-dark mb-3">
            <img
              src="https://asset-preview.nbatopshot.com/packs/rare/pack_2_2021_all_star_game_rare.png"
              width="10%"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">ALL STAR RARE PACK</h5>
            </div>
          </div>
        </div>

        <Link to="/pack2">
          <div className="card text-white bg-dark mb-3">
            <img
              src="https://assets.nbatopshot.com/packs/legendary/pack_1_2020_nba_finals_legendary.png"
              width="10%"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">RETRO LEGENDARY PACK</h5>
            </div>
          </div>
        </div>

        <Link to="/pack3">
          <div className="card text-white bg-dark mb-3">
            <img
              src="https://asset-preview.nbatopshot.com/packs/common/pack_1_got_game_common.png"
              width="10%"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">COMMON PACK</h5>
            </div>
          </div>
        </div>
      </div>
      </div> */}
    </Fragment>
  );
}
export default Store;
