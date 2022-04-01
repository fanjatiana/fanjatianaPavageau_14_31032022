import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./containers/Footer";
import Header from "./containers/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
