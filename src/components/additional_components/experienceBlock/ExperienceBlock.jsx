import { memo } from "react";

/**
 * A React component that renders an experience block with header and content paragraphs.
 * Displays professional experience details in a structured format.
 * @param {Object} props - Component props
 * @param {string[]} props.headerParagraphs - Array of header paragraphs
 * @param {string[]} props.contentParagraphs - Array of content paragraphs
 * @returns {JSX.Element} The experience block
 */
const ExperienceBlock = ({ headerParagraphs, contentParagraphs }) => {
  return (
    <div
      className="experience_block"
      role="article" 
      aria-label="Experience details" 
    >
      <div className="experience_header">
        {headerParagraphs.map((paragraph, index) => (
          <p
            key={`header-${index}`}
            className="experience_header__paragraph"
            aria-label={`Experience header ${index + 1}`}
          >
            {paragraph}
          </p>
        ))}
      </div>
      <div
        className="experience_content"
        role="list"
        aria-label="Experience details list"
      >
        {contentParagraphs.map((paragraph, index) => (
          <p
            key={`content-${index}`}
            className="experience_content__item"
            role="listitem"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default memo(ExperienceBlock);
