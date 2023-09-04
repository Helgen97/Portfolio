const ContentTitle = ({ sectionBlockNumber, sectionBlockTitle }) => {
  return (
    <div className="content_title">
      <div className="block_number">{sectionBlockNumber}</div>
      <div className="block_description">{sectionBlockTitle}</div>
    </div>
  );
};

export default ContentTitle;
