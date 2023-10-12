import classNames from "classnames";
import React from "react";

const HeaderMenu = ({
  links = [],
  menuOpen = false,
  setMenuOpen,
}: {
  links: { current: boolean; href: string; label: string }[];
  menuOpen: boolean;
  setMenuOpen: any;
}) => (
  <div
    className={classNames({
      "msrd-HeaderMenu": true,
      "msrd-HeaderMenu--open": menuOpen,
    })}
    onClick={(event) => {
      const element = event.target as HTMLElement;

      if (window.matchMedia("(min-width: 48em)").matches) {
        return;
      }
      if (element.tagName === "A") {
        setMenuOpen(!menuOpen);
      }
    }}
  >
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
