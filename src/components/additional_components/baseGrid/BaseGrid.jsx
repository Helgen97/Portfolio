import ContentTitle from "../contentTitle";

const BaseGrid = ({ sectionBlockNumber, sectionBlockTitle, children }) => {
  return (
    <div className="base_grid">
      <div className="content_grid_container title_container">
        <ContentTitle
          sectionBlockNumber={sectionBlockNumber}
          sectionBlockTitle={sectionBlockTitle}
        />
      </div>
      <div className="content_grid_container content_container">{children}</div>
      <div className="base_grid_left_background"></div>
      <div className="base_grid_right_background"></div>
    </div>
  );
};

export default BaseGrid;
