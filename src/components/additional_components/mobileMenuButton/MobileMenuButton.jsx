import { memo } from "react";
import MenuButtonSvg from "../../svg/menuButtonSvg";

/**
 * A React component that renders a button to toggle the mobile menu.
 * Displays a hamburger menu icon.
 * @param {Object} props - Component props
 * @param {Function} [props.onClick] - Click handler to toggle the menu
 * @returns {JSX.Element} The mobile menu button
 */
const MobileMenuButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="mobile_menu_button"
      aria-label="Toggle mobile navigation menu"
      title="Toggle mobile menu"
      aria-controls="mobile-menu-content"
    >
      <MenuButtonSvg />
    </button>
  );
};

export default memo(MobileMenuButton);
