import React from "react";

const Button = ({ style, text, onClick }) => {
  return (
    <button className={`btn ${style}`} type="button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;