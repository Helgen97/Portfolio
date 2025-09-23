import { memo } from "react";

/**
 * A React component that renders a project card with title, description, technologies, and optional links.
 * Links include live demo, source code, and Figma design, if provided.
 * @param {Object} props - Component props
 * @param {string} props.projectTitle - The title of the project
 * @param {string} props.projectDescription - The description of the project
 * @param {string} props.projectTechnologies - Technologies used in the project
 * @param {string} [props.liveLink] - URL for the live demo
 * @param {string} [props.sourceCodeLink] - URL for the source code
 * @param {string} [props.figmaLink] - URL for the Figma design
 * @returns {JSX.Element} The project card
 */
const ProjectBlock = ({
  projectTitle,
  projectDescription,
  projectTechnologies,
  liveLink,
  sourceCodeLink,
  figmaLink,
}) => {
  return (
    <div
      className="project-box"
      role="article"
      aria-labelledby={`${projectTitle}-title`}
    >
      <p className="project-box__title" id={`${projectTitle}-title`}>
        {projectTitle}
      </p>
      <p className="project-box__description">{projectDescription}</p>
      <p className="project-box__technologies">
        <span className="desc">Technology Stack: </span>
        {projectTechnologies}
      </p>
      <div
        className="project-box__links"
        role="navigation"
        aria-label="Project links"
      >
        {liveLink && (
          <a
            href={liveLink}
            className="project-box__link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View live demo of ${projectTitle}`}
          >
            Live
          </a>
        )}
        {sourceCodeLink && (
          <a
            href={sourceCodeLink}
            className="project-box__link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View source code of ${projectTitle}`}
          >
            Source code
          </a>
        )}
        {figmaLink && (
          <a
            href={figmaLink}
            className="project-box__link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View Figma design of ${projectTitle}`}
          >
            Figma design
          </a>
        )}
      </div>
    </div>
  );
};

export default memo(ProjectBlock);
