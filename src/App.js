import React ,{ Fragment, useState, useEffect} from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Login from "./components/Login";
import Store from "./components/Store";
import Signup from "./components/Signup"
import Mycollection from "./components/Mycollection";
import 'bootstrap/dist/css/bootstrap.min.css';

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


    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/"element={<Home></Home>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/store" element={<Store/>}/>
         <Route path="/Signup" element={<Signup/>}/>
         <Route path="/Mycollection" element={<Mycollection/>}/>
      </Routes>
    </BrowserRouter>

   
  );
}

export default App;