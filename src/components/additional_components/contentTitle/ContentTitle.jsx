import { memo } from "react";

/**
 * A React component that renders the title for a section, including a block number and description.
 * Used within BaseGrid to display section headers.
 * @param {Object} props - Component props
 * @param {number} props.sectionBlockNumber - Section order number
 * @param {string} props.sectionBlockTitle - Section title text
 * @returns {JSX.Element} The content title element
 */
const ContentTitle = ({ sectionBlockNumber, sectionBlockTitle }) => {
  return (
    <div
      className="content_title"
      id={`${sectionBlockTitle}-title`}
      role="heading"
      aria-level="2"
    >
      <div className="block_number">{sectionBlockNumber}</div>
      <div className="block_description">{sectionBlockTitle}</div>
    </div>
  );
};

export default memo(ContentTitle);
