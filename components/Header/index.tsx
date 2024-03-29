"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

import Menu from "./components/Menu";
import MenuButton from "./components/MenuButton";
import "./Header.css";

const Header = ({
  links,
}: {
  links: { current: boolean; href: string; label: string }[];
}) => {
  let LogoElement: any = "div";
  const pathname = usePathname();
  const homepage = Boolean(pathname === "/" || pathname === "/edit");
  const [headerBorder, setHeaderBorder] = useState(!homepage);
  const [menuOpen, setMenuOpen] = useState(false);

  if (homepage) {
    LogoElement = "h1";
  }

  useEffect(() => {
    if (homepage === false) {
      return;
    }

    const toggleHeaderBorder = () => {
      if (window.scrollY >= 24) {
        setHeaderBorder(true);
        return;
      }
      setHeaderBorder(false);
    };

    toggleHeaderBorder();
    window.addEventListener("scroll", toggleHeaderBorder);

    return () => {
      window.removeEventListener("scroll", toggleHeaderBorder);
    };
  }, [homepage]);

  useEffect(() => {
    const body = document.body;

    if (menuOpen) {
      body.classList.add("msrd-u-overflowHidden");
    } else {
      body.classList.remove("msrd-u-overflowHidden");
    }
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(min-width: 48em)").matches) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className={classNames({
        "msrd-Header": true,
        "msrd-Header--border": headerBorder,
      })}
    >
      <div className="msrd-Header-inner">
        <LogoElement className="msrd-Header-logo">
          <Link className="msrd-Header-link" href="/">
            <svg
              aria-labelledby="measured"
              height="24"
              role="img"
              viewBox="0 0 1004 150"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title id="measured">Measured</title>
              <path
                d="m44.222 0 37.519 91.5h1.7L120.962 0h44.322v147.8h-34.818V57h-1.2l-35.518 89.9H71.536L36.018 56.5h-1.2v91.3H0V0h44.222Zm133.167 92.9c0-34.4 21.51-57.3 55.027-57.3 31.516 0 53.727 20.1 53.727 56.6v8.8h-73.937v.9c0 13.6 8.404 22.6 21.911 22.6 9.205 0 16.508-4 19.21-11.3l32.416.9c-4.002 21.8-23.212 35.9-52.326 35.9-34.818 0-56.028-21.6-56.028-57.1Zm75.938-12.4c-.1-11.3-8.505-19.4-20.11-19.4-11.706 0-20.41 8.4-20.91 19.4h41.02Zm39.62 36.6c0-24.5 18.809-32.8 41.22-34.7 18.91-1.7 26.313-3.1 26.313-9.9v-.4c0-7.4-5.502-11.6-14.107-11.6-9.304 0-15.207 4.3-16.708 11.4l-32.616-1.2c2.801-20.2 19.71-35.2 49.524-35.2 28.214 0 49.125 13.5 49.125 37v75.4H362.48v-15.4h-.9c-6.103 11.3-16.709 17.3-32.216 17.3-21.11 0-36.418-10.7-36.418-32.7Zm67.733-8.6V98c-4.002 2.1-12.106 3.5-18.609 4.5-10.005 1.5-15.708 5.8-15.708 13 0 7.4 5.803 11.3 13.907 11.3 11.306-.1 20.41-7.5 20.41-18.3Zm114.958-36.8c-1-7-7.504-12-16.809-12-8.204 0-14.707 3.5-14.707 9.1-.1 4.3 3.002 7.6 12.306 9.5l21.41 4c22.112 4.3 32.817 13.9 32.917 30-.1 22.8-21.71 37.6-51.425 37.6-31.716 0-50.526-14.1-53.127-36l34.918-.9c1.5 8.1 8.304 12.4 18.309 12.4 9.004 0 15.207-3.7 15.407-9.2-.1-4.9-4.302-7.8-13.506-9.6l-19.31-3.7c-22.211-4.1-33.117-15.1-32.916-32.1-.1-22.2 19.01-35.3 49.024-35.3 30.015 0 48.024 13.4 49.925 35.3l-32.416.9ZM593.497 37h35.317v110.9h-33.616v-20.6h-1.201c-4.902 13.6-17.309 22.1-33.917 22.1-22.811 0-38.019-16.6-38.119-41.7V37h35.318v63.7c.1 12.1 6.703 19.4 17.508 19.4 10.506 0 18.71-7.2 18.71-20.1V37Zm51.626 0h34.317v20.2h1.2c4.002-14.7 13.707-21.7 25.813-21.7 3.202 0 6.904.5 9.905 1.3v30.7c-3.402-1.2-9.705-1.9-13.907-1.9-12.606 0-22.01 8.9-22.01 22.1v60.2h-35.318V37Zm75.337 55.9c0-34.4 21.51-57.3 55.028-57.3 31.515 0 53.727 20.1 53.727 56.6v8.8h-73.937v.9c0 13.6 8.404 22.6 21.91 22.6 9.205 0 16.509-4 19.21-11.3l32.416.9c-4.002 21.8-23.211 35.9-52.326 35.9-34.817 0-56.028-21.6-56.028-57.1Zm75.938-12.4c-.1-11.3-8.504-19.4-20.11-19.4-11.706 0-20.41 8.4-20.91 19.4h41.02Zm41.021 12c0-39.1 21.01-57 44.222-57 17.508 0 27.113 10.3 31.315 20.4h.7V0h35.318v147.8h-34.917v-18h-1.1c-4.503 10.3-14.408 19.6-31.216 19.6-24.512.1-44.322-19.1-44.322-56.9Zm77.038-.1c0-18.1-7.504-29.3-20.41-29.3-13.107 0-20.41 11.5-20.41 29.3 0 17.9 7.303 29.5 20.41 29.5 12.806.1 20.41-11.5 20.41-29.5Zm51.926 38.8c-.1-10.3 8.404-18.6 18.81-18.6 9.904 0 18.609 8.3 18.809 18.6-.1 10.4-8.905 18.8-18.81 18.8-10.405 0-19.009-8.4-18.809-18.8Z"
                fill="currentColor"
              />
            </svg>
          </Link>
        </LogoElement>
        <nav>
          <MenuButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Menu
            homepage={homepage}
            links={links}
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
          />
        </nav>
      </div>
    </header>
  );
};

export default Header;
