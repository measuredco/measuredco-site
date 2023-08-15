import React from "react";

import "./Button.css";

const Button = ({ label, href }) => (
  <a className="msrd-Button" href={href}>
    {label}
  </a>
);

export default Button;
