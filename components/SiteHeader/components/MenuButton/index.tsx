import classNames from "classnames";

const SiteHeaderMenuButton = ({ menuOpen = false, setMenuOpen }) => (
  <button
    className={classNames({
      "msrd-SiteHeaderMenuButton": true,
      "msrd-SiteHeaderMenuButton--menuOpen": menuOpen,
    })}
    onClick={() => {
      return setMenuOpen(!menuOpen);
    }}
    type="button"
  >
    <span className="msrd-SiteHeaderMenuButton-box">
      <span className="msrd-SiteHeaderMenuButton-inner"></span>
      <span className="msrd-SiteHeaderMenuButton-text">Menu</span>
    </span>
  </button>
);

export default SiteHeaderMenuButton;
