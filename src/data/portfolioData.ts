// Centralized, verified portfolio data for Muhsina CT
// Sources: Resume, LinkedIn (linkedin.com/in/muhsinact), GitHub (github.com/MUHSINA25)

export const personal = {
  name: "Muhsina CT",
  roles: ["Data Analyst", "Data Scientist", "AI & Data Science Trainer"],
  tagline: "I turn data into products, insights, and business decisions.",
  location: "Kerala, India",
  email: "muhsinashafeermay29@gmail.com",
  whatsapp: "9061499417",
  whatsappUrl: "https://wa.me/9061499417?text=Hello",
  instagram: "https://www.instagram.com/mu__si_i?igsh=YnZnN25mZG14MzYy",
  linkedin: "https://www.linkedin.com/in/muhsinact",
  github: "https://github.com/MUHSINA25",
  avatar: "/images/avatar-portrait.png",
  resumeUrl: "/resume.html",
};

export const about = {
  summary:
    "I design clear, modern data experiences that connect analysis with decision-making and product thinking.",
  highlights: [
    {
      title: "MSc Physics",
      desc: "A rigorous foundation in mathematics, abstraction, and analytical problem-solving.",
    },
    {
      title: "MBA in Data Science",
      desc: "Blending technical depth with business perspective and strategic thinking.",
    },
    {
      title: "AI & Data Science Trainer",
      desc: "Mentoring learners in Python, SQL, Power BI, and machine learning concepts.",
    },
    {
      title: "Data Analytics Projects",
      desc: "Building thoughtful solutions that turn messy data into useful, polished outcomes.",
    },
  ],
};

export type Skill = { name: string; level: number };
export type SkillCategory = {
  category: string;
  icon: string;
  skills: Skill[];
};

export const skills: SkillCategory[] = [
  {
    category: "Programming",
    icon: "code",
    skills: [
      { name: "Python", level: 90 },
      { name: "SQL", level: 88 },
      { name: "MySQL", level: 85 },
    ],
  },
  {
    category: "Libraries",
    icon: "layers",
    skills: [
      { name: "Pandas", level: 90 },
      { name: "NumPy", level: 88 },
      { name: "Matplotlib", level: 85 },
      { name: "Seaborn", level: 85 },
    ],
  },
  {
    category: "Machine Learning",
    icon: "brain",
    skills: [
      { name: "Scikit-learn", level: 88 },
      { name: "Deep Learning", level: 78 },
      { name: "Predictive Modeling", level: 85 },
      { name: "Feature Engineering", level: 85 },
    ],
  },
  {
    category: "Visualization & BI",
    icon: "chart",
    skills: [
      { name: "Power BI", level: 90 },
      { name: "Tableau", level: 80 },
      { name: "Excel", level: 88 },
    ],
  },
  {
    category: "Other Skills",
    icon: "tools",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "Statistics", level: 85 },
      { name: "Data Cleaning", level: 90 },
      { name: "EDA", level: 90 },
      { name: "Leadership", level: 82 },
      { name: "Communication", level: 88 },
    ],
  },
];

export type ExperienceItem = {
  role: string;
  company: string;
  duration: string;
  points: string[];
  tags: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "AI & Data Science Trainer",
    company: "IQJITA Innovative LLP",
    duration: "July 2025 – Present",
    points: [
      "Mentoring learners in Python, SQL, Power BI, and core machine learning concepts.",
      "Designing practical curriculum and hands-on analytics assignments.",
      "Supporting project-based learning and career-ready skill building.",
    ],
    tags: ["Python", "SQL", "Power BI", "Machine Learning", "Mentoring", "Data Analytics"],
  },
  {
    role: "Data Science Intern",
    company: "Evoastra Ventures Pvt Ltd",
    duration: "July 2024 – January 2025",
    points: [
      "Built machine learning and deep learning solutions for practical business problems.",
      "Created interactive Power BI dashboards for stakeholder-friendly storytelling.",
      "Worked across data cleaning, modeling, and delivery for real projects.",
    ],
    tags: ["Machine Learning", "Deep Learning", "Power BI", "Real-world Projects"],
  },
  {
    role: "Data Science Intern",
    company: "Prodigy InfoTech",
    duration: "November 2024 – December 2024",
    points: [
      "Completed applied data science tasks across EDA, cleaning, and visualization.",
      "Delivered concise mini-projects that demonstrated strong Python and analytical thinking.",
    ],
    tags: ["Python", "EDA", "Data Cleaning", "Data Visualization"],
  },
];

export type Project = {
  title: string;
  description: string;
  stack: string[];
  github: string;
  demo?: string;
  image: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Delayed Payment Detector",
    description:
      "A predictive system for invoice payment delay risk, built with classification models and a polished automation pipeline.",
    stack: ["Python", "Scikit-learn", "SMOTE", "Random Forest", "GridSearchCV", "Pandas"],
    github: "https://github.com/MUHSINA25/Delayed-Payment-Detector",
    image: "/images/project-payment.jpg",
    featured: true,
  },
  {
    title: "TATA Sales Analysis — Business Performance Insights",
    description:
      "An interactive Power BI dashboard for revenue trends, customer behavior, and business performance storytelling.",
    stack: ["Power BI", "Data Cleaning", "DAX", "Business Intelligence"],
    github: "https://github.com/MUHSINA25/TATA",
    image: "/images/project-tata.jpg",
    featured: true,
  },
  {
    title: "Health Insurance Fraud Detection",
    description:
      "A fraud detection system for insurance claims, combining modeling, EDA, and a live Streamlit experience.",
    stack: ["Python", "Scikit-learn", "Pandas", "Streamlit", "Ensemble Models"],
    github: "https://github.com/MUHSINA25/health-insurance-fraud-detection",
    demo: "https://health-insurance-fraud-detection-huru8j8rtwlodwvhho5xwe.streamlit.app/",
    image: "/images/project-fraud.jpg",
    featured: true,
  },
  {
    title: "Credit Risk / Loan Approval Classification",
    description:
      "A loan approval classifier built with financial and demographic features and a full modeling workflow.",
    stack: ["Python", "Random Forest", "Feature Engineering", "EDA"],
    github: "https://github.com/MUHSINA25/Loan-Approval",
    image: "/images/project-loan.jpg",
  },
  {
    title: "COVID-19 Global Dashboard",
    description:
      "A multi-page Power BI dashboard for tracking regional COVID-19 patterns and key public health signals.",
    stack: ["Power BI", "Data Cleaning", "Geo Visualization"],
    github: "https://github.com/MUHSINA25/COVID19",
    image: "/images/project-covid.jpg",
  },
  {
    title: "South India Corporate Analysis Dashboard",
    description:
      "A regional business intelligence dashboard for analyzing corporate performance across South Indian companies.",
    stack: ["Power BI", "Business Intelligence", "Data Analytics"],
    github: "https://github.com/MUHSINA25/South-India-s-Corperate-analysis-dashbord",
    image: "/images/project-tata.jpg",
  },
];

export type Certification = {
  title: string;
  issuer: string;
  icon: string;
};

export const certifications: Certification[] = [
  {
    title: "Data Science & Machine Learning",
    issuer: "Illinois Institute of Technology",
    icon: "award",
  },
  {
    title: "Data Science & Machine Learning",
    issuer: "Entri Elevate",
    icon: "award",
  },
  {
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn",
    icon: "sparkles",
  },
  {
    title: "Data Science Foundation",
    issuer: "Certification Program",
    icon: "database",
  },
  {
    title: "Artificial Intelligence Foundation",
    issuer: "Certification Program",
    icon: "cpu",
  },
];

export type EducationItem = {
  degree: string;
  institute: string;
  duration: string;
};

export const education: EducationItem[] = [
  {
    degree: "MBA in Data Science",
    institute: "Amity University",
    duration: "Ongoing",
  },
  {
    degree: "MSc Physics",
    institute: "University of Calicut",
    duration: "Completed",
  },
  {
    degree: "BSc Physics",
    institute: "University of Calicut",
    duration: "Completed",
  },
];

export const githubUsername = "MUHSINA25";
