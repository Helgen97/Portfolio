import { memo, useEffect, useRef } from "react";
import ContentTitle from "../contentTitle";

/**
 * A React component that renders a base grid layout for sections in the portfolio website.
 * Structures the section with a title container, content container, and decorative background elements.
 * @param {Object} props - Component props
 * @param {number} props.sectionBlockNumber - Section order number for display
 * @param {string} props.sectionBlockTitle - Section title text
 * @param {React.ReactNode} props.children - Content to render in the section
 * @returns {JSX.Element} The base grid layout
 */
const BaseGrid = ({ sectionBlockNumber, sectionBlockTitle, children }) => {
  const leftBackgroundRef = useRef(null);
  const rightBackgroundRef = useRef(null);
  const contentContainerRef = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    const updateBackgroundSize = () => {
      if (
        leftBackgroundRef.current &&
        rightBackgroundRef.current &&
        contentContainerRef.current &&
        backgroundRef.current
      ) {
        const contentEl = contentContainerRef.current.querySelector(".content");
        if (!contentEl) return;

        const leftWidth = leftBackgroundRef.current.offsetWidth;
        const rightWidth = rightBackgroundRef.current.offsetWidth;
        const contentWidth = contentEl.offsetWidth;
        const contentHeight = contentEl.offsetHeight;

        const totalWidth = leftWidth + contentWidth + rightWidth;

        if (leftWidth === 0) {
          backgroundRef.current.style.left = `${
            contentEl.getBoundingClientRect().x
          }px`;
        }

        backgroundRef.current.style.width = `${totalWidth}px`;
        backgroundRef.current.style.height = `${contentHeight}px`;
      }
    };

    updateBackgroundSize();

    const observer = new ResizeObserver(updateBackgroundSize);
    if (contentContainerRef.current) {
      observer.observe(contentContainerRef.current);
    }

    window.addEventListener("resize", updateBackgroundSize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateBackgroundSize);
    };
  }, [children]);

  return (
    <div className="base_grid">
      <div
        className="content_grid_container title_container"
        role="banner"
        aria-labelledby={`${sectionBlockTitle}-title`}
      >
        <ContentTitle
          sectionBlockNumber={sectionBlockNumber}
          sectionBlockTitle={sectionBlockTitle}
        />
      </div>
      <div className="content_grid_background" ref={backgroundRef}></div>
      <div
        className="content_grid_container content_container"
        role="main"
        aria-labelledby={`${sectionBlockTitle}-content`}
        ref={contentContainerRef}
      >
        {children}
      </div>
      <div className="base_grid_left_background" ref={leftBackgroundRef}></div>
      <div
        className="base_grid_right_background"
        ref={rightBackgroundRef}
      ></div>
    </div>
  );
};

export default memo(BaseGrid);
