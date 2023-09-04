const SkillGroupList = ({ subGroupTitle, skillList }) => {
  return (
    <div className="skills_group__list-container">
      {subGroupTitle && (
        <h3 className="skills_group__list-container__title">{subGroupTitle}</h3>
      )}
      {skillList.map((skill) => (
        <p key={skill} className="skills_group__list-container__item">
          {skill}
        </p>
      ))}
    </div>
  );
};

export default SkillGroupList;
