import NavBarClasses from "./NavBar.module.css";
import NavBarLink from "./NavBarLink/NavBarLink";
import logoNews from "./NavBarLink/Icons/News.png";
import logoMessages from "./NavBarLink/Icons/Messages.png";
import logoMusic from "./NavBarLink/Icons/Music.png";
import logoProfile from "./NavBarLink/Icons/Profile.png";
import logoSettings from "./NavBarLink/Icons/Settings.png";

const NavBar = () => {
  return (
    <nav className={NavBarClasses.nav}>
      <div className={NavBarClasses.linksWrapper}>
        <NavBarLink to="/news" name="Новости" image={logoNews} />
        <NavBarLink to="/messages" name="Сообщения" image={logoMessages} />
        <NavBarLink to="/music" name="Музыка" image={logoMusic} />
        <NavBarLink to="/profile" name="Профиль" image={logoProfile} />
        <NavBarLink to="/settings" name="Настройки" image={logoSettings} />
      </div>
    </nav>
  );
};

export default NavBar;
