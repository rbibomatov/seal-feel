import styles from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/auth.reducer";
import { NavLink } from "react-router-dom";
import logo from "./../../images/Header/FullLogo.png";
import logoutIcon from "./../../images/Header/LogoutIcon.png";

const Header = (props) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const showAuthData = (isAuth) => {
    let userInfo = (
      <div className={styles.profileBar}>
        <NavLink to={`/profile/${auth.currentUser.id}`}>
          <div className={styles.profileBar}>
            <img
              className={styles.userPhoto}
              src={auth.currentUser.photo}
              alt="Аватар пользователя"
            />
            <div className={styles.userName}>{auth.currentUser.login}</div>
          </div>
        </NavLink>
        <div className={styles.logoutBar}>
          <button
            className={styles.logoutButton}
            onClick={() => dispatch(logout())}
          >
            <img
              className={styles.logoutIcon}
              src={logoutIcon}
              alt="Аватар пользователя"
            />
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
