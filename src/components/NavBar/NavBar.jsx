import styles from "./NavBar.module.css";
import NavBarLink from "./NavBarLink/NavBarLink";

import logoProfile from "./../../images/NavBar/Profile.png";
import logoNews from "./../../images/NavBar/News.png";
import logoMessages from "./../../images/NavBar/Messages.png";
import logoUsers from "./../../images/NavBar/Users.png";
import logoSettings from "./../../images/NavBar/Settings.png";

const NavBar = (props) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.linksWrapper}>
        <NavBarLink
          to={"/profile/" + props.userId}
          name="Профиль"
          image={logoProfile}
        />
        <NavBarLink to="/news" name="Новости" image={logoNews} />
        <NavBarLink to="/messages" name="Сообщения" image={logoMessages} />
        <NavBarLink to="/users" name="Пользователи" image={logoUsers} />
        <NavBarLink to="/settings" name="Настройки" image={logoSettings} />
      </div>
    </nav>
  );
};

export default NavBar;
