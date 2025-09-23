import { memo } from "react";
import { EDUCATION_SECTION_CONTENT } from "../../../../constants/content";
import EducationBlock from "../../educationBlock/EducationBlock";

/**
 * A React component that renders the education section content.
 * Maps education data to EducationBlock components.
 * @returns {JSX.Element} The education section content
 */
const EducationSectionContent = () => {
  return (
    <div className="content" role="region" aria-label="Education section">
      {EDUCATION_SECTION_CONTENT.map((blockContent) => (
        <EducationBlock
          key={blockContent.id}
          headersParagraph={blockContent.headers}
          studyingDates={blockContent.studyingDates}
          certificateLink={blockContent.certificateLink}
          websiteLink={blockContent.websiteLink}
        />
      ))}
    </div>
  );
};

export default memo(EducationSectionContent);
