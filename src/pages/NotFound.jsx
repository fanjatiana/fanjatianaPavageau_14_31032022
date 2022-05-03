import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/NotFound.css";


// error 404 page
const NotFound = () => {
  const navigate = useNavigate()
  return (
    <>
      <main className="main_404page">
        <div className="error">
          <div className="error_message">
            <h1>Error 404</h1>
            <p>Ooops page not found</p>
          </div>
          <div className="btn_back_home">
            <button aria-label='Back to the homepage' onClick={()=> navigate("/") }>
              Go Back
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound;
