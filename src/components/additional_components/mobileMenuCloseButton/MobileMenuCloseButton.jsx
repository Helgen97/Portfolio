import CloseButtonSvg from "../../svg/closeButtonSvg";

const MobileMenuCloseButton = ({ onClickEvent }) => {
  return (
    <button onClick={onClickEvent} alt="Close mobile menu button">
      <CloseButtonSvg />
    </button>
  );
};

export default MobileMenuCloseButton;
