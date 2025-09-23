import { memo } from "react";
import AboutMeBlock from "../../aboutMeBlock/AboutMeBlock";

/**
 * A React component that renders the about section content.
 * Wraps the AboutMeBlock component in a content container.
 * @returns {JSX.Element} The about section content
 */
const AboutSectionContent = () => {
  return (
    <div className="content" role="region" aria-label="About section">
      <AboutMeBlock />
    </div>
  );
};

export default memo(AboutSectionContent);
