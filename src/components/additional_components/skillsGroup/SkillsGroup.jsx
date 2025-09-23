import { memo } from "react";
import SkillGroupList from "../skillGroupList";

/**
 * A React component that renders a group of skills with a title and multiple subgroups.
 * Each subgroup contains a title and a list of skills.
 * @param {Object} props - Component props
 * @param {string} props.skillGroupTitle - The title of the skill group
 * @param {Object[]} props.subGroups - Array of subgroup objects
 * @param {string} props.subGroups[].id - Unique identifier for the subgroup
 * @param {string} props.subGroups[].title - Title of the subgroup
 * @param {string[]} props.subGroups[].skillList - List of skills in the subgroup
 * @returns {JSX.Element} The skills group
 */
const SkillsGroup = ({ skillGroupTitle, subGroups }) => {
  return (
    <div
      className="skills_group"
      role="group"
      aria-labelledby={`${skillGroupTitle}-title`}
    >
      <h2 className="skills_group__title" id={`${skillGroupTitle}-title`}>
        {skillGroupTitle}
      </h2>
      {subGroups.map((group) => (
        <SkillGroupList
          key={group.id}
          subGroupTitle={group.title}
          skillList={group.skillList}
        />
      ))}
    </div>
  );
};

export default memo(SkillsGroup);
