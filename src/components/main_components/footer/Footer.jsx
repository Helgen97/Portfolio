import { memo } from "react";

/**
 * A React component that renders the footer of the portfolio website.
 * Displays a copyright notice with the current year and the owner's name.
 * @returns {JSX.Element} The footer element
 */
const Footer = () => {
  return (
    <footer role="contentinfo" aria-label="Website footer">
      <div className="footer_logo">
        &copy; {new Date().getFullYear().toString()} Dmytro Donchenko
      </div>
    </footer>
  );
};

export default memo(Footer);
