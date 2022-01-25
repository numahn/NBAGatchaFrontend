import React ,{ Fragment, useState, useEffect} from "react";
import "./App.css";
import Home from "./components/Home";

function App() {
// const [offsetY, setOffsetY] = useState(0);
// const handleScroll = () => setOffsetY(window.pageYOffset);

// useEffect(() => {
//   window.addEventListener("scroll" , handleScroll);

//   return() => window.removeEventListener("scroll", handleScroll);
// }, []);


// const renderContent = () => (
//   <>
  
//   <div className="Parallax__content__heading">
//         <h1 className="Parallax__content__heading__text">Closure</h1>
//         <h2 className="Parallax__content__heading__caption">
//           Your one-stop source of Web Development tricks
//         </h2>
//       </div>
//       <div className="Parallax__content__cta">
//         <p>
//           <b>1. Like the video.</b> Because it helps me and my channel
//         </p>
//         <p>
//           <b>2. Like the video.</b> To see more content like that!
//         </p>
//         <p>
//           <b>3. Follow the Github link.</b> And play with this code yourself!
//         </p>
//       </div>
//   </>
// );


  return (


    <>
    <Home></Home>
    </>

   
  );
}

export default App;