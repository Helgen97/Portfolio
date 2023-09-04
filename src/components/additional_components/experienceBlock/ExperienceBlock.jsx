const ExperienceBlock = ({ headerParagraphs, contentParagraphs }) => {
  return (
    <div className="experience_block">
      <div className="experience_header">
        {headerParagraphs.map((paragraph) => (
          <p key={paragraph} className="experience_header__paragraph">
            {paragraph}
          </p>
        ))}
      </div>
      <div className="experience_content">
        {contentParagraphs.map((paragraph) => (
          <p key={paragraph} className="experience_content__item">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ExperienceBlock;
