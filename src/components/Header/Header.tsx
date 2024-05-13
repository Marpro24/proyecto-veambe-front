import { Link } from "react-router-dom";
import HeaderStyled from "./HeaderStyled";
import Navigation from "../Navigation/Navigation";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <Link to={"/home"}>
        <img
          className="header-logo"
          src="/public/images/logo-veambe.webp"
          alt="logo veambe"
          width="114"
          height="38"
        />
      </Link>
      <Navigation />
      <a
        className="insta-link"
        href="https://www.instagram.com/veambe/?hl=es"
        target="_blank"
      >
        instagram
      </a>
    </HeaderStyled>
  );
};

export default Header;
