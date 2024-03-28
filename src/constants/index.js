import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  netguru,
  asseco,
  shopify,
  carrent,
  appointment, photoedit, sessionly, facial,
  jobit,
  tripguide,
  threejs,
  nextjs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: web,
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
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "MongoDB",
    icon: mongodb,
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
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Netguru",
    icon: netguru,
    iconBg: "#383E56",
    date: "March 2018 - April 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Proficiency in modern JavaScript (ES6+), including concepts like asynchronous programming, closures, and ES6+ features such as classes, modules, and arrow functions",
      "Understanding of HTML and CSS is essential as it forms the foundation of web content to which your 3D work will be presented",
      "A firm grasp of 3D mathematics, including linear algebra (vectors, matrices, etc.), geometry, and trigonometry",
      "Understanding of WebGL, which is the browser's low-level interface for rendering 2D and 3D graphics",
      "Develop with React Three Fiber for React renderer for Three.js",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Asseco",
    icon: asseco,
    iconBg: "#E6DEDD",
    date: "June 2022 - December 2023",
    points: [
      "Proficiency in backend programming languages such as Django or Flask for Python, Express.js for Node.js, Laravel of PHP",
      "Design of database technologies, including MySQL, MongoDB, PostgreSQL, SQL Server",
      "Experience with creating and managing RESTful or GraphQL APIs",
      "Basic understanding of server management including configuration, deployment, and maintenance. Knowledge of cloud services (AWS, Azure, GCP) is often essential.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but he proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like he does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After he optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Photo Editor",
    description:
      "This is a web app that can be used for editing photos. This app contains some basics photo editing feature.",
    tags: [
      {
        name: "react",
        color: "react-text-gradient",
      },
      {
        name: "HTML5",
        color: "html5-text-gradient",
      },
      {
        name: "CSS3",
        color: "css3-text-gradient",
      },
    ],
    image: photoedit,
    source_code_link: "https://photo-editor-30.netlify.app",
  },
  {
    name: "SessionLy",
    description:
      "This Project was built using Next.js and Tailwind CSS, RestAPI. This homepage has a clean and neat interface. At my level, a website like this would only take 2 days...",
    tags: [
      {
        name: "TypeScript",
        color: "typescript-text-gradient",
      },
      {
        name: "Next.js",
        color: "next-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "tailwindcss-text-gradient",
      },
      {
        name: "restapi",
        color: "restapi-text-gradient",
      },
    ],
    image: sessionly,
    source_code_link: "https://dev.sessionly.co/",
  },
  {
    name: "Appointment Scheduling Software",
    description:
      "Probooking is a site that supports a business communication platform that allows teams to schedule, prepare, and follow up on external meetings.",
    tags: [
      {
        name: "Laravel",
        color: "laravel-text-gradient",
      },
      {
        name: "PHP",
        color: "php-text-gradient",
      },
      {
        name: "CSS 3",
        color: "css3-text-gradient",
      },
    ],
    image: appointment,
    source_code_link: "https://www.getprobooking.com/",
  },
  {
    name: "Sale HomePage",
    description:
      "Saleor Storefront built with React 18, Next.js 14, App Router, TypeScript, GraphQL, and Tailwind CSS. Starter pack for building performant e-commerce experiences with Saleor. This is developed by Team",
    tags: [
      {
        name: "Next.js",
        color: "next-text-gradient",
      },
      {
        name: "React",
        color: "react-text-gradient",
      },
      {
        name: "Typescript",
        color: "typescript-text-gradient",
      },
      {
        name: "Graphql",
        color: "graphql-text-gradient",
      },
      {
        name: "Tailwind css",
        color: "tailwindcss-text-gradient",
      },
      {
        name: "Cart",
        color: "pink-text-gradient",
      },
    ],
    image: appointment,
    source_code_link: "https://storefront.saleor.io",
  },
  {
    name: "Facial Search",
    description:
      "This site is a site where you can search for a list of photos that contain your photo. This involved facial recognition algorithms and some development of React, TypeScript, Tailwind CSS, and Javascript. The default is image recognition.",
    tags: [
      {
        name: "React",
        color: "react-text-gradient",
      },
      {
        name: "Typescript",
        color: "typescript-text-gradient",
      },
      {
        name: "Tailwind css",
        color: "tailwindcss-text-gradient",
      },
    ],
    image: facial,
    source_code_link: "https://www.facel.search.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
