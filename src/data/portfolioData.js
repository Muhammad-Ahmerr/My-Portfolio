export const PERSONAL_INFO = {
  name: "Muhammad Ahmar",
  role: "Full Stack Developer",
  specialization: "MERN Stack Specialist",
  phone: "03119888303",
  phoneFormatted: "+92 311 9888303",
  whatsappUrl: "https://wa.me/923119888303",
  email: "ahmeraltaf3@gmail.com",
  github: "https://github.com/Muhammad-Ahmerr",
  linkedin: "https://www.linkedin.com/in/muhammad-ahmar-7709a8394/",
  eyebrow: "FULL STACK DEVELOPER",
  mainHeading: "Hi, I'm Muhammad Ahmar.",
  supportingHeading: "I build modern, secure and scalable web applications using the MERN stack.",
  description: "Full Stack Developer specializing in MongoDB, Express.js, React.js and Node.js, with hands-on experience building secure RESTful APIs, integrating React frontends with backend services, and delivering complete end-to-end web applications.",
  techLine: "MongoDB • Express.js • React.js • Node.js",
  aboutText1: "I'm a Full Stack Developer specializing in the MERN stack. I build complete web applications—from responsive React interfaces to secure Node.js APIs and MongoDB databases.",
  aboutText2: "My experience includes authentication, authorization, RESTful API development, database design, and full-stack application architecture.",
  contactHeading: "Have a project in mind?",
  contactSupporting: "Let's build something useful, secure and scalable."
};

export const STATS = [
  {
    value: "01+",
    label: "Years Professional Experience",
    description: "Hands-on commercial full stack web development"
  },
  {
    value: "MERN",
    label: "Full Stack Development",
    description: "End-to-end web app architecture & execution"
  },
  {
    value: "REST",
    label: "API Development",
    description: "Structured, performant, and documented endpoints"
  },
  {
    value: "JWT",
    label: "Authentication & Security",
    description: "Token rotation, RBAC, and secure session flows"
  }
];

export const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    categoryKey: "frontend",
    description: "Client-side interfaces engineered for speed, responsiveness, and state synchronization.",
    skills: [
      { name: "React.js", iconName: "Atom" },
      { name: "React Router", iconName: "Route" },
      { name: "Tailwind CSS", iconName: "Palette" },
      { name: "HTML5", iconName: "Code2" },
      { name: "CSS3", iconName: "Layers" },
      { name: "Responsive Design", iconName: "Smartphone" }
    ]
  },
  {
    title: "Backend",
    categoryKey: "backend",
    description: "Server-side micro-services, MVC structure, and modular RESTful routing.",
    skills: [
      { name: "Node.js", iconName: "Server" },
      { name: "Express.js", iconName: "Cpu" },
      { name: "RESTful API Design", iconName: "Network" },
      { name: "MVC Architecture", iconName: "Boxes" },
      { name: "Middleware", iconName: "ArrowRightLeft" }
    ]
  },
  {
    title: "Database",
    categoryKey: "database",
    description: "Data modeling, schema validation, indexing, and persistent document storage.",
    skills: [
      { name: "MongoDB", iconName: "Database" },
      { name: "Mongoose", iconName: "FileCode2" }
    ]
  },
  {
    title: "Authentication & Security",
    categoryKey: "security",
    description: "Hardened defense with token lifecycles, hashing, and role verification.",
    skills: [
      { name: "JWT", iconName: "KeyRound" },
      { name: "Refresh Token Rotation", iconName: "RefreshCw" },
      { name: "bcrypt", iconName: "ShieldCheck" },
      { name: "Role-Based Access Control", iconName: "UserCheck" },
      { name: "dotenv", iconName: "FileLock2" }
    ]
  },
  {
    title: "Developer Tools",
    categoryKey: "tools",
    description: "Industry standard toolchain for version control, API testing, and development.",
    skills: [
      { name: "Git", iconName: "GitBranch" },
      { name: "GitHub", iconName: "Github" },
      { name: "Postman", iconName: "Send" },
      { name: "VS Code", iconName: "Terminal" }
    ]
  }
];

export const EXPERIENCES = [
  {
    id: "exp-1",
    role: "Full Stack Developer",
    company: "ITCoderz",
    period: "Dec. 2025 – Aug. 2026",
    type: "Engineering",
    techStack: ["Node.js", "Express.js", "React.js", "MongoDB", "JWT", "Multer", "ImageKit"],
    responsibilities: [
      "Developed RESTful APIs using Node.js and Express.js with MVC architecture and modular backend structure.",
      "Integrated React frontend with backend REST APIs.",
      "Implemented JWT authentication with access and refresh tokens.",
      "Implemented protected routes and session management.",
      "Developed role-based authorization separating administrative and user functionality.",
      "Used dotenv for secure configuration management.",
      "Implemented secure file uploads using Multer with cloud storage via ImageKit."
    ]
  },
  {
    id: "exp-2",
    role: "Junior Project Manager",
    company: "ITCoderz",
    period: "Aug. 2024 – Dec. 2025",
    type: "Project Management",
    techStack: ["Client Relations", "Workflow Design", "Cross-functional Coordination"],
    responsibilities: [
      "Collaborated with clients to gather, analyze and document project requirements.",
      "Coordinated designers, developers and clients for Flutter-based projects.",
      "Ensured requirements were clearly understood and implemented.",
      "Supported project planning, execution and progress tracking.",
      "Assisted with UI workflows and communication between project stakeholders.",
      "Helped resolve basic technical coordination issues."
    ]
  }
];

export const FEATURED_PROJECTS = [
  {
    id: "ecommerce-fullstack",
    title: "Full Stack E-Commerce Web Application",
    category: "FULL STACK PROJECT",
    description: "A complete e-commerce application built with a React frontend and Node.js/Express backend connected to MongoDB.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "RBAC",
      "Tailwind CSS"
    ],
    features: [
      "Secure JWT authentication",
      "Short-lived access tokens",
      "HTTP-only refresh tokens",
      "Refresh-token rotation",
      "Session management",
      "Password hashing with bcrypt",
      "Input validation",
      "Role-based access control",
      "Admin product management",
      "Product browsing",
      "Product details",
      "Shopping cart",
      "Order placement",
      "Cash on Delivery",
      "Product reviews",
      "Centralized error handling"
    ],
    liveUrl: "#projects",
    githubUrl: "https://github.com/Muhammad-Ahmerr",
    caseStudy: {
      overview: "Designed and engineered an end-to-end commercial grade e-commerce web platform. Built to solve critical challenges in modern web stores: preventing unauthorized operations through rigorous role-based access control (RBAC), defending against XSS/CSRF token theft through HTTP-only refresh token rotation, and providing high-speed product catalog browsing paired with resilient cart and checkout pipelines.",
      architectureVisual: {
        steps: [
          {
            name: "React Frontend",
            role: "Client Layer",
            desc: "Dynamic UI, state management, shopping cart, and protected route wrappers."
          },
          {
            name: "REST API",
            role: "Transport Layer",
            desc: "HTTP/JSON contracts, CORS policy, cookie handling, and validation middlewares."
          },
          {
            name: "Express / Node.js",
            role: "Application Server",
            desc: "MVC controllers, JWT token verification, role gates, and centralized error handling."
          },
          {
            name: "MongoDB",
            role: "Data Layer",
            desc: "Mongoose models, indexed collections for products, orders, and user sessions."
          }
        ]
      },
      authenticationFlow: {
        steps: [
          {
            step: 1,
            name: "User",
            detail: "User submits encrypted credentials (email/password) over HTTPS.",
            securityNote: "Client-side validation & sanitize"
          },
          {
            step: 2,
            name: "Login",
            detail: "Server compares salted bcrypt hash in MongoDB and confirms credentials.",
            securityNote: "Constant-time comparison via bcrypt"
          },
          {
            step: 3,
            name: "Access Token",
            detail: "Server signs a short-lived JSON Web Token (15m expiration) for client memory.",
            securityNote: "Zero sensitive secrets stored in payload"
          },
          {
            step: 4,
            name: "Protected API",
            detail: "Frontend passes access token in Authorization: Bearer header on protected requests.",
            securityNote: "JWT verification & RBAC check"
          },
          {
            step: 5,
            name: "Refresh Token",
            detail: "Cryptographically randomized token saved in Secure HTTP-only SameSite cookie.",
            securityNote: "Immune to JavaScript/XSS extraction"
          },
          {
            step: 6,
            name: "Session Rotation",
            detail: "Upon expiration, refresh endpoint invalidates old token and issues fresh pair.",
            securityNote: "Prevents token reuse & replay attacks"
          }
        ]
      },
      keyFeatures: [
        "Secure JWT authentication",
        "Short-lived access tokens",
        "HTTP-only refresh tokens",
        "Refresh-token rotation",
        "Session management",
        "Password hashing with bcrypt",
        "Input validation",
        "Role-based access control",
        "Admin product management",
        "Product browsing",
        "Product details",
        "Shopping cart",
        "Order placement",
        "Cash on Delivery",
        "Product reviews",
        "Centralized error handling"
      ],
      technologyStack: [
        {
          layer: "Frontend Interface",
          items: ["React.js", "Tailwind CSS", "Context API / State", "Responsive UI"]
        },
        {
          layer: "Backend Architecture",
          items: ["Node.js", "Express.js", "MVC Pattern", "Modular Routing", "Multer"]
        },
        {
          layer: "Database & Storage",
          items: ["MongoDB", "Mongoose ODM", "Schema Constraints", "Indexing"]
        },
        {
          layer: "Security & Validation",
          items: ["JWT (JSON Web Tokens)", "HTTP-only Cookies", "bcrypt", "RBAC Middleware", "dotenv"]
        }
      ]
    }
  }
];

export const EDUCATION = {
  degree: "Bachelor of Science in Information Technology",
  institution: "Muhammad Nawaz Sharif University of Agriculture Multan",
  period: "Apr. 2020 – June 2024",
  focus: "Software Engineering, Database Systems, Computer Networks & Information Systems"
};
