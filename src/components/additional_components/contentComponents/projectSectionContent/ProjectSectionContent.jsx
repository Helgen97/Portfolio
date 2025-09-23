import { memo } from "react";
import { PROJECT_SECTION_CONTENT } from "../../../../constants/content";
import ProjectBlock from "../../projectBlock/ProjectBlock";

/**
 * A React component that renders the projects section content.
 * Maps project data to ProjectBlock components.
 * @returns {JSX.Element} The projects section content
 */
const ProjectSectionContent = () => {
  return (
    <div className="content" role="region" aria-label="Projects section">
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

export default memo(ProjectSectionContent);
