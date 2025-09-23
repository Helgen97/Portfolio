import { memo } from "react";
import { EXPERIENCE_SECTION_CONTENT } from "../../../../constants/content";
import ExperienceBlock from "../../experienceBlock";

/**
 * A React component that renders the experience section content.
 * Maps experience data to ExperienceBlock components.
 * @returns {JSX.Element} The experience section content
 */
const ExperienceSectionContent = () => {
  return (
    <div className="content" role="region" aria-label="Experience section">
      {EXPERIENCE_SECTION_CONTENT.map((blockContent) => (
        <ExperienceBlock
          key={blockContent.id}
          headerParagraphs={blockContent.headers}
          contentParagraphs={blockContent.content}
        />
      ))}
    </div>
  );
};

export default memo(ExperienceSectionContent);
