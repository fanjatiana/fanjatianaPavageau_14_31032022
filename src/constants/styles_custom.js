// package npm : modal custom
export const myStylesModal = {
  modalContainerBg: "rgba(0, 0, 0, 0.7)",
  bg: "#fff",
  width: "200px",
  height: "200px",
  radius: "5px",
  messageColor: "#000",
  messageFontSize: "1em",
  buttonColor: "#000",
  buttonBg: "#fff",
  buttonWidth: "30px",
  buttonHeight: "30px",
  buttonHoverColor: "#fff",
  buttonHoverBg: "#000",
};

// custom select placeholder (create employee form)
export const colourStyles = {
  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: "#000",
    };
  },
};
