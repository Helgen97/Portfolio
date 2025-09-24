/**
 * Data configuration for a personal portfolio website.
 * Exports constants used to populate the UI dynamically with React components.
 * Includes section metadata, menu items, and content for main, about, experience,
 * education, skills, projects, and contacts sections.
 */

import { lazy } from "react";
import photo from "../images/me.jpg";

// Lazy-loaded section content components for improved performance
const AboutSectionContent = lazy(() =>
  import(
    "../components/additional_components/contentComponents/aboutSectionContent"
  )
);
const ContactsSectionContent = lazy(() =>
  import(
    "../components/additional_components/contentComponents/contactsSectionContent"
  )
);
const EducationSectionContent = lazy(() =>
  import(
    "../components/additional_components/contentComponents/educationSectionContent"
  )
);
const ExperienceSectionContent = lazy(() =>
  import(
    "../components/additional_components/contentComponents/experienceSectionContent"
  )
);
const ProjectSectionContent = lazy(() =>
  import(
    "../components/additional_components/contentComponents/projectSectionContent"
  )
);
const SkillSectionContent = lazy(() =>
  import(
    "../components/additional_components/contentComponents/skillSectionContent"
  )
);

// SECTIONS: Array of section configurations for the website
export const SECTIONS = [
  {
    key: "section-1",
    sectionId: "about",
    sectionClass: "about_section",
    sectionBlockNumber: 1,
    sectionBlockTitle: "About me",
    sectionContent: AboutSectionContent,
    ariaLabel: "About me section",
  },
  {
    key: "section-2",
    sectionId: "experience",
    sectionClass: "experience_section",
    sectionBlockNumber: 2,
    sectionBlockTitle: "Experience",
    sectionContent: ExperienceSectionContent,
    ariaLabel: "Experience section",
  },
  {
    key: "section-3",
    sectionId: "education",
    sectionClass: "education_section",
    sectionBlockNumber: 3,
    sectionBlockTitle: "Education",
    sectionContent: EducationSectionContent,
    ariaLabel: "Education section",
  },
  {
    key: "section-4",
    sectionId: "skills",
    sectionClass: "skills_section",
    sectionBlockNumber: 4,
    sectionBlockTitle: "Skills",
    sectionContent: SkillSectionContent,
    ariaLabel: "Skills section",
  },
  {
    key: "section-5",
    sectionId: "project",
    sectionClass: "projects_section",
    sectionBlockNumber: 5,
    sectionBlockTitle: "Projects",
    sectionContent: ProjectSectionContent,
    ariaLabel: "Projects section",
  },
  {
    key: "section-6",
    sectionId: "contacts",
    sectionClass: "contacts_section",
    sectionBlockNumber: 6,
    sectionBlockTitle: "Contacts",
    sectionContent: ContactsSectionContent,
    ariaLabel: "Contacts section",
  },
];

// MENU_ITEMS: Navigation menu items linked to sections
export const MENU_ITEMS = [
  {
    key: "menu-about",
    linkId: "about",
    linkText: "About me",
    ariaLabel: "Navigate to About me",
  },
  {
    key: "menu-experience",
    linkId: "experience",
    linkText: "Experience",
    ariaLabel: "Navigate to Experience",
  },
  {
    key: "menu-education",
    linkId: "education",
    linkText: "Education",
    ariaLabel: "Navigate to Education",
  },
  {
    key: "menu-skills",
    linkId: "skills",
    linkText: "Skills",
    ariaLabel: "Navigate to Skills",
  },
  {
    key: "menu-project",
    linkId: "project",
    linkText: "Projects",
    ariaLabel: "Navigate to Projects",
  },
  {
    key: "menu-contacts",
    linkId: "contacts",
    linkText: "Contacts",
    ariaLabel: "Navigate to Contacts",
  },
];

// MAIN_SECTION_CONTENT: Content for the main hero section
export const MAIN_SECTION_CONTENT = {
  mainHeaderText: "Dmytro Donchenko",
  imageLink: photo,
  additionalHeaderText: "Fullstack Developer",
  cvLink: "./files/cv.pdf",
};

// ABOUT_SECTION_CONTENT: Paragraphs for the About section
export const ABOUT_SECTION_CONTENT = [
  "Hi, Everyone!",
  "My name is Dmytro Donchenko, and I’m a passionate full-stack developer with a keen interest in technology and continuous learning. With professional experience and several freelance projects, I’ve grown from a beginner to a skilled developer.",
  "My passion for coding drives me to work on diverse projects, including corporate websites, landing pages, and real-time applications. I thrive on adopting new technologies and delivering simple, effective solutions.",
  "My expertise spans Java, JavaScript, SQL, Spring Framework, React.js, and more, complemented by strong communication and teamwork skills. I’m committed to leveraging my skills to create impactful software solutions.",
  "Outside of IT, I enjoy playing the guitar and diving into fictional and fantasy books.",
  "I’m eager to tackle new challenges, pursue growth opportunities in information technology, and collaborate with talented professionals to build innovative projects.",
];

// EXPERIENCE_SECTION_CONTENT: Work experience entries
export const EXPERIENCE_SECTION_CONTENT = [
  {
    id: 1,
    headers: [
      "Nov 2024 - Present",
      "Professional Services",
      "Pepperi",
      "Kyiv, Ukraine",
    ],
    content: [
      "- Gained expertise in the Pepperi B2B Platform, contributing to business logic implementation.",
      "- Strengthened JavaScript skills by developing scripts for custom business logic.",
      "- Enhanced SQL skills by writing efficient queries for data insertion and retrieval.",
      "- Designed UI forms using Kendo UI with custom styling to improve user experience.",
    ],
  },
  {
    id: 2,
    headers: [
      "Nov 2024 - Present",
      "Service Partner",
      "SD Solutions",
      "Kyiv, Ukraine",
    ],
    content: [
      "- Provided high-quality solutions as a Service Partner for Advantive, tailored to client-specific requirements.",
    ],
  },
  {
    id: 3,
    headers: [
      "Apr 2023 - Present",
      "Freelance Developer",
      "Freelance",
      "Kyiv, Ukraine",
    ],
    content: [
      "- Explored and adopted new technologies to stay current with IT industry trends.",
      "- Developed full-stack and single-page web applications to enhance technical skills.",
      "- Solved algorithmic challenges on HackerRank to improve problem-solving abilities.",
    ],
  },
  {
    id: 4,
    headers: [
      "Nov 2022 - Apr 2023",
      "Intern Full-Stack Developer",
      "ProfITSoft Internship",
      "Kyiv, Ukraine",
    ],
    content: [
      "- Improved knowledge of Java basics (Java Core, Java OOP, Spring Framework).",
      "- Learned Docker, MongoDB, Apache Kafka, Elasticsearch, and Kibana.",
      "- Gained experience with Spring Cloud and RabbitMQ.",
    ],
  },
  {
    id: 5,
    headers: [
      "May 2021 - Aug 2022",
      "Full-Stack Developer Student",
      "Prog.Academy",
      "Kyiv, Ukraine",
    ],
    content: [
      "- Learned Java basics (Java Core, Java OOP, Spring Framework).",
      "- Mastered front-end basics (HTML/CSS, JavaScript, React.js).",
      "- Created pet projects to apply learned concepts.",
    ],
  },
];

// EDUCATION_SECTION_CONTENT: Educational achievements
export const EDUCATION_SECTION_CONTENT = [
  {
    id: 1,
    headers: ["ProfITSoft Internship", "Intern Full-Stack Developer"],
    studyingDates: "November 2022 - April 2023",
    certificateLink:
      "https://drive.google.com/file/d/16tmXgtCtcRG95p8PYyR9Gr2daFmRUxQX/view",
    websiteLink: "https://profitsoft.dev/intern.php",
  },
  {
    id: 2,
    headers: ["Prog.Academy IT Course", "Full-Stack Developer Student"],
    studyingDates: "May 2021 - August 2022",
    certificateLink:
      "https://drive.google.com/file/d/14HfHBPv2cO0pM1_gj5Os-iOez8YO6Rli/view",
    websiteLink: "https://prog.academy",
  },
  {
    id: 3,
    headers: [
      "Kyiv National University of Trade and Economics",
      "Bachelor and Master’s Degree in Food Technology and Engineering",
    ],
    studyingDates: "September 2014 - December 2019",
    certificateLink: "",
    websiteLink: "",
  },
];

// SKILL_SECTION_CONTENT: Skills organized into categories
export const SKILL_SECTION_CONTENT = [
  {
    id: 1,
    title: "Hard skills",
    subGroups: [
      {
        id: 1.1,
        title: "Backend:",
        skillList: [
          "Java 8 - 16",
          "Spring Framework: Boot, IoC, MVC, Data, Security, Spring Cloud",
          "JDBC, JPA/Hibernate",
          "Servlets API, JSP, JSTL, Thymeleaf",
          "MySQL, PostgreSQL, SQL",
          "MongoDB",
          "Elasticsearch/Kibana",
          "Docker",
          "Maven 3",
          "RabbitMQ",
          "Apache Kafka",
          "Telegram Bots API",
          "Git, GitHub, Heroku",
        ],
      },
      {
        id: 1.2,
        title: "Frontend:",
        skillList: [
          "HTML5, CSS3, Bootstrap 5",
          "JavaScript ES5/ES6",
          "jQuery, React, Redux",
          "Gulp, WebPack",
          "SASS, LESS, Stylus",
          "Tailwind",
          "Material UI",
          "Kendo UI",
        ],
      },
      {
        id: 1.3,
        title: "Developer Tools:",
        skillList: ["Visual Studio Code", "IntelliJ IDEA"],
      },
    ],
  },
  {
    id: 2,
    title: "Soft skills",
    subGroups: [
      {
        id: 2.1,
        title: "",
        skillList: [
          "Social Skills",
          "Team Player",
          "Openness to Feedback",
          "Active Listening",
          "Growth Mindset",
        ],
      },
    ],
  },
];

// PROJECT_SECTION_CONTENT: Project details
export const PROJECT_SECTION_CONTENT = [
  {
    projectTitle: "Warfront Dominion",
    projectDescription:
      "Developing a real-time multiplayer strategy game where players build bases, manage resources, and control units to dominate the battlefield. Features a Java backend with Spring Boot, a Vite-powered React frontend, WebSocket for real-time communication, and Docker for deployment. Integrates MySQL and MongoDB for data management. Currently in development.",
    projectTechnologies:
      "Spring Boot, React, MySQL, MongoDB, WebSocket, Tailwind, Docker",
    liveLink: "",
    sourceCode: "",
    figmaLink: "",
    status: "In Progress",
  },
  {
    projectTitle: "Olena Bulakh Make Up School Website",
    projectDescription:
      "Commercial web application for a makeup school in Kyiv, featuring a React-based frontend and a Java backend. Hosted on a Virtual Dedicated Server (VDS) with a connected domain. Currently operational.",
    projectTechnologies: "React, Java, VDS Hosting",
    liveLink: "https://www.olena-bulakh-school.kiev.ua",
    sourceCode: "https://github.com/Helgen97/make_up_school",
    figmaLink:
      "https://www.figma.com/design/hSYyJf28w54TVnLDIhEMXq/Olena-Bulakh-Make-Up-School?node-id=0-1&t=llsxg2kR3KxcWq8E-1",
  },
  {
    projectTitle: "Filosof Barbershop Landing Site",
    projectDescription:
      "Commercial single-page React application for a barbershop in Kyiv. Hosted on GitHub Pages with a connected domain. Currently operational.",
    projectTechnologies: "React, HTML/CSS, Git, GitHub Pages",
    liveLink: "https://www.filosof.in.ua",
    sourceCode: "https://github.com/Helgen97/filosof",
    figmaLink:
      "https://www.figma.com/file/c8vNUgKltHbk5xvMafWDsA/Filosof?type=design&node-id=0%3A1&mode=design&t=NK4Gj4TA1xI9KGqr-1",
  },
  {
    projectTitle: "Ukrainian Greek Catholic Church Site",
    projectDescription:
      "Monolithic web application for the Ukrainian Greek Catholic Church (Donetsk Exarchate) using Spring Boot and Thymeleaf for dynamic page generation. Integrated MySQL for data management and used Git for version control. No live version available.",
    projectTechnologies: "Java, Spring Boot, MySQL, Thymeleaf, jQuery",
    liveLink: "",
    sourceCode: "https://github.com/Helgen97/ugcc-project",
    figmaLink:
      "https://www.figma.com/file/kUGD7LO3eaxmfG9BUlzEq3/Ukrainian-Greek-Catholic-Church?type=design&node-id=0%3A1&mode=design&t=5f5m7ucUDhlzAdYW-1",
  },
  {
    projectTitle: "Nice-Forum",
    projectDescription:
      "First full-stack project, a forum engine for communication and idea sharing. Built with Spring backend and React frontend for Prog.Academy final exam. Requires further improvements. No live version available.",
    projectTechnologies: "Java/Spring, React.js",
    liveLink: "",
    sourceCode: "https://github.com/Helgen97/Nice-Forum",
    figmaLink:
      "https://www.figma.com/file/9SN9dMWdPx9asYa6F0Hi6w/Nice-Forum?type=design&node-id=0%3A1&mode=design&t=6j9HtgvdN06CrmKY-1",
  },
];

// CONTACTS_SECTION_CONTENT: Contact methods
export const CONTACTS_SECTION_CONTENT = [
  {
    label: "Location:",
    link: "",
    linkText: "Ukraine, Kyiv",
  },
  {
    label: "Phone number:",
    link: "tel:+380939086907",
    linkText: "+380939086907",
  },
  {
    label: "Email:",
    link: "mailto:dmytro.donchenko97@gmail.com",
    linkText: "dmytro.donchenko97@gmail.com",
  },
  {
    label: "LinkedIn:",
    link: "https://www.linkedin.com/in/dmytrodonchenko/",
    linkText: "Dmytro Donchenko",
  },
  {
    label: "Github:",
    link: "https://github.com/Helgen97/",
    linkText: "Helgen97",
  },
  {
    label: "Telegram:",
    link: "https://t.me/Helgen97",
    linkText: "@Helgen97",
  },
];
