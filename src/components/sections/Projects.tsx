import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card } from '../ui/Card';
import { GithubIcon } from '../ui/icons';
import { 
  ExternalLink, 
  ArrowRight,
  Landmark,
  ShoppingCart,
  Activity,
  Building2,
  CheckCircle2,
  Code2
} from 'lucide-react';

type ProjectCategory = 'All' | 'Machine Learning' | 'Full Stack';

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All');

  const filters: ProjectCategory[] = ['All', 'Machine Learning', 'Full Stack'];

  const projects = [
    {
      id: 'creditwise',
      title: "CreditWise Loan System",
      category: "Machine Learning",
      icon: <Landmark size={32} className="text-accent" />,
      description: "A machine learning application that predicts whether a loan application is likely to be approved based on customer information.",
      technologies: ["Python", "Streamlit", "Scikit-learn", "Pandas", "NumPy", "Joblib"],
      features: [
        "Loan Approval Prediction",
        "Confidence Score",
        "Random Forest Classifier",
        "Interactive Streamlit Interface",
        "Applicant Risk Assessment"
      ],
      links: {
        demo: "https://creditwise-loan-approval-predictor-platform.streamlit.app/",
        github: "https://github.com/SBanerjee2005-sudo/Creditwise_Loan_Approval_System",
      }
    },
    {
      id: 'shopsmart',
      title: "ShopSmart Purchase Prediction",
      category: "Machine Learning",
      icon: <ShoppingCart size={32} className="text-accent-secondary" />,
      description: "Predicts whether an online customer is likely to complete a purchase based on browsing behaviour and session information.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Streamlit"],
      features: [
        "Interactive prediction",
        "Data preprocessing",
        "Classification model",
        "Visual analytics"
      ],
      links: {
        demo: "#",
        github: "#",
      }
    },
    {
      id: 'novagen',
      title: "NovaGen Health Classification",
      category: "Machine Learning",
      icon: <Activity size={32} className="text-accent" />,
      description: "A health classification system that predicts health status using patient-related features.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
      features: [
        "Interactive prediction",
        "Classification model",
        "Performance evaluation"
      ],
      links: {
        demo: "#",
        github: "#",
      }
    },
    {
      id: 'medisync',
      title: "MediSync – Hospital Management System",
      category: "Collaborative Full Stack Project",
      icon: <Building2 size={32} className="text-accent-secondary" />,
      description: "MediSync is a collaborative Hospital Management System developed to streamline healthcare management through an intuitive web application.",
      technologies: ["Python", "FastAPI", "REST APIs"],
      features: [
        "Dashboard",
        "Appointments",
        "Patient Management",
        "Doctor Management",
        "Billing",
        "Responsive UI"
      ],
      links: {
        demo: "https://medisync-frontend-icwy.onrender.com",
        github: "https://github.com/SBanerjee2005-sudo/HOSPITALMANAGEMENT",
      }
    }
  ];

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-accent-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-2 block">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured Projects
          </h2>
          <p className="text-textSecondary text-lg max-w-3xl mx-auto leading-relaxed">
            A collection of practical Machine Learning and Full-Stack applications that demonstrate my ability to solve real-world problems using Artificial Intelligence, Machine Learning, Data Science, and Backend Development.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === filter 
                  ? 'text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]' 
                  : 'text-textSecondary hover:text-white bg-white/5 border border-white/5'
              }`}
            >
              {activeFilter === filter && (
                <motion.div
                  layoutId="activeProjectFilter"
                  className="absolute inset-0 bg-accent rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[600px]">
          <AnimatePresence mode="popLayout">
            {projects.map((project, index) => {
              if (activeFilter !== 'All' && activeFilter !== project.category) return null;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="h-full"
                >
                  <Card className="h-full bg-card/60 hover:border-accent/30 transition-all duration-300 group flex flex-col hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(59,130,246,0.1)]">
                    
                    {/* Card Header */}
                    <div className="flex items-start justify-between mb-6 pb-6 border-b border-white/10 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl pointer-events-none" />
                      
                      <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-accent/30 group-hover:bg-accent/10 transition-colors relative z-10">
                        {project.icon}
                      </div>
                      
                      <span className="px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider border border-accent/20 relative z-10">
                        {project.category}
                      </span>
                    </div>

                    {/* Card Body */}
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-textSecondary leading-relaxed mb-6 flex-1">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="mb-6">
                        <div className="text-xs text-white/50 uppercase tracking-wider font-semibold mb-3 flex items-center gap-2">
                          <Code2 size={14} /> Technologies
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map(tech => (
                            <span key={tech} className="px-3 py-1 bg-white/5 rounded-md text-xs text-textSecondary border border-white/5">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-8">
                        <div className="text-xs text-white/50 uppercase tracking-wider font-semibold mb-3 flex items-center gap-2">
                          <CheckCircle2 size={14} /> Key Features
                        </div>
                        <ul className="grid grid-cols-1 gap-2">
                          {project.features.map(feature => (
                            <li key={feature} className="flex items-start gap-2 text-sm text-textSecondary">
                              <span className="text-accent-secondary mt-1">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Card Footer (Buttons) */}
                    <div className="pt-6 border-t border-white/10 flex flex-wrap gap-3">
                      
                      <a 
                        href={project.links.demo}
                        target={project.links.demo !== '#' ? '_blank' : '_self'}
                        rel={project.links.demo !== '#' ? 'noopener noreferrer' : undefined} 
                        className="flex-1 min-w-[120px] px-4 py-2.5 bg-accent hover:bg-accent/90 text-white text-sm font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors shadow-lg shadow-accent/20"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                      
                      <a 
                        href={project.links.github}
                        target={project.links.github !== '#' ? '_blank' : '_self'}
                        rel={project.links.github !== '#' ? 'noopener noreferrer' : undefined}
                        className="px-4 py-2.5 bg-white/5 hover:bg-white/10 text-white text-sm font-semibold rounded-lg flex items-center justify-center gap-2 border border-white/10 transition-colors"
                      >
                        <GithubIcon width={16} height={16} />
                        GitHub
                      </a>
                      
                      <Link 
                        to={`/projects/${project.id}`}
                        className="px-4 py-2.5 bg-transparent hover:bg-white/5 text-textSecondary hover:text-white text-sm font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors"
                      >
                        Details
                        <ArrowRight size={16} />
                      </Link>

                    </div>
                    
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
