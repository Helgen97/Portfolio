import { memo } from "react";

/**
 * A React component that renders a loading spinner for use in Suspense fallbacks.
 * Displays a centered, animated loader with CSS-based styling.
 * @returns {JSX.Element} The loader component
 */
const Loader = () => {
  return (
    <div
      className="content loader_container"
      role="status"
      aria-label="Loading content"
    >
      <div className="loader" />
    </div>
  );
};

export default memo(Loader);
