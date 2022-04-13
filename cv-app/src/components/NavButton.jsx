import { NavLink } from "react-router-dom";
import "./NavButton.css";


export const NavButton = (props) => {
  return (
    <NavLink
      className="nav-button"
      // activeClassName="nav-button--active"
      to={props.path}
      >
        {props.label}
    </NavLink>
  );
};