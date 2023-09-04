import { SKILL_SECTION_CONTENT } from "../../../../constants/content";
import SkillsGroup from "../../skillsGroup/SkillsGroup";

const SkillSectionContent = () => {
  return (
    <div className="content">
      {SKILL_SECTION_CONTENT.map((blockContent) => (
        <SkillsGroup
          key={blockContent.id}
          skillGroupTitle={blockContent.title}
          subGroups={blockContent.subGroups}
        />
      ))}
    </div>
  );
};

export default SkillSectionContent;
