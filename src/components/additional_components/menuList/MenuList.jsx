import { memo } from "react";
import MobileMenuCloseButton from "../mobileMenuCloseButton";
import Link from "../scrollLink";
import { MENU_ITEMS } from "../../../constants/content";

/**
 * A React component that renders a list of navigation menu items.
 * Supports both desktop and mobile menus, with an optional close button for mobile.
 * @param {Object} props - Component props
 * @param {Function} [props.additionalClickEvent] - Optional click handler for menu items
 * @returns {JSX.Element} The menu list
 */
const MenuList = ({ additionalClickEvent }) => {
  return (
    <ul role="menubar" aria-label="Navigation menu items">
      <li className="mobile_menu-close_button">
        <MobileMenuCloseButton onClickEvent={additionalClickEvent} />
      </li>
      {MENU_ITEMS.map((item) => (
        <li key={item.key} role="none">
          <Link
            additionalClickEvent={additionalClickEvent}
            toId={item.linkId}
            className="menu_link"
            ariaLabel={item.ariaLabel}
          >
            {item.linkText}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default memo(MenuList);
