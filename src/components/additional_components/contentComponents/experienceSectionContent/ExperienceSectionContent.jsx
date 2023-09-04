import { EXPERIENCE_SECTION_CONTENT } from "../../../../constants/content";
import ExperienceBlock from "../../experienceBlock";

const ExperienceSectionContent = () => {
  return (
    <div className="content">
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

export default ExperienceSectionContent;
