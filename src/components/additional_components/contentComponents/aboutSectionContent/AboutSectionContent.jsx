import { ABOUT_SECTION_CONTENT } from "../../../../constants/content";

const AboutSectionContent = () => {
  return (
    <div className="content">
      {ABOUT_SECTION_CONTENT.map((item) => (
        <p key={item} className="paragraph_block">{item}</p>
      ))}
    </div>
  );
};

export default AboutSectionContent;
