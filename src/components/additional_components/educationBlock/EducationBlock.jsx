import { memo } from "react";

/**
 * A React component that renders an education block with headers, study dates, and optional links.
 * Displays educational background with certificate and website links if provided.
 * @param {Object} props - Component props
 * @param {string[]} props.headersParagraph - Array of header paragraphs
 * @param {string} props.studyingDates - Study duration text
 * @param {string} [props.certificateLink] - URL for the certificate
 * @param {string} [props.websiteLink] - URL for the institution's website
 * @returns {JSX.Element} The education block
 */
const EducationBlock = ({
  headersParagraph,
  studyingDates,
  certificateLink,
  websiteLink,
}) => {
  return (
    <div
      className="education_block"
      role="article" 
      aria-label="Education details" 
    >
      <div className="education_block__content">
        <div className="education_block__content-header">
          {headersParagraph.map((paragraph, index) => (
            <p
              key={`header-${index}`}
              className="education_block__header-paragraph"
              aria-label={`Education header ${index + 1}`}
            >
              {paragraph}
            </p>
          ))}
        </div>
        <div className="education_block__content-dates">
          <p className="education_block___dates-paragraph">
            Years of studying:
          </p>
          <p className="education_block___dates-paragraph">{studyingDates}</p>
        </div>
      </div>
      {certificateLink && websiteLink && (
        <div
          className="education_block__link-container"
          role="navigation"
          aria-label="Education links"
        >
          <a
            href={certificateLink}
            className="education_block__link"
            target="_blank"
            rel="noopener noreferrer" 
            aria-label="View certificate"
          >
            Certificate
          </a>
          <a
            href={websiteLink}
            className="education_block__link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit institution website"
          >
            Website
          </a>
        </div>
      )}
    </div>
  );
};

export default memo(EducationBlock);
