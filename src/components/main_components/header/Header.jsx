import HeaderLogo from "../../additional_components/headerLogo";
import DesktopMenu from "../../additional_components/desktopMenu";
import MobileMenu from "../../additional_components/mobileMenu/MobileMenu";

const Header = () => {
  return (
    <header>
      <HeaderLogo />
      <DesktopMenu />
      <MobileMenu />
    </header>
  );
};

export default Header;
