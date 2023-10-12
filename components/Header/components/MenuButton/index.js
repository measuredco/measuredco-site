import React from "react";

const HeaderMenuButton = ({ menuOpen = false, setMenuOpen }) => (
  <button
    className="msrd-HeaderMenuButton"
    onClick={() => {
      return setMenuOpen(!menuOpen);
    }}
    type="button"
  >
    <span className="msrd-HeaderMenuButton-box">
      <span className="msrd-HeaderMenuButton-inner"></span>
      <span className="msrd-HeaderMenuButton-text">Menu</span>
    </span>
  </button>
);

export default HeaderMenuButton;
