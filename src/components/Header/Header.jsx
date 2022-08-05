import logo from "./img/logo.png";
import headerClasses from "./Header.module.css";

const Header = () => {
  return (
    <header className={headerClasses.header}>
      <img className={headerClasses.logo} src={logo} alt="Логотип Seal Feel" />
    </header>
  );
};

export default Header;
