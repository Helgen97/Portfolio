import { memo } from "react";
import MenuList from "../menuList/MenuList";

/**
 * A React component that renders the content of the mobile navigation menu.
 * Conditionally displays the menu based on visibility state and supports closing the menu on item click.
 * @param {Object} props - Component props
 * @param {boolean} props.isMenuShowed - Whether the mobile menu is visible
 * @param {Function} props.closeMenuFunction - Function to close the mobile menu
 * @returns {JSX.Element} The mobile menu content
 */
const MobileMenuContent = ({ isMenuShowed, closeMenuFunction }) => {
  return (
    <div
      className={
        isMenuShowed ? "mobile_menu_content showed" : "mobile_menu_content"
      }
      role="menu"
      aria-hidden={!isMenuShowed}
    >
      {isMenuShowed && <MenuList additionalClickEvent={closeMenuFunction} />}
    </div>
  );
};

export default memo(MobileMenuContent);
