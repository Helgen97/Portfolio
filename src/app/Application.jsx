import Header from "../components/main_components/header";
import MainSection from "../components/main_components/mainSection";
import HelpButtons from "../components/additional_components/helpButtons";
import SectionsList from "../components/main_components/sectionsList";
import Footer from "../components/main_components/footer";
import ObserverBlock from "../components/additional_components/observerBlock";
import { useState, useCallback } from "react";

/**
 * The main entry point for the portfolio website, orchestrating the rendering of
 * the header, main section, dynamic sections, help buttons, and footer.
 * Manages the visibility state of help buttons using IntersectionObserver-based callbacks.
 * @returns {JSX.Element} The rendered application structure
 */
const App = () => {
  // State to control the visibility of help buttons (e.g., scroll-to-top)
  const [isHelpButtonsShowed, setIsHelpButtonsShowed] = useState(false);

  /**
   * Memoized callback to hide help buttons when the top of the page is reached
   * @type {() => void}
   */
  const hideHelpButtons = useCallback(() => setIsHelpButtonsShowed(false), []);

  /**
   * Memoized callback to show help buttons when scrolling past a certain point
   * @type {() => void}
   */
  const showHelpButtons = useCallback(() => setIsHelpButtonsShowed(true), []);

  return (
    <>
      <Header />
      {/* Hide help buttons when at the top of the page */}
      <ObserverBlock callback={hideHelpButtons} />
      <MainSection />
      <HelpButtons isShowed={isHelpButtonsShowed} />
      <SectionsList />
      {/* Show help buttons when scrolling to the bottom */}
      <ObserverBlock callback={showHelpButtons} />
      <Footer />
    </>
  );
};

export default App;
