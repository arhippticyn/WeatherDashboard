import React from "react";

const Button = ({ style, text }) => {
  return (
    <button className="btn" style={style} type="button">{text}</button>
  )
}

export default Button;