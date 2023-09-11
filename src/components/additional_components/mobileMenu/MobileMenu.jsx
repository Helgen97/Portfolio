import { ClickAwayListener } from "@mui/base";
import MobileMenuButton from "../mobileMenuButton/MobileMenuButton";
import { useState } from "react";
import MobileMenuContent from "../mobileMenuContent/MobileMenuContent";

const MobileMenu = () => {
  const [isOpened, setOpened] = useState(false);

  const closeMenu = () => {
    setOpened(false);
  };

  const toggleMenu = () => {
    setOpened(!isOpened);
  };

  return (
    <ClickAwayListener onClickAway={closeMenu}>
      <div className="mobile_menu" onClick={toggleMenu}>
        <MobileMenuButton />
        <MobileMenuContent
          isMenuShowed={isOpened}
          closeMenuFunction={closeMenu}
        />
      </div>
    </ClickAwayListener>
  );
};

export default MobileMenu;
