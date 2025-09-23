import { memo } from "react";
import Link from "../scrollLink";
import ToTopButtonSvg from "../../svg/toTopButtonSvg";

/**
 * A React component that renders a scroll-to-top button with an upward arrow icon.
 * Uses a smooth-scrolling link to navigate to the top of the page.
 * @returns {JSX.Element} The scroll-to-top button container
 */
const ToTopButtonContainer = () => {
  return (
    <div
      className="toTopButton_container"
      role="navigation"
      aria-label="Scroll to top"
    >
      <Link
        toId="top"
        className="to_top_button"
        aria-label="Scroll to top of page"
      >
        <ToTopButtonSvg />
      </Link>
    </div>
  );
};

export default memo(ToTopButtonContainer);
