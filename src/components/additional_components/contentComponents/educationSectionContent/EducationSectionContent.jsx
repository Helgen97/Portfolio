import { EDUCATION_SECTION_CONTENT } from "../../../../constants/content";
import EducationBlock from "../../educationBlock/EducationBlock";

const EducationSectionContent = () => {
  return (
    <div className="content">
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

export default EducationSectionContent;
