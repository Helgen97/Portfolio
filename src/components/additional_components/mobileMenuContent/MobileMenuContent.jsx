import MenuList from "../menuList/MenuList";

const MobileMenuContent = ({ isMenuShowed, closeMenuFunction }) => {
  return (
    <div
      className={
        isMenuShowed ? "mobile_menu_content showed" : "mobile_menu_content"
      }
    >
      <MenuList additionalClickEvent={closeMenuFunction} />
    </div>
  );
};

export default MobileMenuContent;
