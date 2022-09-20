import styles from "./NavBar.module.css";
import { useSelector } from "react-redux";
import NavBarLink from "./NavBarLink/NavBarLink";
import images from "./../../images/NavBar/Images";

const NavBar = (props) => {
  const сurrentUserId = useSelector((state) => state.auth.currentUser.id);

  return (
    <nav className={styles.nav}>
      <div className={styles.linksWrapper}>
        <NavBarLink
          to={"/profile/" + сurrentUserId}
          name="Профиль"
          image={images.logoProfile}
        />
        <NavBarLink to="/users" name="Пользователи" image={images.logoUsers} />
        <NavBarLink
          to="/messages"
          name="Сообщения"
          image={images.logoMessages}
        />
      </div>
    </nav>
  );
};

export default NavBar;
