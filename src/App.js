import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Login from "./components/Login";
import Store from "./components/Store";
import Signup from "./components/Signup";
import Pack1 from "./components/Pack1";
import Pack2 from "./components/Pack2";
import Pack3 from "./components/Pack3";
//Animation
import "aos/dist/aos.css"
function App() {
  return (

   
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/"element={<Home></Home>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/store" element={<Store/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/pack1" element={<Pack1/>}/>
        <Route path="/pack2" element={<Pack2/>}/>
        <Route path="/pack3" element={<Pack3/>}/>
      </Routes>
    </BrowserRouter>




  );
}

export default App;