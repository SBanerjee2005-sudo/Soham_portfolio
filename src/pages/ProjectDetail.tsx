import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectData } from '../data/projectData';
import { Card } from '../components/ui/Card';
import { GithubIcon } from '../components/ui/icons';
import { 
  ArrowLeft, 
  ExternalLink, 
  CheckCircle2, 
  Code2,
  Database,
  GitBranch,
  Settings,
  Activity,
  LineChart,
  Target,
  Image as ImageIcon,
  AlertTriangle,
  Lightbulb,
  Rocket,
  BrainCircuit
} from 'lucide-react';
import { useEffect } from 'react';

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectData[id] : null;

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="min-h-screen pt-32 pb-20 relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* 1. Hero Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <Link to="/#projects" className="inline-flex items-center gap-2 text-textSecondary hover:text-white transition-colors mb-8">
            <ArrowLeft size={16} />
            Back to Projects
          </Link>
          
          <div className="flex items-center gap-4 mb-6 flex-wrap">
            <span className="px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold uppercase tracking-wider border border-accent/20">
              {project.category}
            </span>
            {project.role && (
              <span className="px-4 py-1.5 rounded-full bg-accent-secondary/10 text-accent-secondary text-sm font-semibold uppercase tracking-wider border border-accent-secondary/20">
                My Contribution: {project.role}
              </span>
            )}
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {project.title}
          </h1>
          
          <p className="text-xl text-textSecondary leading-relaxed mb-10 max-w-3xl">
            {project.description}
          </p>
          
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-4">
              <a 
                href={project.links.demo}
                target={project.links.demo !== '#' ? '_blank' : '_self'}
                rel={project.links.demo !== '#' ? 'noopener noreferrer' : undefined}
                className="px-6 py-3 bg-accent hover:bg-accent/90 text-white font-semibold rounded-xl flex items-center gap-2 transition-colors shadow-lg shadow-accent/20"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
              <a 
                href={project.links.github} 
                target={project.links.github !== '#' ? '_blank' : '_self'}
                rel={project.links.github !== '#' ? 'noopener noreferrer' : undefined}
                className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl flex items-center gap-2 border border-white/10 transition-colors"
              >
                <GithubIcon width={18} height={18} />
                GitHub Repository
              </a>
            </div>
            
            {(project.demoNote || project.githubNote) && (
              <div className="flex flex-col gap-3 text-sm text-textSecondary italic border-l-2 border-white/10 pl-4">
                {project.demoNote && <p>💡 {project.demoNote}</p>}
                {project.githubNote && <p>💡 {project.githubNote}</p>}
              </div>
            )}
          </div>
        </motion.div>

        <hr className="border-white/10 mb-16" />

        {/* 2. Project Overview */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Project Overview</h2>
          <p className="text-textSecondary text-lg leading-relaxed">
            {project.overview}
          </p>
        </motion.section>

        {/* 3. Key Features & 4. Technology Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
            <Card className="bg-card/40 p-6 h-full">
              <ul className="space-y-4">
                {project.features.map(feature => (
                  <li key={feature} className="flex items-start gap-3 text-textSecondary">
                    <CheckCircle2 size={20} className="text-accent shrink-0 mt-0.5" />
                    <span className="text-white/90">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">Technology Stack</h2>
            <Card className="bg-card/40 p-6 h-full">
              <div className="flex flex-wrap gap-3">
                {project.technologies.map(tech => (
                  <span key={tech} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-white flex items-center gap-2">
                    <Code2 size={14} className="text-accent-secondary" />
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          </motion.section>
        </div>

        {/* 5. Machine Learning Workflow (Conditional) */}
        {project.isMachineLearning && (
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Machine Learning Workflow</h2>
            
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2" />
              
              {[
                { label: 'Dataset', icon: <Database size={20} /> },
                { label: 'Data Cleaning', icon: <Settings size={20} /> },
                { label: 'Feature Engineering', icon: <GitBranch size={20} /> },
                { label: 'Train-Test Split', icon: <Activity size={20} /> },
                { label: 'Model Training', icon: <BrainCircuit size={20} /> },
                { label: 'Evaluation', icon: <LineChart size={20} /> },
                { label: 'Prediction', icon: <Target size={20} /> },
              ].map((step, idx) => (
                <div key={idx} className="relative flex w-full py-6">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-card rounded-full border-2 border-accent flex items-center justify-center z-10 text-accent shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                    {step.icon}
                  </div>
                  
                  {idx % 2 === 0 ? (
                    <div className="w-1/2 pr-12 text-right flex justify-end items-center">
                      <span className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-lg font-semibold text-white shadow-lg">
                        {step.label}
                      </span>
                    </div>
                  ) : (
                    <div className="w-1/2 ml-auto pl-12 text-left flex justify-start items-center">
                      <span className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-lg font-semibold text-white shadow-lg">
                        {step.label}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* 6. Model Information (Conditional) */}
        {project.isMachineLearning && project.modelInfo && (
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Model Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              
              <Card className="bg-card/40 p-5 border-white/5">
                <p className="text-xs text-textSecondary uppercase tracking-wider mb-1">Algorithm</p>
                <p className="text-sm font-semibold text-white">{project.modelInfo.algorithm}</p>
              </Card>
              
              <Card className="bg-card/40 p-5 border-white/5">
                <p className="text-xs text-textSecondary uppercase tracking-wider mb-1">Dataset</p>
                <p className="text-sm font-semibold text-white">{project.modelInfo.dataset}</p>
              </Card>
              
              {project.modelInfo.accuracy && (
                <Card className="bg-card/40 p-5 border-accent/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-accent/5 pointer-events-none" />
                  <p className="text-xs text-accent uppercase tracking-wider mb-1">Accuracy</p>
                  <p className="text-2xl font-bold text-white">{project.modelInfo.accuracy}</p>
                </Card>
              )}

              {project.modelInfo.precision && (
                <Card className="bg-card/40 p-5 border-white/5">
                  <p className="text-xs text-textSecondary uppercase tracking-wider mb-1">Precision</p>
                  <p className="text-xl font-bold text-white">{project.modelInfo.precision}</p>
                </Card>
              )}

              {project.modelInfo.recall && (
                <Card className="bg-card/40 p-5 border-white/5">
                  <p className="text-xs text-textSecondary uppercase tracking-wider mb-1">Recall</p>
                  <p className="text-xl font-bold text-white">{project.modelInfo.recall}</p>
                </Card>
              )}

              {project.modelInfo.f1 && (
                <Card className="bg-card/40 p-5 border-white/5">
                  <p className="text-xs text-textSecondary uppercase tracking-wider mb-1">F1 Score</p>
                  <p className="text-xl font-bold text-white">{project.modelInfo.f1}</p>
                </Card>
              )}

            </div>
          </motion.section>
        )}

        {/* 7. Screenshots Gallery */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <div key={i} className="aspect-video bg-white/5 rounded-2xl border border-white/10 flex flex-col items-center justify-center text-textSecondary relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <ImageIcon size={32} className="mb-2 opacity-50" />
                <span className="text-sm font-medium">Screenshot Placeholder {i}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 8. Challenges & Learnings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/40 p-8 h-full border-white/5 hover:border-red-500/20 transition-colors">
              <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center text-red-500 mb-6">
                <AlertTriangle size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Challenges</h3>
              <p className="text-textSecondary leading-relaxed">
                {project.challenges || "Throughout the development lifecycle, ensuring optimal performance and handling complex state management presented significant hurdles. Balancing the model's accuracy with computational efficiency required meticulous tuning, while integrating diverse architectural patterns demanded strict attention to clean code principles."}
              </p>
            </Card>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/40 p-8 h-full border-white/5 hover:border-accent/20 transition-colors">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6">
                <Lightbulb size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Lessons Learned</h3>
              <p className="text-textSecondary leading-relaxed">
                {project.lessonsLearned || "This project reinforced the importance of modular architecture and robust data pipelines. Deeply analyzing model behavior under varied inputs highlighted edge cases early, while implementing full-stack solutions solidified an understanding of seamless client-server communication and rigorous testing methodologies."}
              </p>
            </Card>
          </motion.section>
        </div>

        {/* 9. Future Improvements */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="bg-card/40 p-8 border-white/5">
            <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-6">
              <div className="w-12 h-12 bg-accent-secondary/10 rounded-xl flex items-center justify-center text-accent-secondary">
                <Rocket size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Future Improvements</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Deploy online for public access',
                'Improve UI/UX with micro-interactions',
                'Add robust authentication workflows',
                'Increase model performance and scalability',
                'Optimize backend query efficiency',
                'Integrate CI/CD pipelines'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
                  <div className="w-2 h-2 rounded-full bg-accent-secondary" />
                  <span className="text-sm font-medium text-white/90">{item}</span>
                </div>
              ))}
            </div>
          </Card>
        </motion.section>

      </div>
    </main>
  );
}
