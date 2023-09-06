const MobileMenuCloseButton = ({ onClickEvent }) => {
  return (
    <button onClick={onClickEvent} alt="Close mobile menu button">
      <svg
        className="mobile_menu_close-svg"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Menu / Close_MD">
          <path
            id="Vector"
            d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </button>
  );
};

export default MobileMenuCloseButton;
