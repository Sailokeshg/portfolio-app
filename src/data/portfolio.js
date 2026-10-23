export const personalInfo = {
  name: "Sai Lokesh Reddy",
  title: "Software Engineer, AI",
  email: "sailokeshreddy@gmail.com",
  phone: "+1 (510) 255-0650",
  linkedin: "https://linkedin.com/in/sailokeshg",
  github: "https://github.com/sailokeshg",
  location: "New Jersey, NJ",
  summary:
    "Experienced Software Engineer with expertise in AI based full-stack development, cloud technologies, and AI integration. Proven track record of building scalable applications and leading technical initiatives across diverse industries.",
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
    company: "Agadia Systems",
    summary:
      "Led an enterprise RAG chatbot (Angular, FastAPI, Azure) over 170,000+ technical documents, with pgvector hybrid retrieval and an ingestion pipeline built for 400-page manuals.",
    highlight: { value: "−45%", label: "response latency" },
    position: "Software Engineer, AI",
    duration: "Jan 2026 - Present",
    location: "New Jersey, NJ",
    type: "Full-time",
    description:
      "Leading AI integration to improve enterprise level software development lifecycle using RAG Chatbots and AI Agents.",
    achievements: [
      "Led the end-to-end architecture and delivery of an enterprise RAG-based AI chatbot (Angular, FastAPI, Azure) over 170,000+ technical documents, reducing engineering knowledge lookup time by 60% through advanced LLM-powered semantic search.",
     "Architected scalable LLM workflows using PostgreSQL + pgvector for vector similarity search with hybrid retrieval and strict metadata filtering (document/version/section-level constraints), improving retrieval precision by 35% and ensuring 100% citation-backed responses.",
     "Designed a high-performance ingestion and embedding pipeline for 100–400 page technical manuals (including code blocks and architecture diagrams), reducing hallucinations by 50% and achieving 90%+ answer accuracy on internal benchmarks.",
     "Optimized Azure-hosted inference, indexing, and caching strategies to cut end-to-end response latency by 45%, supporting high-concurrency enterprise usage with production-grade monitoring and evaluation metrics."
    ],
    technologies: [
      "RAG",
      "Agentic AI",
      "Azure AI",
      "FastAPI",
      "Angular",
      "Vector DB",
      "ML Pipelines"
    ],
  },
    {
    id: 2,
    company: "Subscrbe AI",
    summary:
      "First engineer shaping architecture for a Flutter app on iOS and Android. Moved deep linking to native Universal and App Links and led RAG and agentic AI features.",
    highlight: { value: "+50%", label: "deep-link reliability" },
    position: "Founding AI Engineer",
    duration: "Aug 2025 - Jan 2026",
    location: "San Francisco, CA",
    type: "Full-time",
    description:
      "Leading AI integration and full-stack development of an application built with Flutter for iOS and Android.",
    achievements: [
      "Spearheaded core architectural decisions and developed mission-critical features from inception, shaping product direction and technical standards as a founding engineer, enabling the platform to scale efficiently to thousands of daily active users in a high-growth startup environment",
     "Led the migration from deprecated Firebase Dynamic Links to native Universal Links (iOS) and App Links (Android) using a custom domain, improving deep link reliability by up to 50%, reducing link failures, and enhancing cross-platform user engagement and retention.",
     "Led integration of AI features across the application, including RAG and agentic AI architectural decisions that enhanced the system reliability by 60%"
    ],
    technologies: [
      "Agentic AI",
      "Azure AI",
      "Flutter",
      "Firestore",
      "IOS Development",
      "ML Pipelines"
    ],
  },
  {
    id: 3,
    company: "WashMetrix",
    summary:
      "Built real-time React analytics for IoT laundry operations, Python and Node.js microservices, and automated ETL from POS systems into PostgreSQL. Took test coverage to 90%.",
    highlight: { value: "+25%", label: "user engagement" },
    position: "Software Engineer",
    duration: "May 2024 - Jul 2025",
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
    id: 4,
    company: "Zemoso Technologies",
    summary:
      "Shipped React and GraphQL features, CI/CD with Docker, and auto-scaling workloads on AWS EKS. Mentored three junior developers.",
    highlight: { value: "−40%", label: "development cycle time" },
    position: "Software Engineer I",
    duration: "Nov 2021 - Aug 2023",
    location: "Hyderabad, India",
    type: "Full-time",
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
      "An AI assistant for Cal State East Bay students: university-specific answers, memory for follow-up questions, voice input and shareable chats.",
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
    status: "In progress",
    preview: "chat",
  },
  {
    id: 2,
    title: "LaTeX Résumé Tailor",
    description:
      "Works directly on your .tex source: pick a model, set tone and length, and get a keyword-optimized résumé with a live PDF preview in about two minutes.",
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
    status: "Personal project",
    preview: "latex",
  },
];

export const toolkit = [
  {
    label: "AI / LLM",
    items: ["RAG", "Agentic AI", "Azure AI", "pgvector", "Pinecone", "Gemini", "OpenAI"],
  },
  {
    label: "Backend",
    items: ["Python", "FastAPI", "Node.js", "Express", "Java", "Spring Boot", "GraphQL"],
  },
  {
    label: "Frontend",
    items: ["React", "TypeScript", "Next.js", "Angular", "Flutter", "Tailwind CSS"],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "DynamoDB", "Firestore"],
  },
  {
    label: "Cloud",
    items: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "Serverless"],
  },
  {
    label: "Quality",
    items: ["Jest", "Pytest", "Postman", "Git", "Jira", "Figma"],
  },
];

// Headline numbers for the results band, from the Agadia RAG work.
export const results = {
  caption: "Enterprise RAG at Agadia Systems, 2026 — by the numbers",
  items: [
    { value: "170K+", label: "technical documents indexed" },
    { value: "60%", label: "faster knowledge lookup" },
    { value: "50%", label: "fewer hallucinations" },
    { value: "100%", label: "citation-backed answers" },
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
