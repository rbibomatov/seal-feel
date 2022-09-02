import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import logo from "./../../images/Header/FullLogo.png";

const Header = (props) => {
  let auth = props.auth;

  const showAuthData = (isAuth) => {
    let loginButton = (
      <NavLink className={styles.loginButton} to="/login">
        <span>Login</span>
      </NavLink>
    );

    let userInfo = (
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
    );

    return isAuth ? userInfo : loginButton;
  };

  return (
    <header className={styles.header}>
      <NavLink to="/news">
        <img className={styles.logo} src={logo} alt="Логотип Seal Feel" />
      </NavLink>
      {showAuthData(auth.isAuth)}
    </header>
  );
};

export default Header;
