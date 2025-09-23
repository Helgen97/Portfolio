import { memo } from "react";
import { SKILL_SECTION_CONTENT } from "../../../../constants/content";
import SkillsGroup from "../../skillsGroup/SkillsGroup";

/**
 * A React component that renders the skills section content.
 * Maps skill group data to SkillsGroup components.
 * @returns {JSX.Element} The skills section content
 */
const SkillSectionContent = () => {
  return (
    <div className="content" role="region" aria-label="Skills section">
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

export default memo(SkillSectionContent);
