import NavBarClasses from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={NavBarClasses.nav}>
      <div className={`${NavBarClasses.item} ${NavBarClasses.active}`}>
        Профиль
      </div>
      <div className={NavBarClasses.item}>Новости</div>
      <div className={NavBarClasses.item}>Музыка</div>
      <div className={NavBarClasses.item}>Сообщения</div>
      <div className={NavBarClasses.item}>Настройки</div>
    </nav>
  );
};

export default NavBar;
