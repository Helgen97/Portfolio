import SkillGroupList from "../skillGroupList";

const SkillsGroup = ({ skillGroupTitle, subGroups}) => {

  return (
    <div className="skills_group">
      <h2 className="skills_group__title">{skillGroupTitle}</h2>
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

export default SkillsGroup;
