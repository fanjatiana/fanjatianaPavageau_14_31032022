import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./containers/Footer";
import Header from "./containers/Header";
import Router from "./router/Router";
import "./styles/App.css";

function App() {
  return (
    <>
      <BrowserRouter>
      
        <Router />
   
      </BrowserRouter>
    </>
  );
}

export default App;
