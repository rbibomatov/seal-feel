import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import logo from "./../../images/Header/FullLogo.png";
import logoutIcon from "./../../images/Header/LogoutIcon.png";

const Header = (props) => {
  let auth = props.auth;

  const showAuthData = (isAuth) => {
    let userInfo = (
      <div className={styles.profileBar}>
        <NavLink to={`/profile/${auth.id}`}>
          <div className={styles.profileBar}>
            <img
              className={styles.userAvatar}
              src={auth.avatar}
              alt="Аватар пользователя"
            />
            <div className={styles.userName}>{auth.login}</div>
          </div>
        </NavLink>
        <div className={styles.logoutBar}>
          <img
            className={styles.logoutIcon}
            src={logoutIcon}
            alt="Аватар пользователя"
          />
          <button className={styles.logoutButton} onClick={props.logout}>
            Выйти
          </button>
        </div>
      </div>
    );

    return isAuth ? userInfo : null;
  };

  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt="Логотип Seal Feel" />
      {showAuthData(auth.isAuth)}
    </header>
  );
};

export default Header;
