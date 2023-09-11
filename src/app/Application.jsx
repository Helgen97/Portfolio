import React from "react";
import Header from "../components/main_components/header";
import MainSection from "../components/main_components/mainSection";
import HelpButtons from "../components/additional_components/helpButtons";
import Section from "../components/main_components/section";
import { SECTIONS } from "../constants/sections";
import Footer from "../components/main_components/footer";

const App = () => {
  return (
    <>
      <Header />
      <MainSection />
      <HelpButtons />
      {SECTIONS.map((section) => {
        return (
          <Section
            key={section.sectionBlockNumber}
            sectionId={section.sectionId}
            sectionClass={section.sectionClass}
            sectionBlockNumber={section.sectionBlockNumber}
            sectionBlockTitle={section.sectionBlockTitle}
          >
            {<section.sectionContent />}
          </Section>
        );
      })}
      <Footer />
    </>
  );
};

export default App;
