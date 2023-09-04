import { MAIN_SECTION_CONTENT } from "../../../../constants/content";

const MainSectionContent = () => {
  return (
    <>
      <div className="main_header_container">
        <h1>{MAIN_SECTION_CONTENT.mainHeaderText}</h1>
      </div>
      <div className="cv_image_container">
        <img
          className="cv_image"
          src={MAIN_SECTION_CONTENT.imageLink}
          alt="My Photo"
        />
      </div>
      <div className="additional_header_container">
        <h2>{MAIN_SECTION_CONTENT.additionalHeaderText}</h2>
      </div>
      <div className="download-btn-container">
        <a className="download-btn" href={MAIN_SECTION_CONTENT.cvLink} target="_blank">
          Download CV
        </a>
      </div>
    </>
  );
};

export default MainSectionContent;
