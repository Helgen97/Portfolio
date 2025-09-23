import { memo } from "react";

/**
 * A React component that renders an SVG icon for a close button.
 * The icon depicts an 'X' shape, used to close navigation menus or modals.
 * @param {Object} props - Component props
 * @param {string|number} [props.width=35] - SVG width
 * @param {string|number} [props.height=35] - SVG height
 * @param {string} [props.stroke="white"] - Stroke color for the icon
 * @param {string} [props.ariaLabel="Close menu"] - ARIA label for accessibility
 * @returns {JSX.Element} The SVG icon for the close button
 */
const CloseButtonSvg = ({
  width = 35,
  height = 35,
  stroke = "white",
  ariaLabel = "Close menu",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={ariaLabel}
    >
      <path
        d="M26.25 26.25L17.5 17.5M17.5 17.5L8.75 8.75M17.5 17.5L26.25 8.75M17.5 17.5L8.75 26.25"
        stroke={stroke}
      />
    </svg>
  );
};

export default memo(CloseButtonSvg);
