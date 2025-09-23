import { memo } from "react";
import { Link as Scroll } from "react-scroll";

/**
 * A React component that renders a smooth-scrolling link using react-scroll.
 * Supports additional click events for closing mobile menus.
 * @param {Object} props - Component props
 * @param {string} props.toId - ID of the section to scroll to
 * @param {string} [props.className] - CSS class for styling
 * @param {string} [props.ariaLabel] - String value that labels the current element.
 * @param {React.ReactNode} props.children - Link text or content
 * @param {Function} [props.additionalClickEvent] - Optional additional click handler
 * @returns {JSX.Element} The scroll link
 */
const Link = ({
  toId,
  className,
  ariaLabel,
  children,
  additionalClickEvent,
}) => {
  /**
   * Handles click events, including the optional additional handler
   */
  const onClick = () => {
    additionalClickEvent?.();
  };

  return (
    <Scroll
      to={toId}
      onClick={onClick}
      className={className}
      smooth
      nofollow="true"
      role="menuitem"
      aria-label={ariaLabel}
    >
      {children}
    </Scroll>
  );
};

export default memo(Link);
