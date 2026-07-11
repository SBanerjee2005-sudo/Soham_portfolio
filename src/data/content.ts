import { Brain, Terminal, Server, LineChart } from 'lucide-react';

export const personalInfo = {
  name: "Alex Chen",
  role: "Computer Science Undergraduate",
  tagline: "Exploring the intersection of AI, Data Science, and Scalable Backend Systems.",
  bio: "I'm a junior CS student passionate about building intelligent systems. My focus is on leveraging Machine Learning to solve real-world problems while ensuring the backend infrastructure can scale efficiently.",
  email: "alex.chen.mock@example.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com"
};

export const skills = [
  {
    category: "AI & Machine Learning",
    icon: Brain,
    items: ["PyTorch", "TensorFlow", "Scikit-Learn", "Computer Vision", "NLP"]
  },
  {
    category: "Data Science",
    icon: LineChart,
    items: ["Pandas", "NumPy", "Matplotlib", "SQL", "Jupyter"]
  },
  {
    category: "Backend Development",
    icon: Server,
    items: ["Node.js", "Express", "Python", "FastAPI", "PostgreSQL", "MongoDB"]
  },
  {
    category: "Tools & DevOps",
    icon: Terminal,
    items: ["Git", "Docker", "AWS (EC2, S3)", "Linux", "CI/CD"]
  }
];

export const projects = [
  {
    title: "NeuroVision: Medical Image Analyzer",
    description: "A deep learning application that assists radiologists in detecting anomalies in MRI scans with 94% accuracy. Built a custom ResNet architecture using PyTorch.",
    tags: ["PyTorch", "Python", "FastAPI", "React"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Scalable Data Pipeline for IoT",
    description: "Designed a high-throughput data pipeline to process and aggregate thousands of sensor events per second. Utilized Apache Kafka and deployed on AWS.",
    tags: ["Node.js", "Kafka", "AWS", "PostgreSQL"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Predictive Analytics Dashboard",
    description: "An interactive dashboard visualizing real-time machine learning predictions for e-commerce sales trends. Backend served via FastAPI.",
    tags: ["React", "TypeScript", "FastAPI", "Scikit-Learn"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Autonomous Agent Framework",
    description: "An experimental framework for deploying LLM-based autonomous agents to perform web research and summarize data automatically.",
    tags: ["Python", "LangChain", "OpenAI API", "Docker"],
    githubUrl: "#",
    liveUrl: "#"
  }
];

export const experience = [
  {
    role: "Software Engineering Intern (Backend)",
    company: "TechNova Solutions",
    period: "May 2023 - Aug 2023",
    description: "Optimized database queries reducing latency by 30%. Developed RESTful APIs for the main customer portal using Node.js and PostgreSQL."
  },
  {
    role: "Research Assistant (Machine Learning)",
    company: "University AI Lab",
    period: "Jan 2023 - Present",
    description: "Assisting in research on self-supervised learning techniques for natural language processing. Co-authored a paper submitted to NeurIPS workshop."
  }
];

export const education = {
  degree: "B.S. in Computer Science",
  university: "State University",
  period: "Expected Graduation: May 2025",
  coursework: ["Data Structures & Algorithms", "Machine Learning", "Database Systems", "Operating Systems", "Artificial Intelligence"]
};
