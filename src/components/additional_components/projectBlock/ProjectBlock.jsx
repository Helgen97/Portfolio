const ProjectBlock = ({
  projectTitle,
  projectDescription,
  projectTechnologies,
  liveLink,
  sourceCodeLink,
  figmaLink,
}) => {
  return (
    <div className="project-box">
      <p className="project-box__title">{projectTitle}</p>
      <p className="project-box__description">{projectDescription}</p>
      <p className="project-box__technologies">
        <span className="desc">Technology Stack: </span>
        {projectTechnologies}
      </p>
      <div className="project-box__links">
        {liveLink && (
          <a href={liveLink} className="project-box__link">
            Live
          </a>
        )}
        {sourceCodeLink && (
          <a href={sourceCodeLink} className="project-box__link">
            Source code
          </a>
        )}
        {figmaLink && (
          <a href={figmaLink} className="project-box__link">
            Figma design
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectBlock;
