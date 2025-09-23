import { memo } from "react";
import ToTopButtonContainer from "../toTopButtonContainer";

/**
 * A React component that renders a container for help buttons, including a scroll-to-top button.
 * Conditionally shows or hides the container based on the isShowed prop.
 * @param {Object} props - Component props
 * @param {boolean} props.isShowed - Whether the help buttons container is visible
 * @returns {JSX.Element} The help buttons container
 */
const HelpButtons = ({ isShowed }) => {
  return (
    <div
      className={`help_buttons ${isShowed ? "showed" : ""}`}
      role="complementary"
      aria-hidden={!isShowed}
    >
      <ToTopButtonContainer />
    </div>
  );
};

export default memo(HelpButtons);
