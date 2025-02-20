import React from "react";
import "./Button.css";

const Button = ({ onClick, label, className }) => (
  <button onClick={onClick} className={`button ${className}`}>
    {label}
  </button>
);

export default Button;