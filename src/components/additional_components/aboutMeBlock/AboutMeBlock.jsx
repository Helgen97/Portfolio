import { memo } from "react";
import { ABOUT_SECTION_CONTENT } from "../../../constants/content";

/**
 * A React component that renders the "About Me" section content.
 * Displays a list of paragraphs from the ABOUT_SECTION_CONTENT array.
 * @returns {JSX.Element} The about me content block
 */
const AboutMeBlock = () => {
  return (
    <div className="about_block" role="article" aria-label="About me content">
      {ABOUT_SECTION_CONTENT.map((item, index) => (
        <p key={index} className="paragraph_block">
          {item}
        </p>
      ))}
    </div>
  );
};

export default memo(AboutMeBlock);
