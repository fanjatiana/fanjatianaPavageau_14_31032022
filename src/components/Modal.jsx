import React from "react";

const Modal = ({ onClick }) => {
  return (
    <div
      style={{
        border: "1px #fff solid",
        background: "#035327",
        width: "300px",
        height: "100px",
        position: "absolute",
        top: "40%",
        zIndex: "1000",
        borderRadius: "15px",
      }}
    >
      <div
        className="modal_btn"
        style={{
          display: "flex",
          justifyContent: "end",
          margin: "1em 1em 0 0 ",
        }}
      >
        <button aria-label="Close" onClick={onClick}>
          X
        </button>
      </div>
      <div
        className="modal_message"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src="" alt="" />
        <p style={{ color: "#FFF" }}>Employee created !</p>
      </div>
    </div>
  );
};

export default Modal;
