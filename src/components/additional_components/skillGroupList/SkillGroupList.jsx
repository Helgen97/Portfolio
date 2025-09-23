import { memo } from "react";

/**
 * A React component that renders a subgroup of skills with an optional title and a list of skills.
 * Used within SkillsGroup to display individual skill categories.
 * @param {Object} props - Component props
 * @param {string} [props.subGroupTitle] - The title of the skill subgroup
 * @param {string[]} props.skillList - List of skills to display
 * @returns {JSX.Element} The skill subgroup list
 */
const SkillGroupList = ({ subGroupTitle, skillList }) => {
  return (
    <div
      className="skills_group__list-container"
      role="list"
      aria-label={subGroupTitle ? `${subGroupTitle} skills` : "Skills list"}
    >
      {subGroupTitle && (
        <h3
          className="skills_group__list-container__title"
          role="listitem"
          id={`${subGroupTitle}-subtitle`}
        >
          {subGroupTitle}
        </h3>
      )}
      {skillList.map((skill, index) => (
        <p
          key={`${subGroupTitle || "skills"}-${index}`}
          className="skills_group__list-container__item"
          role="listitem"
        >
          {skill}
        </p>
      ))}
    </div>
  );
};

export default memo(SkillGroupList);
