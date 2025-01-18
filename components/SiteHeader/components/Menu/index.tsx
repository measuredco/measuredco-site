import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SiteHeaderMenu = ({
  links = [],
  menuOpen = false,
  setMenuOpen,
}: {
  homepage: boolean;
  links: { current: boolean; href: string; label: string }[];
  menuOpen: boolean;
  setMenuOpen: any;
}) => {
  const pathname = usePathname();

  return (
    <div
      className={classNames({
        "msrd-SiteHeaderMenu": true,
        "msrd-SiteHeaderMenu--open": menuOpen,
      })}
      onClick={(event) => {
        let element = event.target as HTMLElement;

        if (window.matchMedia("(min-width: 48em)").matches) {
          return;
        }

        while (element && element.tagName !== "A") {
          element = element.parentElement as HTMLElement;
        }

        if (element && element.getAttribute("href") === pathname) {
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
              <span className="msrd-SiteHeader-linkText">{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SiteHeaderMenu;
