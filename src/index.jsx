import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store";
import Pack1 from "./components/Pack1";
import Pack2 from "./components/Pack2";
import Pack3 from "./components/Pack3";
import Store from "./components/Store";
import Mycollection from "./components/Mycollection";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ToastContainer style={{ padding: 0, width: "unset" }} />
          <Nav />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/store" element={<Store />} />
            <Route path="/pack1" element={<Pack1 />} />
            <Route path="/pack2" element={<Pack2 />} />
            <Route path="/pack3" element={<Pack3 />} />
            <Route path="/mycollection" element={<Mycollection />} />
          </Routes>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
