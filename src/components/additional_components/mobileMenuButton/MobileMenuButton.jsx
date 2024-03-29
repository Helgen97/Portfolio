import MenuButtonSvg from "../../svg/menuButtonSvg"

const MobileMenuButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="mobile_menu_button"
      alt="Open menu button"
      title="Open mobile menu button"
    >
      <MenuButtonSvg />
    </button>
  );
};

export default MobileMenuButton;
