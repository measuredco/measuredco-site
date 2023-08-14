import React from "react";

const HeaderMenu = ({ links = [] }) => (
  <div className="msrd-HeaderMenu" id="msrd-menu">
    <ul className="msrd-Header-navItems">
      {links.map(({ href, label }) => (
        <li>
          <a className="msrd-Header-link" href={href}>
            {label}
          </a>
        </li>
      ))}
      <li>
        <a className="msrd-Header-callToAction" href="#contact">
          Get in touch
        </a>
      </li>
    </ul>
  </div>
);

export default HeaderMenu;
