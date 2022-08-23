import styles from "./NavBarLink.module.css";
import { NavLink } from "react-router-dom";

const setActive = ({ isActive }) => {
  let classes = styles.link;

  if (isActive) {
    classes += " " + styles.activeLink;
  }

  return classes;
};

const NavBarLink = (props) => {
  return (
    <div className={styles.linkWrapper}>
      <NavLink to={props.to} className={setActive}>
        <img className={styles.icon} src={props.image} alt="" />
        {props.name}
      </NavLink>
    </div>
  );
};

export default NavBarLink;
