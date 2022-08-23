import { NavLink } from "react-router-dom";
import logo from "./../../images/Header/FullLogo.png";
import styles from "./Header.module.css";
import defaultAvatar from "./../../images/Common/DefaultUserAvatar.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <NavLink to="/news">
        <img className={styles.logo} src={logo} alt="Логотип Seal Feel" />
      </NavLink>
      <NavLink to="/profile">
        <div className={styles.profileBar}>
          <img
            className={styles.userAvatar}
            src={defaultAvatar}
            alt="Аватар пользователя"
          />
          <div className={styles.userName}>rbibomatov</div>
        </div>
      </NavLink>
    </header>
  );
};

export default Header;
