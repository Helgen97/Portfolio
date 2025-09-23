import { memo, Suspense } from "react";
import Section from "../section/Section";
import { SECTIONS } from "../../../constants/content";
import Loader from "../../additional_components/loader";

/**
 * A React component that renders a list of sections dynamically based on SECTIONS data.
 * Each section is wrapped in a Suspense component with a Loader fallback for lazy-loaded content.
 * @returns {JSX.Element} A fragment containing all section components
 */
const SectionsList = () => (
  <>
    {SECTIONS.map((section) => (
      <Section
        key={section.key}
        sectionId={section.sectionId}
        sectionClass={section.sectionClass}
        sectionBlockNumber={section.sectionBlockNumber}
        sectionBlockTitle={section.sectionBlockTitle}
        aria-labelledby={section.ariaLabel}
      >
        <Suspense fallback={<Loader />}>
          {/* Render the lazy-loaded section content */}
          {<section.sectionContent />}
        </Suspense>
      </Section>
    ))}
  </>
);

export default memo(SectionsList); // Memoized to prevent unnecessary re-renders
