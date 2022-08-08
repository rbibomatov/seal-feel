import NavBarLinkClasses from "./NavBarLink.module.css";
import { NavLink } from "react-router-dom";

const setActive = ({ isActive }) => {
  let classes = NavBarLinkClasses.link;

  if (isActive) {
    classes += " " + NavBarLinkClasses.activeLink;
  }

  return classes;
};

const NavBarLink = (props) => {
  return (
    <div className={NavBarLinkClasses.linkWrapper}>
      <img className={NavBarLinkClasses.icon} src={props.image} alt="" />
      <NavLink to={props.to} className={setActive}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default NavBarLink;
