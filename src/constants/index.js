import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  hotel,
  gardenApp,
  wine,
  threejs,
  tetratech,
  ubc,
  postgresql,
  python,
  java,
  azure,
  dog,
  paint,
  laptop,
  sloth,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Passionate Learner",
    icon: dog,
  },
  {
    title: "Frontend Pixel Pusher",
    icon: sloth,
  },
  {
    title: "Backend Logic Builder",
    icon: laptop,
  },
  {
    title: "Project Collaborator",
    icon: paint,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Azure",
    icon: azure,
  },
];

const experiences = [
  {
    title: "Full Stack Developer Co-op",
    company_name: "Tetra Tech - FusionMap",
    icon: tetratech,
    iconBg: "#E6DEDD",
    date: "Sep 2024 - May 2025",
    points: [
      "Built and optimized features for FusionMap’s web and mobile interfaces using React, Express, and Node.js.",
      "Enhanced data visualization by integrating geospatial services and optimizing storage with Azure Blob Storage.",
      "Refactored backend APIs and normalized data structures in PostgreSQL to improve performance.",
      "Collaborated with product managers and senior developers to plan, design, and deliver features.",
      "Participated in daily Scrum meetings and used Jira and Confluence for task tracking and documentation.",
    ],
  },
  {
    title: "Student",
    company_name: "University of British Columbia",
    icon: ubc,
    iconBg: "#E6DEDD",
    date: "Sep 2022 - Current",
    points: [
      "Third-year student pursuing a Bachelor of Science in a Combined Major in Computer Science and Statistics.",
      "Awards: Faculty of Science International Student Scholarship ($9,000), Dean’s Scholar.",
      "Relevant courses: Algorithms and Data Structures, Relational Databases, Computer Systems, Software Construction, Matrix Algebra.",
    ],
  },
];

const projects = [
  {
    name: "GardenTracker",
    description:
      "Web application that enables users within a household to effectively manage and monitor garden activities, including viewing real-time summarization of data",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
      {
        name: "oracledb",
        color: "blue-text-gradient",
      },
    ],
    image: gardenApp,
    source_code_link: "https://github.com/jessiezhou819/garden-app",
  },
  {
    name: "RoomMaster",
    description:
      "A Desktop Application create with a Java Swing GUI that allows users to streamline hotel operations, including guest check-in, check-out, and room assignment workflows",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "swing",
        color: "green-text-gradient",
      },
      {
        name: "json",
        color: "pink-text-gradient",
      },
    ],
    image: hotel,
    source_code_link: "https://github.com/jessiezhou819/hotel-manager",
  },
  {
    name: "WineQualityPredictor",
    description:
      "A predictive model created using KNN classification algorithm in R to predict wine quality based on five most relevant predictors.",
    tags: [
      {
        name: "r",
        color: "blue-text-gradient",
      },
      {
        name: "jupyter",
        color: "green-text-gradient",
      },
      {
        name: "knn",
        color: "pink-text-gradient",
      },
      {
        name: "ggplot",
        color: "blue-text-gradient",
      },
    ],
    image: wine,
    source_code_link: "https://github.com/jessiezhou819/wine-quality-report",
  },
];

export { services, technologies, experiences, projects };
