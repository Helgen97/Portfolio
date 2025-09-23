import { memo, useCallback, useState } from "react";
import { ClickAwayListener } from "@mui/base";
import MobileMenuButton from "../mobileMenuButton/MobileMenuButton";
import MobileMenuContent from "../mobileMenuContent/MobileMenuContent";

/**
 * A React component that renders a mobile navigation menu with toggle functionality.
 * Uses ClickAwayListener to close the menu when clicking outside.
 * @returns {JSX.Element} The mobile menu component
 */
const MobileMenu = () => {
  // State to control menu visibility
  const [isOpened, setOpened] = useState(false);

  /**
   * Closes the mobile menu
   */
  const closeMenu = useCallback(() => setOpened(false), []);

  /**
   * Toggles the mobile menu visibility
   */
  const toggleMenu = useCallback(() => setOpened(!isOpened), [isOpened]);

  return (
    <ClickAwayListener onClickAway={closeMenu}>
      <div
        className="mobile_menu"
        role="navigation"
        aria-label="Mobile navigation menu"
        aria-expanded={isOpened}
      >
        <MobileMenuButton onClick={toggleMenu} />
        <MobileMenuContent
          isMenuShowed={isOpened}
          closeMenuFunction={closeMenu}
        />
      </div>
    </ClickAwayListener>
  );
};

export default memo(MobileMenu);
