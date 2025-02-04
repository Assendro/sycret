import React from "react";
import "./button.scss";

const Button = ({ onClick, text = "Купить", disabled = true, type = 'button', className = 'button'}) => {
  return (
    <button
      className= {className}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;