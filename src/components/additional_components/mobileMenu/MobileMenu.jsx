import { ClickAwayListener } from "@mui/base";
import MobileMenuButton from "../mobileMenuButton/MobileMenuButton";
import MenuList from "../menuList/MenuList";
import { useState } from "react";

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
        <div
          className={
            isOpened ? "mobile_menu_content showed" : "mobile_menu_content"
          }
        >
          <MenuList additionalClickEvent={closeMenu} />
        </div>
      </div>
    </ClickAwayListener>
  );
};

export default MobileMenu;
