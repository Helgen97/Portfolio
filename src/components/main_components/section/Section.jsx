import BaseGrid from "../../additional_components/baseGrid/BaseGrid";

const Section = ({
  sectionId,
  sectionClass,
  sectionBlockNumber,
  sectionBlockTitle,
  children
}) => {
  return (
    <section id={sectionId} className={sectionClass}>
      <BaseGrid
        sectionBlockNumber={sectionBlockNumber}
        sectionBlockTitle={sectionBlockTitle}
      >
        {children}
      </BaseGrid>
    </section>
  );
};

export default Section;
