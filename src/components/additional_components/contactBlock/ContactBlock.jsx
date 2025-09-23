import { memo } from "react";

/**
 * A React component that renders a contact information block.
 * Displays a label and either plain text or a clickable link based on provided props.
 * @param {Object} props - Component props
 * @param {string} props.label - The label for the contact information
 * @param {string} [props.link] - The URL for the contact link, if applicable
 * @param {string} props.linkText - The text to display for the contact information or link
 * @returns {JSX.Element} The contact block
 */
const ContactBlock = ({ label, link, linkText }) => {
  return (
    <div
      className="contact-box__container"
      role="listitem"
      aria-label={`${label} contact information`}
    >
      <p className="contact-box__label">{label}</p>
      <p className="contact-box__content">
        {/* Render plain text if no link, otherwise render a link */}
        {!link && linkText}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${label} at ${linkText}`}
          >
            {linkText}
          </a>
        )}
      </p>
    </div>
  );
};

export default memo(ContactBlock);
