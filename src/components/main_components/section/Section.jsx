import { memo } from "react";
import BaseGrid from "../../additional_components/baseGrid";

/**
 * A reusable React component for rendering a section of the portfolio website.
 * Wraps content in a BaseGrid component for consistent layout.
 * @param {Object} props - Component props
 * @param {string} props.sectionId - Unique ID for the section (used for navigation)
 * @param {string} props.sectionClass - CSS class for styling the section
 * @param {number} props.sectionBlockNumber - Section order number
 * @param {string} props.sectionBlockTitle - Section title
 * @param {React.ReactNode} props.children - Content to render inside the section
 * @returns {JSX.Element} The section element
 */
const Section = ({
  sectionId,
  sectionClass,
  sectionBlockNumber,
  sectionBlockTitle,
  children,
}) => {
  return (
    <section
      id={sectionId}
      className={sectionClass}
      role="group"
      aria-labelledby={`${sectionId}-title`}
    >
      <BaseGrid
        sectionBlockNumber={sectionBlockNumber}
        sectionBlockTitle={sectionBlockTitle}
      >
        {children}
      </BaseGrid>
    </section>
  );
};

export default memo(Section);
