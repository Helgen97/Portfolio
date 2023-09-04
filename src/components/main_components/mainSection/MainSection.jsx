import MainSectionContent from "../../additional_components/contentComponents/mainSectionContent";


const MainSection = () => {
  return (
    <section className="main_section">
      <div className="base_grid">
        <div className="content_grid_container content_container">
          <MainSectionContent />
        </div>
      </div>
    </section>
  );
};

export default MainSection;
