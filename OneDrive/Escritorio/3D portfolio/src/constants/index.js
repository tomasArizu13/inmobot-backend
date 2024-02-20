import { setQuaternionFromProperEuler } from "three/src/math/MathUtils";
import {
    mobile,
    backend,
    phyton,
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
    sql,
    meta,
    starbucks,
    tesla,
    shopify,
    nike,
    jobit,
    tripguide,
    threejs,
    firebase
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Frontend Developer",
      icon: creator,
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
      name: "Phyton",
      icon: phyton,
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
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
      name: "sql",
      icon: sql,
    },
    {
      name: "firebase",
      icon: firebase,
    },

  ];
  
  const experiences = [
    {
      title: "Front-End",
      company_name: "Digital House",
      icon: html,
      iconBg: "#383E56",
      date: "March 2022 - July 2022",
      points: [
        "HTML (HyperText Markup Language): Know how to create web page structures using HTML for content and semantics.",
        "CSS (Cascading Style Sheets): Be able to design and style web pages using CSS for design, presentation and animation.",
        "JavaScript: Master the JavaScript programming language to add interactivity and dynamism to web pages, including DOM manipulation and event handling.",
        "Frameworks and Libraries: Familiarity with frontend frameworks and libraries such as React.js, AngularJS, Vue.js, Bootstrap, etc., to facilitate code development and optimization.",
        "Version Control: Knowledge of version control systems such as Git to collaborate on projects and track code changes.",
        "Testing and Debugging: Ability to perform unit and integration testing, as well as debug and troubleshoot code across different browsers.",
      ],
    },
    {
      title: "Back-End",
      company_name: "Digital House",
      icon: javascript,
      iconBg: "#E6DEDD",
      date: "Jul 2022 - Nov 2022",
      points: [
        "Programming Languages: Proficiency in one or more backend programming languages such as Node.js, depending on the specific requirements of the project or organization.",
        "Database Management: Knowledge of database management systems (DBMS) such as MySQL, SQL Server to efficiently store and manage data for web applications.",
        "Server-side Frameworks: Familiarity with server-side frameworks Express (Node.js), to expedite the development process and ensure scalability and security.",
        "API Development: Ability to design, develop, and maintain robust APIs (Application Programming Interfaces) for communication between different components of a web application or with external services.",
        "Security Principles: Understanding of security principles and best practices for backend development, including data encryption, authentication, authorization, input validation, and protection against common web vulnerabilities like SQL injection, cross-site scripting (XSS), etc.",
      ],
    },
    {
      title: "React and React Native",
      company_name: "Digital House",
      icon: reactjs,
      iconBg: "#383E56",
      date: " Mar 2023 - Jul 2023",
      points: [
        "Proficiency in React and React Native: Mastery of React.js and React Native, including the use of components, states, props, lifecycle, routing, state management with Redux or Context API, and understanding of React Native basics for the development of mobile applications.",
        "Firebase Integration: Proficiency in integrating Firebase services like Firestore (for real-time database), Authentication, Cloud Functions, Cloud Messaging, Storage, and Hosting into React and React Native applications.",
        "Authentication and Authorization: Knowledge of implementing user authentication and authorization systems using Firebase Authentication, including email/password authentication, social logins (Google, Facebook, etc.), and securing resources with custom claims or rules.",
        "Debugging and Performance Optimization: Ability to debug and troubleshoot React and React Native applications using development tools such as React DevTools, React Native Debugger, and Chrome DevTools, as well as skills to optimize application performance by identifying and fixing bottlenecks of bottle and the implementation of performance optimization practices.",
      ],
    },
    {
      title: "Full stack Developer and Three js",
      icon: threejs,
      iconBg: "#E6DEDD",
      date: "Mar 2024 - Present",
      points: [
        "Coming soon..."
      ],
    },
  ];
  
  const projects = [
    {
      name: "Nike Store",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: nike,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences,projects };