import photo from "../images/me.png";

export const MENU_ITEMS = [
    {
        linkId: "about",
        linkText: "About me",
    },
    {
        linkId: "experience",
        linkText: "Experience",
    },
    {
        linkId: "education",
        linkText: "Education",
    },
    {
        linkId: "skills",
        linkText: "Skills",
    },
    {
        linkId: "project",
        linkText: "Projects",
    },
    {
        linkId: "contacts",
        linkText: "Contacts",
    },
];

export const MAIN_SECTION_CONTENT = {
    mainHeaderText: "Dmytro Donchenko",
    imageLink: photo,
    additionalHeaderText: "Junior Fullstack Developer",
    cvLink: "/files/cv.pdf",
}

export const ABOUT_SECTION_CONTENT = [
    "Hi, Everyone!",
    "My name is Dmytro and I'm someone who's genuinely interested in technology and always ready to learn new things. I'm a beginner in development with a few freelance projects under my belt.",
    "My passion for coding has allowed me to work on various projects, such as corporate and business-card sites. I'm open to using new technologies and always try to find simple and effective solutions.",
    "My skills include Java program language, SQL and Keyword databases, Spring Framework and React.js library. I'm also good at communicating and working in a team.",
    "Outside of the IT world, I'm interested in playing on guitar, reading fictional and fantasy books.",
    "I'm always up for new challenges and opportunities for growth in the field of information technology, and I'm ready to collaborate with talented colleagues and industry professionals."
]

export const EXPERIENCE_SECTION_CONTENT = [
    {
        id: 1,
        headers: [
            "Apr 2023 - Now",
            "Freelancer",
            "Freelance"
        ],
        content: [
            "- Taking freelance orders for business-card or сorporate sites",
            "- Improving knowledge and skills",
            "- Get acquainted with new technologies and the latest trends in the IT industry"
        ]
    },
    {
        id: 2,
        headers: [
            "Nov 2022 - Apr 2023",
            "Intern",
            "ProfITSoft Internship"
        ],
        content: [
            "- Improving knowledge of java basics( Java Core, Java OOP, Spring Framework)",
            "- Learning Docker, MongoDB, Apache Kafka, ElasticSearch, Kibana",
            "- Learning Spring Cloud, RabbitMQ"
        ]
    },
    {
        id: 3,
        headers: [
            "May 2021 – Aug 2022",
            "Student",
            "PROG.ACADEMY"
        ],
        content: [
            "- Learning java basics( Java Core, Java OOP, Spring Framework)",
            "- Learning front end basics( HTML/CSS, Javascript, React.js)",
            "- Creating pet projects"
        ]
    }
]

export const EDUCATION_SECTION_CONTENT = [
    {
        id: 1,
        headers: [
            "ProfITSoft Internship",
            "Intern"
        ],
        studyingDates: "November 2022 - April 2023",
        certificateLink: "https://drive.google.com/file/d/16tmXgtCtcRG95p8PYyR9Gr2daFmRUxQX/view",
        websiteLink: "https://profitsoft.dev/intern.php",
    },
    {
        id: 2,
        headers: [
            "Prog.Academy",
            "Student"
        ],
        studyingDates: "May 2021 - August 2022",
        certificateLink: "https://drive.google.com/file/d/14HfHBPv2cO0pM1_gj5Os-iOez8YO6Rli/view",
        websiteLink: "https://prog.academy",
    },
    {
        id: 3,
        headers: [
            "Kyiv National University of Trade and Economics",
            "BACHELOR AND MASTER’S DEGREE IN FOOD INDUSTRY TECHNOLOGY AND ENGINEERING"
        ],
        studyingDates: "September 2014 - December 2019",
        certificateLink: "",
        websiteLink: "",
    }
]

export const SKILL_SECTION_CONTENT = [
    {
        id: 1,
        title: "Hard skills",
        subGroups: [
            {
                id: 1.1,
                title: "Backend :",
                skillList: [
                    "Java 8 - 16.",
                    "Spring Framework: Boot, IoC, MVC, Data, Security.",
                    "JDBC. JPA/Hibernate.",
                    "Servlets API. JSP, JSTL, Thymeleaf.",
                    "MySQL, PostgreSQL. SQL basics.",
                    "MongoDB",
                    "Elasticsearch/Kibana",
                    "Docker",
                    "Maven 3.",
                    "RabbitMQ",
                    "Apache Kafka",
                    "Spring Cloud",
                    "Telegram Bots API.",
                    "Git. GitHub. Heroku.",
                ]
            },
            {
                id: 1.2,
                title: "Frontend :",
                skillList: [
                    "HTML5 / CSS3. Bootstrap 5.",
                    "JavaScript ES5/ES6.",
                    "jQuery, React, Redux.",
                    "Gulp, WebPack.",
                    "SASS, LESS, Stylus.",
                    "Material UI"
                ]
            }
        ]
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
                    "Openness to feedback",
                    "Active listening",
                    "Growth mindset",
                ]
            }
        ]
    }

]

export const PROJECT_SECTION_CONTENT = [
    {
        projectTitle: "Olena Bulakh Make Up School (2024)",
        projectDescription: "Commercial project for client who owns a make up school in Kyiv. Project created as a React application with Java Backend Application that hosted at VDS with connected to it domain. For now it working fine. You can check it by link below.",
        projectTechnologies: "React.js(Router, Redux), Java(Spring Boot, Spring Security, Spring Data)",
        liveLink: "https://www.olena-bulakh-school.kiev.ua",
        sourceCode: "https://github.com/Helgen97/make_up_school",
        figmaLink: "https://www.figma.com/design/hSYyJf28w54TVnLDIhEMXq/Olena-Bulakh-Make-Up-School?node-id=0-1&t=llsxg2kR3KxcWq8E-1"
    },
    {
        projectTitle: "Filosof Barbershop Landing Site (2023)",
        projectDescription: "Commercial project for friend who owns a barbershops in Kyiv. Project created as single page React application that hosted at GitHub pages with connected to it domain. For now it working fine. You can check it by link below.",
        projectTechnologies: "React.js",
        liveLink: "https://www.filosof.in.ua",
        sourceCode: "https://github.com/Helgen97/filosof",
        figmaLink: "https://www.figma.com/file/c8vNUgKltHbk5xvMafWDsA/Filosof?type=design&node-id=0%3A1&mode=design&t=NK4Gj4TA1xI9KGqr-1"
    },
    {
        projectTitle: "Ukrainian Greek Catholic Church Site",
        projectDescription: "Commercial project for Ukrainian Greek Catholic Church community of Donetsk Exarchate. Project created as monolith application with template engine for generating pages. For some reason there is no live version of it, just source code and design file.",
        projectTechnologies: "Java/Spring, Thymeleaf, jQuery",
        liveLink: "",
        sourceCode: "https://github.com/Helgen97/ugcc-project",
        figmaLink: "https://www.figma.com/file/kUGD7LO3eaxmfG9BUlzEq3/Ukrainian-Greek-Catholic-Church?type=design&node-id=0%3A1&mode=design&t=5f5m7ucUDhlzAdYW-1"
    },
    {
        projectTitle: "Nice-Forum",
        projectDescription: "First full-stack project based on Spring Backend and React Frontend. It is a forum engine where people can comunicate with each other, share there thoughts and ideas. Created for final exam of Prog.Academy cources. Need to reedit and improvements after all i have learned. Live version is not available.",
        projectTechnologies: "Java/Spring, React.js",
        liveLink: "",
        sourceCode: "https://github.com/Helgen97/Nice-Forum",
        figmaLink: "https://www.figma.com/file/9SN9dMWdPx9asYa6F0Hi6w/Nice-Forum?type=design&node-id=0%3A1&mode=design&t=6j9HtgvdN06CrmKY-1"
    },
]

export const CONTACTS_SECTION_CONTENT = [
    {
        label: "Location:",
        link: "",
        linkText: "Ukraine, Kyiv"
    },
    {
        label: "Phone number:",
        link: "tel:+380939086907",
        linkText: "+380939086907"
    },
    {
        label: "Email:",
        link: "mailto:dmytro.donchenko97@gmail.com",
        linkText: "dmytro.donchenko97@gmail.com"
    },
    {
        label: "LinkedIn:",
        link: "https://www.linkedin.com/in/dmytrodonchenko/",
        linkText: "dmytrodonchenko"
    },
    {
        label: "Github:",
        link: "https://github.com/Helgen97/",
        linkText: "Helgen97"
    },
    {
        label: "Telegram:",
        link: "https://t.me/Helgen97",
        linkText: "@Helgen97"
    }
]