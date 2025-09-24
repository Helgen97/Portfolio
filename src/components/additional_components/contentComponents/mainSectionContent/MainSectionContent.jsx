import { memo } from "react";
import { MAIN_SECTION_CONTENT } from "../../../../constants/content";

/**
 * A React component that renders the content of the main hero section of the portfolio website.
 * Displays the main header, profile image, additional header, and CV download link.
 * @returns {JSX.Element} The main section content
 */
const MainSectionContent = () => {
  return (
    <>
      <div className="main_header_container">
        <h1 id="main-header">{MAIN_SECTION_CONTENT.mainHeaderText}</h1>
      </div>
      <div className="cv_image_container">
        <img
          className="cv_image"
          src={MAIN_SECTION_CONTENT.imageLink}
          alt="Portrait of Dmytro Donchenko"
          aria-describedby="main-header"
        />
      </div>
      <div className="additional_header_container">
        <h2 id="additional-header">
          {MAIN_SECTION_CONTENT.additionalHeaderText}
        </h2>
      </div>
      <div className="download-btn-container">
        <a
          className="download-btn"
          href={MAIN_SECTION_CONTENT.cvLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download Dmytro Donchenko's CV (opens in new tab)"
        >
          Download CV
        </a>
      </div>
    </>
  );
};

export default memo(MainSectionContent);
