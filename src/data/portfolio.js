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
      "Building the AI layer of Agadia's internal knowledge and SDLC platform: a RAG assistant over 170,000+ documents, agents that turn Jira change requests into requirements and test suites, and a pipeline that documents codebases on its own.",
    highlight: { value: "5–10 min", label: "per FRD, down from hours" },
    position: "Software Engineer, AI",
    duration: "Jan 2026 - Present",
    location: "New Jersey, NJ",
    type: "Full-time",
    description:
      "Leading AI integration to improve enterprise level software development lifecycle using RAG Chatbots and AI Agents.",
    // Achievements may be plain strings or { title, text } for a bold lead-in.
    achievements: [
      {
        title: "RAG assistant.",
        text: "Led architecture and delivery of an enterprise RAG chatbot over 170,000+ technical documents, using pgvector hybrid retrieval, persona-aware answers for analysts and developers, SSE token streaming and 100% citation-backed responses. Knowledge lookup is 60% faster.",
      },
      {
        title: "Requirements agent.",
        text: "Built AI generation of Functional Requirements Documents from Jira change requests, pulling in attachments, meeting notes and context from up to five related products. Drafting time fell from hours to 5–10 minutes.",
      },
      {
        title: "QA agents.",
        text: "Generated test plans and test-case suites from FRDs, gated by a QA-architect validator agent that enforces 80% requirement coverage, then ran them automatically with Playwright and LangChain MCP agents.",
      },
      {
        title: "Agentic editing.",
        text: "Shipped document editing where the model proposes changes and people approve them, with SHA-256 content hashes blocking conflicting edits.",
      },
      {
        title: "Code-to-docs pipeline.",
        text: "Designed an LLM pipeline that turns a Git repository into Architecture, Technical and Functional documentation in a single pass from parser ASTs, validated against a knowledge graph we built.",
      },
      {
        title: "Performance.",
        text: "Tuned Azure-hosted inference, indexing and caching to cut response latency by 45% under high-concurrency use.",
      },
    ],
    technologies: [
      "Claude",
      "Azure OpenAI (GPT-4o)",
      "LangChain",
      "MCP",
      "pgvector",
      "FastAPI",
      "Angular",
      "Playwright",
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

// Professional AI case studies, shown between Experience and side projects.
export const aiWork = [
  {
    id: "code-to-docs",
    eyebrow: "Case A · Internal tooling",
    title: "Code-to-Docs: documentation that writes itself",
    description:
      "Give it a Git repository and it returns Architecture, Technical and Functional documents ready for the wiki. Static parsers turn the code into AST JSON, the LLM writes each document in a single pass, and a knowledge graph we built of the system validates what it says.",
    stats: [
      { value: "4 parsers", label: "Angular, C#, Python and SQL, traced from UI to database" },
      { value: "1 pass", label: "Each document generated straight from the AST JSON" },
      { value: "Graph-checked", label: "Output validated against a knowledge graph we built" },
      { value: "3 docs", label: "Architecture (C4), Technical and Functional, per repository" },
    ],
    technologies: ["Claude", "tree-sitter", "Roslyn", "Python ast", "knowledge graph", "Pydantic"],
    preview: "docs-pipeline",
  },
  {
    id: "jira-to-tests",
    eyebrow: "Case B · Internal SDLC platform",
    title: "From Jira ticket to tested feature, with agents",
    description:
      "AI workflows that turn a Jira change request into a Functional Requirements Document, then a test plan, a validated test-case suite and an automated run, with people approving what the model proposes.",
    stats: [
      { value: "5–10 min", label: "To draft an FRD that used to take hours" },
      { value: "≥ 80%", label: "Requirement coverage enforced by a validator agent" },
      { value: "Human-approved", label: "Agent edits are proposals; content hashes block conflicts" },
      { value: "Streaming", label: "SSE output and background jobs with live progress" },
    ],
    technologies: [
      "Claude",
      "Azure OpenAI (GPT-4o)",
      "LangChain",
      "MCP",
      "Playwright",
      "FastAPI",
      "Angular",
      "PostgreSQL",
    ],
    preview: "sdlc-chain",
  },
];

// Applied research at CSU East Bay, framed around the software that was built.
export const research = {
  entries: [
    {
      id: "vr-trainer",
      years: "2023–2024",
      title: "VR patient-safety trainer",
      role: "Original developer · Lead author",
      description:
        "Built a Unity app for Meta Quest 2 that puts nursing students inside 360° captures of CSU East Bay's simulation lab, shot on an Insta360 X2. Students search the room for 10 hidden safety hazards, with scoring, pop-up explanations and audio feedback for each find.",
      stats: [
        { value: "10", label: "hidden hazards to find" },
        { value: "1st", label: "author, Springer CCIS" },
        { value: "CSR", label: "Scholar, CSU East Bay" },
      ],
      paper: {
        title: "Advancing Nursing Education Through Virtual Reality Training",
        venue: "CSCE 2024, Las Vegas · Springer CCIS vol. 2260, 2025",
        url: "https://doi.org/10.1007/978-3-031-85923-6_18",
      },
      talkUrl: "https://youtu.be/WoDhRUDPcMQ",
      technologies: ["Unity", "C#", "Meta Quest 2", "360° capture"],
    },
    {
      id: "vr-pilot",
      years: "2025–2026",
      title: "Standalone VR pilot with nursing students",
      role: "Co-author · Handed over and mentored the codebase",
      description:
        "Handed my codebase to the next student team and helped them get it running standalone on the headset, now with 5 hazards, a 5-minute timer and an end-of-session summary. Rejoined to co-author the pilot study and wrote its conclusions on challenges and next steps.",
      stats: [
        { value: "14", label: "nursing students in the pilot" },
        { value: "100%", label: "found at least 3 of 5 hazards" },
        { value: "4.64/5", label: "want to use VR training more often" },
      ],
      paper: {
        title: "Improving and Piloting the Application of 360° Virtual Reality Technology in Nursing Education",
        venue: "CATA 2026, Honolulu · Springer CCIS, 2026",
        url: "https://doi.org/10.1007/978-3-032-29003-8_7",
      },
      technologies: ["Unity", "Meta Quest 2 standalone", "User study"],
    },
  ],
  review: {
    years: "2026",
    title: "Peer reviewer, JMIR Formative Research",
    description: "Reviewing early-stage digital-health software studies.",
  },
};

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
  caption: "Enterprise RAG at Agadia Systems, 2026: by the numbers",
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
