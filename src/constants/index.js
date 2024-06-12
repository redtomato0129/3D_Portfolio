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
  appointment, photoedit, sessionly, facial, lemoon, azbit, dsaeditor, formbuilder, reup, aichat,
  jobit,
  tripguide,
  threejs,
  nextjs,
  openai,
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
    company_name: "",
    icon: javascript,
    iconBg: "#383E56",
    date: "",
    points: [
      "Specializing in frameworks including React, Next.js, Vue.js and Svelte.",
      "Familiarity with preprocessors like SASS or LESS can streamline and enhance CSS coding.",
      "Responsive web design principles to ensure websites work well on various devices.",
      "Clean and perfect face-to-face production using Tailwind CSS, Material UI, Bootstrap.",
      "Techniques to reduce load times and improve the performance of websites.",
      "Proficiency with developer tools provided by modern browsers to debug and optimize web pages.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "",
    icon: nodejs,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Node.js(Express.js), Electron",
      "Python: Python Script, Django, Flask, FastAPI",
      "PHP: Laravel, CodeIgniter",
      "Experience with creating and managing RESTful or GraphQL APIs",
      "Basic understanding of server management including configuration, deployment, and maintenance. Knowledge of cloud services (AWS, Azure, GCP) is often essential.",
    ],
  },
  {
    title: "AI Developer",
    company_name: "",
    icon: openai,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Knowledge of how to integrate and use OpenAI’s API for various AI applications.",
      "AWS, Google Cloud Platform, Microsoft Azure for deploying and scaling AI models.",
      "Familiarity with services like AWS SageMaker, Google AI Platform.",
      "Staying updated with the latest research and trends in AI.",
    ],
  },
  {
    title: "ServerLess Developer",
    company_name: "",
    icon: web,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Serverless development using Supabase and FireBase.",
      "Open-source framework for building serverless applications.",
      "Simplifies deployment and management of Node.js projects in AWS Lambda and API Gateway.",
      "For developing, testing, and deploying Azure Functions.",
    ],
  },
  {
    title: "Database Developer",
    company_name: "",
    icon: mongodb,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Relational Databases: Proficiency with databases such as MySQL, PostgreSQL, Oracle, Microsoft SQL Server.",
      "NoSQL Databases: Familiarity with databases like MongoDB, Cassandra, Redis for handling unstructured data.",
      "Database Design: Schema design, indexing, and query optimization.",
      "In-Memory Databases: Knowledge of databases like Redis or Memcached for high-performance applications.",
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
        name: "RESTful API",
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
        name: "PHP",
        color: "php-text-gradient",
      },
      {
        name: "Django",
        color: "django-text-gradient",
      },
      {
        name: "Amazon",
        color: "openai-text-gradient",
      },
    ],
    image: facial,
    source_code_link: "https://www.fotografoguayaquil.com/galeria-deportes/galeria.php?id=71",
  },
  {
    name: "Lemoon Site",
    description:
      "This is a site for statistical, advertising and functional purposes. This homepage was created using modern languages and frameworks, including React. In particular, we designed the homepage using three modules to create a very unique website.",
    tags: [
      {
        name: "React",
        color: "react-text-gradient",
      },
      {
        name: "Three.js",
        color: "threejs-text-gradient",
      },
      {
        name: "Tailwind css",
        color: "tailwindcss-text-gradient",
      },
      {
        name: "Express",
        color: "express-text-gradient",
      },
      {
        name: "MongoDB",
        color: "mongodb-text-gradient",
      },
      {
        name: "GraphQL",
        color: "graphql-text-gradient",
      },
    ],
    image: lemoon,
    source_code_link: "https://lemoon-web.pl",
  },
  {
    name: "Azbit",
    description:
      "Azbit is a new-generation exchange offering the most popular services on the market. Margin trading, loans secured by cryptocurrencies.",
    tags: [
      {
        name: "Next.js",
        color: "next-text-gradient",
      },
      {
        name: "Firebase.js",
        color: "firebase-text-gradient",
      },
      {
        name: "TypeScript",
        color: "typescript-text-gradient",
      },
      {
        name: "Websockets",
        color: "websockets-text-gradient",
      },
      {
        name: "GraphQL",
        color: "graphql-text-gradient",
      },
    ],
    image: azbit,
    source_code_link: "https://azbit.com",
  },
  {
    name: "DSAeditor",
    description:
      "React Editor is an innovative web-based photo editing platform designed to streamline and enhance the photo editing process for both amateur and professional users.",
    tags: [
      {
        name: "React",
        color: "react-text-gradient",
      },
      {
        name: "JavaScript",
        color: "javascript-text-gradient",
      },
    ],
    image: dsaeditor,
    source_code_link: "https://reacteditor.digitalsigns.ai",
  },
  {
    name: "Form Builder",
    description:
      "This application is a drag & drop form builder built in React and bundled with Webpack. It allows you to create multi-step forms by adding containers, with each container representing a new step.",
    tags: [
      {
        name: "React",
        color: "react-text-gradient",
      },
      {
        name: "TypeScript",
        color: "typescript-text-gradient",
      },
      {
        name: "Webpack",
        color: "webpack-text-gradient",
      },
    ],
    image: formbuilder,
    source_code_link: "https://release.d2xczvacbbtxrp.amplifyapp.com",
  },
  {
    name: "ReUp",
    description:
      "ReUplive stands out as a unique eCommerce venture, integrating cutting-edge features to enhance user engagement and shopping experiences.",
    tags: [
      {
        name: "React",
        color: "react-text-gradient",
      },
      {
        name: "Next.js",
        color: "next-text-gradient",
      },
      {
        name: "Typescript",
        color: "typescript-text-gradient",
      },
      {
        name: "Tailwind css",
        color: "tailwindcss-text-gradient",
      },
      {
        name: "RESTful API",
        color: "restapi-text-gradient",
      },
    ],
    image: reup,
    source_code_link: "https://staging.reup.live",
  },
  {
    name: "Workforce Chat",
    description:
      "The app is basically Chat GPT app with a bit of a twist.",
    tags: [
      {
        name: "Next.js",
        color: "next-text-gradient",
      },
      {
        name: "Typescript",
        color: "typescript-text-gradient",
      },
      {
        name: "Tailwind css",
        color: "tailwindcss-text-gradient",
      },
      {
        name: "Supabase",
        color: "supabase-text-gradient",
      },
      {
        name: "Stripe",
        color: "stripe-text-gradient",
      },
    ],
    image: aichat,
    source_code_link: "https://ac-ai-chat.vercel.app",
  },
];

export { services, technologies, experiences, testimonials, projects };
