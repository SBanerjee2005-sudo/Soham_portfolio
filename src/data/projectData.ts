export interface ProjectDetails {
  id: string;
  title: string;
  category: string;
  description: string;
  overview: string;
  features: string[];
  technologies: string[];
  isMachineLearning: boolean;
  links: {
    github: string;
    demo: string;
  };
  role?: string;
  demoNote?: string;
  githubNote?: string;
  modelInfo?: {
    algorithm: string;
    dataset: string;
    accuracy?: string;
    precision?: string;
    recall?: string;
    f1?: string;
    r2?: string;
  };
  lessonsLearned?: string;
  challenges?: string;
}

export const projectData: Record<string, ProjectDetails> = {
  'creditwise': {
    id: 'creditwise',
    title: 'CreditWise Loan System',
    category: 'Machine Learning',
    description: 'A machine learning application that predicts whether a loan application is likely to be approved based on customer information.',
    overview: 'CreditWise addresses the financial sector’s need for rapid and consistent loan approval decisions. By leveraging historical customer data, this project aims to predict loan defaults and approvals with high accuracy, ultimately reducing risk for lenders while providing faster feedback to applicants.',
    features: [
      'Loan Approval Prediction',
      'Confidence Score',
      'Random Forest Classifier',
      'Interactive Streamlit Interface',
      'Applicant Risk Assessment'
    ],
    technologies: ['Python', 'Streamlit', 'Scikit-learn', 'Pandas', 'NumPy', 'Joblib'],
    isMachineLearning: true,
    links: {
      github: 'https://github.com/SBanerjee2005-sudo/Creditwise_Loan_Approval_System',
      demo: 'https://creditwise-loan-approval-predictor-platform.streamlit.app/'
    },
    modelInfo: {
      algorithm: '[Placeholder: Random Forest Classifier]',
      dataset: '[Placeholder: Financial Risk Dataset]',
      accuracy: '[Placeholder: 85%]',
      precision: '[Placeholder: 82%]',
      recall: '[Placeholder: 88%]',
      f1: '[Placeholder: 85%]'
    },
    lessonsLearned: 'This project improved my understanding of data preprocessing, feature engineering, model training, and evaluation using Scikit-learn. It also gave me hands-on experience building and deploying a Streamlit application with Git and GitHub while creating a clean, user-friendly interface.',
    challenges: 'The main challenges were selecting the right features, improving model performance through feature engineering, and ensuring consistent data preprocessing during prediction. Deploying the trained model with Streamlit and managing the required project dependencies also provided valuable practical experience.'
  },
  'shopsmart': {
    id: 'shopsmart',
    title: 'ShopSmart Purchase Prediction',
    category: 'Machine Learning',
    description: 'Predicts whether an online customer is likely to complete a purchase based on browsing behaviour and session information.',
    overview: 'ShopSmart focuses on the e-commerce industry, attempting to maximize conversion rates by identifying high-intent shoppers. By analyzing session duration, pages visited, and exit rates, the system helps businesses proactively target hesitant customers with discounts or personalized interventions.',
    features: [
      'Interactive Prediction',
      'Data Preprocessing',
      'Classification Model',
      'Visual Analytics'
    ],
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Streamlit'],
    isMachineLearning: true,
    links: {
      github: '#',
      demo: '#'
    },
    modelInfo: {
      algorithm: '[Placeholder: Gradient Boosting]',
      dataset: '[Placeholder: E-commerce Shopper Intent]',
      accuracy: '[Placeholder: 89%]',
      f1: '[Placeholder: 87%]'
    }
  },
  'novagen': {
    id: 'novagen',
    title: 'NovaGen Health Classification',
    category: 'Machine Learning',
    description: 'A health classification system that predicts health status using patient-related features.',
    overview: 'NovaGen was built to assist healthcare professionals in early disease detection and diagnosis. By processing diverse patient vitals and historical health records, the model provides an initial health classification, helping doctors prioritize critical cases and reduce diagnostic latency.',
    features: [
      'Interactive Prediction',
      'Classification Model',
      'Performance Evaluation'
    ],
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
    isMachineLearning: true,
    links: {
      github: '#',
      demo: '#'
    },
    modelInfo: {
      algorithm: '[Placeholder: Support Vector Machine]',
      dataset: '[Placeholder: Clinical Records Dataset]',
      accuracy: '[Placeholder: 92%]',
      precision: '[Placeholder: 94%]',
      recall: '[Placeholder: 91%]'
    }
  },
  'medisync': {
    id: 'medisync',
    title: 'MediSync – Hospital Management System',
    category: 'Collaborative Full Stack Project',
    role: 'Backend Developer',
    description: 'MediSync is a collaborative Hospital Management System developed to streamline healthcare management through an intuitive web application.\nMy primary contribution was designing and implementing the backend services, REST APIs, and server-side functionality that power the application.',
    overview: 'MediSync is a collaborative Hospital Management System designed to streamline healthcare operations through a modern and user-friendly web application. My primary responsibility in this project was backend development using FastAPI. I designed and implemented RESTful APIs, managed the application\'s database using SQLite, integrated the backend with Supabase for cloud database services, and deployed the application on Render. Through this project, I gained practical experience in backend architecture, API development, database integration, cloud deployment, and collaborating within a full-stack development team.',
    features: [
      'Dashboard',
      'Appointments',
      'Patient Management',
      'Doctor Management',
      'Billing',
      'Responsive UI'
    ],
    technologies: ['Python', 'FastAPI', 'REST APIs'],
    isMachineLearning: false,
    links: {
      github: 'https://github.com/SBanerjee2005-sudo/HOSPITALMANAGEMENT',
      demo: 'https://medisync-frontend-icwy.onrender.com'
    },
    demoNote: 'This live demo showcases the complete collaborative application. My primary contribution to this project was backend development.',
    githubNote: 'This repository is a fork of the original collaborative project. My work focused on backend development and my contributions are available in this repository.'
  }
};
