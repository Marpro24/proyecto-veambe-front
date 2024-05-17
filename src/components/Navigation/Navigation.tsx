import { NavLink } from "react-router-dom";
import NavigationStyled from "./NavigationStyled";

const Navigation = (): React.ReactElement => {
  return (
    <NavigationStyled>
      <ul className="navigation">
        <li className="navigation-links">
          <NavLink to="/home">portfolio</NavLink>
        </li>
        <li className="navigation-links">
          <NavLink to="/sobre-mi">sobre mí</NavLink>
        </li>
        <li className="navigation-links">
          <NavLink to="/contacto">contacto</NavLink>
        </li>
      </ul>
    </NavigationStyled>
  );
};

export default Navigation;
