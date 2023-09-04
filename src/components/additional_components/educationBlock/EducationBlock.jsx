const EducationBlock = ({
  headersParagraph,
  studyingDates,
  certificateLink,
  websiteLink,
}) => {
  return (
    <div className="education_block">
      <div className="education_block__content">
        <div className="education_block__content-header">
          {headersParagraph.map((paragraph) => (
            <p key={paragraph} className="education_block__header-paragraph">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="education_block__content-dates">
          <p className="education_block___dates-paragraph">
            Years of studying:
          </p>
          <p className="education_block___dates-paragraph">{studyingDates}</p>
        </div>
      </div>
      {certificateLink && websiteLink && (
        <div className="education_block__link-container">
          <a href={certificateLink} className="education_block__link">
            Certificate
          </a>
          <a href={websiteLink} className="education_block__link">
            Website
          </a>
        </div>
      )}
    </div>
  );
};

export default EducationBlock;
