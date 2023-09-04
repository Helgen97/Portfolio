import AboutSectionContent from "../components/additional_components/contentComponents/aboutSectionContent";
import ContactsSectionContent from "../components/additional_components/contentComponents/contactsSectionContent";
import EducationSectionContent from "../components/additional_components/contentComponents/educationSectionContent";
import ExperienceSectionContent from "../components/additional_components/contentComponents/experienceSectionContent";
import ProjectSectionContent from "../components/additional_components/contentComponents/projectSectionContent";
import SkillSectionContent from "../components/additional_components/contentComponents/skillSectionContent";

export const SECTIONS = [
    {
        sectionId: "about",
        sectionClass: "about_section",
        sectionBlockNumber: 1,
        sectionBlockTitle: "About me",
        sectionContent: AboutSectionContent,
    },
    {
        sectionId: "experience",
        sectionClass: "experience_section",
        sectionBlockNumber: 2,
        sectionBlockTitle: "Experience",
        sectionContent: ExperienceSectionContent,
    },
    {
        sectionId: "education",
        sectionClass: "education_section",
        sectionBlockNumber: 3,
        sectionBlockTitle: "Education",
        sectionContent: EducationSectionContent,
    },
    {
        sectionId: "skills",
        sectionClass: "skills_section",
        sectionBlockNumber: 4,
        sectionBlockTitle: "Skills",
        sectionContent: SkillSectionContent,
    },
    {
        sectionId: "project",
        sectionClass: "projects_section",
        sectionBlockNumber: 5,
        sectionBlockTitle: "Projects",
        sectionContent: ProjectSectionContent,
    },
    {
        sectionId: "contacts",
        sectionClass: "contacts_section",
        sectionBlockNumber: 6,
        sectionBlockTitle: "Contacts",
        sectionContent: ContactsSectionContent,
    },
]