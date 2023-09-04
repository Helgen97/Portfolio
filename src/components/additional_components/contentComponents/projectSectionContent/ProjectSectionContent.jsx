import { PROJECT_SECTION_CONTENT } from "../../../../constants/content";
import ProjectBlock from "../../projectBlock/ProjectBlock";

const ProjectSectionContent = () => {
  return (
    <div className="content">
      {PROJECT_SECTION_CONTENT.map((project) => (
        <ProjectBlock
          key={project.projectTitle}
          projectTitle={project.projectTitle}
          projectDescription={project.projectDescription}
          projectTechnologies={project.projectTechnologies}
          liveLink={project.liveLink}
          sourceCodeLink={project.sourceCode}
          figmaLink={project.figmaLink}
        />
      ))}
    </div>
  );
};

export default ProjectSectionContent;
