import classNames from "classnames";
import Link from "next/link";

import SiteHeaderCallToAction from "../CallToAction";

const SiteHeaderMenu = ({
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
      "msrd-SiteHeaderMenu": true,
      "msrd-SiteHeaderMenu--open": menuOpen,
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
    <ul className="msrd-SiteHeader-navItems">
      {links.map(({ current, href, label }, idx) => (
        <li key={href + idx}>
          <Link
            className={classNames({
              "msrd-SiteHeader-link": true,
              "msrd-SiteHeader-link--current": current,
            })}
            href={href}
          >
            {label}
          </Link>
        </li>
      ))}
      <li>
        <SiteHeaderCallToAction />
      </li>
    </ul>
  </div>
);

export default SiteHeaderMenu;
