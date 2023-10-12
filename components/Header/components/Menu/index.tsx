import classNames from "classnames";
import Link from "next/link";
import React from "react";

const HeaderMenu = ({
  homepage,
  links = [],
  menuOpen = false,
  setMenuOpen,
}: {
  homepage: boolean;
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
      if (
        element.tagName === "A" &&
        element.getAttribute("href").startsWith("#")
      ) {
        setMenuOpen(false);
      }
    }}
  >
    <ul className="msrd-Header-navItems">
      {links.map(({ current, href, label }, idx) => (
        <li key={href + idx}>
          <Link
            className={classNames({
              "msrd-Header-link": true,
              "msrd-Header-link--current": current,
            })}
            href={href}
          >
            {label}
          </Link>
        </li>
      ))}
      <li>
        <Link
          className="msrd-Header-callToAction"
          href={`${homepage ? "" : "/"}#contact`}
        >
          Get in touch
        </Link>
      </li>
    </ul>
  </div>
);

export default HeaderMenu;
