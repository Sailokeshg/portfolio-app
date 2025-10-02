export const personalInfo = {
  name: "Sai Lokesh Reddy",
  title: "Software Engineer",
  email: "sailokeshreddy@gmail.com",
  phone: "+1 (510) 255-0650",
  linkedin: "https://linkedin.com/in/sailokeshg",
  github: "https://github.com/sailokeshg",
  location: "San Francisco Bay Area, CA",
  summary:
    "Experienced Software Engineer with expertise in full-stack development, cloud technologies, and AI integration. Proven track record of building scalable applications and leading technical initiatives across diverse industries.",
  resumeUrl: "/Sai_Lokesh_Reddy.pdf",
};

export const education = [
  {
    id: 1,
    degree: "Master of Science in Computer Science",
    institution: "California State University, East Bay",
    location: "Hayward, CA",
    duration: "2023 - 2025",
    gpa: "3.9/4.0",
    coursework: [
      "Advanced Algorithms",
      "Machine Learning",
      "Software Engineering",
      "Database Systems",
    ],
  },
  {
    id: 2,
    degree: "Bachelor of Technology in Computer Science",
    institution: "CMR Institute of Technology",
    location: "Hyderabad, India",
    duration: "2018 - 2022",
    gpa: "8.8/10",
    coursework: [
      "Data Structures",
      "Object-Oriented Programming",
      "Web Development",
      "Computer Networks",
    ],
  },
];

export const experience = [
  {
    id: 1,
    company: "WashMetrix",
    position: "Software Engineer",
    duration: "May 2024 - Present",
    location: "San Francisco, CA",
    type: "Full-time",
    description:
      "Leading full-stack development of analytics platforms and scalable backend services for IoT-enabled laundry management systems. Delivered significant improvements in user engagement (25% boost), development efficiency (15% faster timelines), and system reliability (90% test coverage, 20% reduction in production bugs) through modern React dashboards, microservices architecture, and automated ETL pipelines.",
    achievements: [
      "Developed and optimized a React-based analytics platform with dynamic dashboards & real-time data visualization, boosting user engagement by 25%",
      "Engineered scalable backend services using Python & Node.js and integrated them with React frontends, implementing reusable components and microservices that accelerated development timelines by 15%",
      "Implemented comprehensive testing (Jest, Pytest) achieving 90% coverage, enhancing system reliability and reducing production bug reports by 20%",
      "Collaborated within cross-functional teams, ensuring timely completion of bootcamps and successful project delivery, achieving a 100% on-time delivery rate across all assigned projects",
      "Architected and automated ETL pipelines (Python, SQL) extracting data from POS systems into cloud databases (PostgreSQL), improving data processing efficiency by 20%",
    ],
    technologies: [
      "React",
      "Node.js",
      "Python",
      "PostgreSQL",
      "Jest",
      "Pytest",
      "SQL",
      "ETL",
      "Microservices",
      "Real-time Analytics",
    ],
  },
  {
    id: 2,
    company: "Zemoso Technologies",
    position: "Software Engineer 1",
    duration: "Nov 2021 - Aug 2023",
    location: "Hyderabad, India",
    type: "Fulltime",
    description:
      "Engineered scalable full-stack applications and cloud infrastructure solutions, focusing on performance optimization and team development.",
    achievements: [
      "Engineered scalable React components and optimized GraphQL schemas with RESTful APIs, achieving a 30% reduction in response time and boosting performance",
      "Mentored 3 junior developers on React & backend best practices and conducted rigorous peer code reviews, resulting in a 15% increase in code quality metrics and faster onboarding",
      "Integrated Amazon S3 and QuickBooks APIs into a modular event-driven architecture, enabling seamless data flow that enhanced product functionality and increased user satisfaction by 20%",
      "Designed and implemented CI/CD pipelines with automated testing and Docker, reducing development cycles by 40% and enabling 25% more frequent deployments",
      "Deployed and managed application components on AWS (EC2, S3) using Docker & Kubernetes (EKS), implementing auto-scaling to handle 30% traffic spikes and reducing cloud costs by 15%",
    ],
    technologies: [
      "React",
      "GraphQL",
      "RESTful APIs",
      "Amazon S3",
      "QuickBooks API",
      "Docker",
      "Kubernetes",
      "AWS EC2",
      "AWS EKS",
      "CI/CD",
      "Automated Testing",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "CSUEB Student Support Chatbot",
    description:
      "AI-powered chatbot designed to help California State University, East Bay students with university-related queries and academic support.",
    longDescription:
      "An intelligent chatbot platform built specifically for CSUEB students to get instant answers to university-related questions. Features advanced conversation management with memory for follow-up questions, voice input capabilities, and convenient chat sharing options.",
    image: "/projects/chatbot.jpg",
    technologies: [
      "React",
      "Gemini AI",
      "Tailwind CSS",
      "FastAPI",
      "PostgreSQL",
    ],
    features: [
      "CSUEB-specific query handling for students",
      "Voice input for hands-free interaction",
      "Chat sharing and copy functionality",
      "Conversation memory for follow-up questions",
      "Real-time AI responses powered by Gemini",
    ],
    githubUrl: "https://github.com/Sailokeshg/csueb-gemini-api",
    liveUrl: "https://csueb-support.netlify.app",
    status: "Being Improved",
  },
  {
    id: 2,
    title: "LaTeX Résumé Tailor",
    description:
      "Upload your LaTeX .tex résumé and get a tailored, keyword-optimized version with a live PDF preview in under 2 minutes.",
    longDescription:
      "A LaTeX-first résumé tailoring tool that works directly with your .tex source to produce ATS-friendly, tailored résumés. Choose AI models to control length, tone and style; edit the generated LaTeX inline with a live side-by-side PDF preview, then export the final PDF or .tex file.",
    image: "/projects/latex-resume.jpg",
    technologies: [
      "Vector DB",
      "RAG",
      "OpenAI / LLMs",
      "React",
      "Node.js",
      "LaTeX",
      "PDF.js",
      "Docker",
    ],
    features: [
      "LaTeX-first workflow: work directly with .tex source",
      "Model selection palette to control length, tone and style",
      "Live code + PDF preview side-by-side for instant feedback",
      "One-click tailoring: keyword-optimized .tex and updated PDF in ~2 minutes",
      "Inline editing of generated LaTeX and easy final export",
    ],
    githubUrl: "https://github.com/Sailokeshg/resume-tailor-ai",
    liveUrl: "",
    status: "Personal Project",
  },
];

export const skills = {
  frontend: [
    { name: "React", level: 90, category: "Frontend" },
    { name: "TypeScript", level: 85, category: "Frontend" },
    { name: "JavaScript", level: 95, category: "Frontend" },
    { name: "HTML5/CSS3", level: 90, category: "Frontend" },
    { name: "Tailwind CSS", level: 85, category: "Frontend" },
    { name: "Next.js", level: 80, category: "Frontend" },
    { name: "Vue.js", level: 70, category: "Frontend" },
  ],
  backend: [
    { name: "Node.js", level: 90, category: "Backend" },
    { name: "Python", level: 85, category: "Backend" },
    { name: "Java", level: 80, category: "Backend" },
    { name: "FastAPI", level: 85, category: "Backend" },
    { name: "Express.js", level: 90, category: "Backend" },
    { name: "Spring Boot", level: 75, category: "Backend" },
    { name: "GraphQL", level: 70, category: "Backend" },
  ],
  database: [
    { name: "PostgreSQL", level: 85, category: "Database" },
    { name: "MongoDB", level: 80, category: "Database" },
    { name: "MySQL", level: 85, category: "Database" },
    { name: "Redis", level: 75, category: "Database" },
    { name: "DynamoDB", level: 70, category: "Database" },
  ],
  cloud: [
    { name: "AWS", level: 80, category: "Cloud" },
    { name: "Docker", level: 85, category: "Cloud" },
    { name: "Kubernetes", level: 70, category: "Cloud" },
    { name: "CI/CD", level: 80, category: "Cloud" },
    { name: "Serverless", level: 75, category: "Cloud" },
  ],
  tools: [
    { name: "Git", level: 95, category: "Tools" },
    { name: "VS Code", level: 90, category: "Tools" },
    { name: "Postman", level: 85, category: "Tools" },
    { name: "Figma", level: 70, category: "Tools" },
    { name: "Jira", level: 80, category: "Tools" },
  ],
};

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Senior Product Manager",
    company: "WashMetrix",
    content:
      "Sai's technical expertise and problem-solving abilities have been instrumental in our product development. His ability to translate complex requirements into elegant solutions is remarkable.",
    avatar: "/testimonials/sarah.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Tech Lead",
    company: "Zemoso Technologies",
    content:
      "Working with Sai was a pleasure. His dedication to code quality and his collaborative approach made him a valuable team member. He consistently delivered high-quality work on time.",
    avatar: "/testimonials/michael.jpg",
  },
];

export const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/sailokeshg",
    icon: "linkedin",
  },
  {
    name: "GitHub",
    url: "https://github.com/sailokeshg",
    icon: "github",
  },
  {
    name: "Email",
    url: "mailto:sailokeshreddy@gmail.com",
    icon: "mail",
  },
];
