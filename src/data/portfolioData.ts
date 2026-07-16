// Centralized, verified portfolio data for Muhsina CT
// Sources: Resume, LinkedIn (linkedin.com/in/muhsinact), GitHub (github.com/MUHSINA25)

export const personal = {
  name: "Muhsina CT",
  roles: ["Data Analyst", "Data Scientist", "AI & Data Science Trainer"],
  tagline:
    "Turning Data into Actionable Insights through Analytics, Machine Learning, and Business Intelligence.",
  location: "Kerala, India",
  email: "muhsinact25@gmail.com",
  linkedin: "https://www.linkedin.com/in/muhsinact",
  github: "https://github.com/MUHSINA25",
  avatar: "/images/avatar-portrait.png",
  resumeUrl: "/resume.html",
};

export const about = {
  summary:
    "I'm Muhsina CT, a data-driven professional who blends the analytical rigor of a Physics background with the practical, business-focused mindset of an MBA in Data Science. As an AI & Data Science Trainer, I mentor aspiring analysts while continuing to build real-world Machine Learning and Business Intelligence solutions.",
  highlights: [
    {
      title: "MSc Physics Graduate",
      desc: "Strong foundation in analytical thinking, mathematics, and scientific problem-solving.",
    },
    {
      title: "MBA in Data Science (Ongoing)",
      desc: "Bridging technical data science skills with strategic business decision-making at Amity University.",
    },
    {
      title: "AI & Data Science Trainer",
      desc: "Mentoring and training students in Python, SQL, Power BI, and Machine Learning at IQJITA Innovative LLP.",
    },
    {
      title: "Passion for Analytics & ML",
      desc: "Deep interest in Data Analytics, Machine Learning, Business Intelligence, and Data Visualization.",
    },
    {
      title: "Teaching & Mentoring",
      desc: "Committed to simplifying complex data concepts and guiding the next generation of data professionals.",
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
      "Train and mentor students in Python, SQL, Power BI, and Machine Learning fundamentals.",
      "Design hands-on curriculum and real-world data analytics assignments.",
      "Guide learners through end-to-end data science project workflows.",
      "Support student career readiness through mentoring and doubt-clearing sessions.",
    ],
    tags: ["Python", "SQL", "Power BI", "Machine Learning", "Mentoring", "Data Analytics"],
  },
  {
    role: "Data Science Intern",
    company: "Evoastra Ventures Pvt Ltd",
    duration: "July 2024 – January 2025",
    points: [
      "Worked on Machine Learning and Deep Learning models for real-world business problems.",
      "Built interactive Power BI dashboards to communicate insights to stakeholders.",
      "Collaborated on multiple end-to-end data science projects from data cleaning to deployment.",
    ],
    tags: ["Machine Learning", "Deep Learning", "Power BI", "Real-world Projects"],
  },
  {
    role: "Data Science Intern",
    company: "Prodigy InfoTech",
    duration: "November 2024 – December 2024",
    points: [
      "Completed a series of applied data science tasks covering EDA, data cleaning, and visualization.",
      "Delivered task-based mini-projects showcasing Python and analytical skills.",
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
      "A machine learning solution that predicts whether an invoice payment will be delayed, using classification models, SMOTE for class imbalance, and GridSearchCV for hyperparameter tuning. Includes an automated preprocessing and prediction pipeline for unseen invoice data.",
    stack: ["Python", "Scikit-learn", "SMOTE", "Random Forest", "GridSearchCV", "Pandas"],
    github: "https://github.com/MUHSINA25/Delayed-Payment-Detector",
    image: "/images/project-payment.jpg",
    featured: true,
  },
  {
    title: "TATA Sales Analysis — Business Performance Insights",
    description:
      "An interactive Power BI dashboard analyzing revenue trends, customer behavior, and global market demand from an online retail dataset — covering monthly revenue trends, top customers, top countries, and product-level revenue mix.",
    stack: ["Power BI", "Data Cleaning", "DAX", "Business Intelligence"],
    github: "https://github.com/MUHSINA25/TATA",
    image: "/images/project-tata.jpg",
    featured: true,
  },
  {
    title: "Health Insurance Fraud Detection",
    description:
      "An AI-based fraud detection system that identifies potentially fraudulent health insurance claims using multiple classification algorithms, complete EDA, model evaluation, and a deployed Streamlit application for real-time predictions.",
    stack: ["Python", "Scikit-learn", "Pandas", "Streamlit", "Ensemble Models"],
    github: "https://github.com/MUHSINA25/health-insurance-fraud-detection",
    demo: "https://health-insurance-fraud-detection-huru8j8rtwlodwvhho5xwe.streamlit.app/",
    image: "/images/project-fraud.jpg",
    featured: true,
  },
  {
    title: "Credit Risk / Loan Approval Classification",
    description:
      "A machine learning model predicting loan default probability using financial, demographic, and credit-related features, with a full pipeline covering EDA, feature selection (RFE, SelectKBest), and model tuning across five algorithms.",
    stack: ["Python", "Random Forest", "Feature Engineering", "EDA"],
    github: "https://github.com/MUHSINA25/Loan-Approval",
    image: "/images/project-loan.jpg",
  },
  {
    title: "COVID-19 Global Dashboard",
    description:
      "A multi-page interactive Power BI dashboard analyzing global COVID-19 spread across six datasets — covering regional trends, monthly case growth, testing rates, and critical case tracking.",
    stack: ["Power BI", "Data Cleaning", "Geo Visualization"],
    github: "https://github.com/MUHSINA25/COVID19",
    image: "/images/project-covid.jpg",
  },
  {
    title: "South India Corporate Analysis Dashboard",
    description:
      "A regional business intelligence dashboard analyzing corporate performance metrics across South Indian companies to support data-driven strategic decisions.",
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
