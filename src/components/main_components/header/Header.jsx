import { memo } from "react";
import HeaderLogo from "../../additional_components/headerLogo";
import DesktopMenu from "../../additional_components/desktopMenu";
import MobileMenu from "../../additional_components/mobileMenu/MobileMenu";

/**
 * A React component that renders the header of the portfolio website.
 * Includes a logo, mobile menu for small screens, and desktop menu for larger screens.
 * @returns {JSX.Element} The header element
 */
const Header = () => {
  return (
    <header id="top" role="banner" aria-label="Website header">
      <MobileMenu />
      <HeaderLogo />
      <DesktopMenu />
    </header>
  );
};

export default memo(Header);
