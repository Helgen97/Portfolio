import { memo } from "react";

/**
 * A React component that renders the logo in the website header.
 * Displays the owner's name with an animation effect.
 * @returns {JSX.Element} The header logo element
 */
const HeaderLogo = () => {
  return (
    <div
      className="header_logo logo_animation"
      role="img"
      aria-label="Dmytro Donchenko logo"
    >
      Dmytro Donchenko
    </div>
  );
};

export default memo(HeaderLogo);
