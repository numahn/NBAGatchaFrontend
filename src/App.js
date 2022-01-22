import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Login from "./components/Login";

function App() {
  return (

   
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/"element={<Home></Home>}/>
        <Route path="/Login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>




  );
}

export default App;
