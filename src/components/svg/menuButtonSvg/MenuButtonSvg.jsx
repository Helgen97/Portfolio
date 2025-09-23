import { memo } from "react";

/**
 * A React component that renders an SVG icon for a menu button.
 * The icon depicts three horizontal lines (hamburger menu), used to toggle navigation menus.
 * @param {Object} props - Component props
 * @param {string|number} [props.width=35] - SVG width
 * @param {string|number} [props.height=35] - SVG height
 * @param {string} [props.fill="white"] - Fill color for the icon
 * @param {string} [props.ariaLabel="Toggle menu"] - ARIA label for accessibility
 * @returns {JSX.Element} The SVG icon for the menu button
 */
const MenuButtonSvg = ({
  width = 35,
  height = 35,
  fill = "white",
  ariaLabel = "Toggle menu",
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.1667 7.29166C29.9721 7.29166 30.625 7.94458 30.625 8.74999C30.625 9.5554 29.9721 10.2083 29.1667 10.2083H5.83333C5.0279 10.2083 4.375 9.5554 4.375 8.74999C4.375 7.94458 5.0279 7.29166 5.83333 7.29166H29.1667ZM24.7917 17.5C24.7917 16.6946 24.1387 16.0417 23.3333 16.0417H5.83333C5.0279 16.0417 4.375 16.6946 4.375 17.5C4.375 18.3054 5.0279 18.9583 5.83333 18.9583H23.3333C24.1387 18.9583 24.7917 18.3054 24.7917 17.5ZM16.0417 26.25C16.0417 25.4445 15.3888 24.7917 14.5833 24.7917H5.83333C5.0279 24.7917 4.375 25.4445 4.375 26.25C4.375 27.0554 5.0279 27.7083 5.83333 27.7083H14.5833C15.3888 27.7083 16.0417 27.0554 16.0417 26.25Z"
        fill={fill}
      />
    </svg>
  );
};

export default memo(MenuButtonSvg);
