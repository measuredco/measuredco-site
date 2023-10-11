import classNames from "classnames";
import React from "react";

const HeaderMenu = ({
  links = [],
}: {
  links: { current: boolean; href: string; label: string }[];
}) => (
  <div className="msrd-HeaderMenu" id="msrd-menu">
    <ul className="msrd-Header-navItems">
      {links.map(({ current, href, label }, idx) => (
        <li key={href + idx}>
          <a
            className={classNames({
              "msrd-Header-link": true,
              "msrd-Header-link--current": current,
            })}
            href={href}
          >
            {label}
          </a>
        </li>
      ))}
      <li>
        <a className="msrd-Header-callToAction" href="/#contact">
          Get in touch
        </a>
      </li>
    </ul>
  </div>
);

export default HeaderMenu;
