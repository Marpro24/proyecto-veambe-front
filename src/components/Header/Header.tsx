import { Link } from "react-router-dom";
import HeaderStyled from "./HeaderStyled";

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
    </HeaderStyled>
  );
};

export default Header;
