import { memo } from "react";
import MainSectionContent from "../../additional_components/contentComponents/mainSectionContent";

/**
 * A React component that renders the main hero section of the portfolio website.
 * Contains introductory content wrapped in a base grid layout.
 * @returns {JSX.Element} The main section element
 */
const MainSection = () => {
  return (
    <section
      className="main_section"
      role="region"
      aria-label="Main hero section"
    >
      <div className="base_grid">
        <div className="content_grid_container content_container">
          <MainSectionContent />
        </div>
      </div>
    </section>
  );
};

export default memo(MainSection);
