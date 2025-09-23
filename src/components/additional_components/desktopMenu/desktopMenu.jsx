import { memo } from "react";
import MenuList from "../menuList";

/**
 * A React component that renders the desktop navigation menu.
 * Contains a list of menu items for larger screens.
 * @returns {JSX.Element} The desktop menu component
 */
const DesktopMenu = () => {
  return (
    <div
      className="menu"
      role="navigation"
      aria-label="Desktop navigation menu"
    >
      <MenuList />
    </div>
  );
};

export default memo(DesktopMenu);
