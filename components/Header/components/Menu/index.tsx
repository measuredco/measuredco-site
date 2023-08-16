import React from "react";

const HeaderMenu = ({
  links = [],
}: {
  links: { href: string; label: string }[];
}) => (
  <div className="msrd-HeaderMenu" id="msrd-menu">
    <ul className="msrd-Header-navItems">
      {links.map(({ href, label }, idx) => (
        <li key={href + idx}>
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
