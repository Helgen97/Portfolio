import { memo } from "react";
import CloseButtonSvg from "../../svg/closeButtonSvg";

/**
 * A React component that renders a button to close the mobile navigation menu.
 * Displays a close icon (X shape) and triggers a provided click event.
 * @param {Object} props - Component props
 * @param {Function} [props.onClickEvent] - Click handler to close the menu
 * @returns {JSX.Element} The mobile menu close button
 */
const MobileMenuCloseButton = ({ onClickEvent }) => {
  return (
    <button
      onClick={onClickEvent}
      className="mobile_menu_close_button"
      aria-label="Close mobile navigation menu"
      title="Close mobile menu"
    >
      <CloseButtonSvg />
    </button>
  );
};

export default memo(MobileMenuCloseButton);
