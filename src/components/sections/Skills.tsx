import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '../ui/Card';
import { 
  Code2, 
  BrainCircuit, 
  Server, 
  Database, 
  Wrench,
  Terminal,
  Cpu,
  Layers,
  Blocks,
  FileJson,
  Network,
  Activity,
  GitBranch,
  Monitor
} from 'lucide-react';

type SkillCategory = 'All' | 'Programming' | 'Machine Learning' | 'Backend' | 'Database' | 'Tools';

export function Skills() {
  const [activeFilter, setActiveFilter] = useState<SkillCategory>('All');

  const filters: SkillCategory[] = [
    'All', 'Programming', 'Machine Learning', 'Backend', 'Database', 'Tools'
  ];

  // Programming Languages with "progress" labels
  const programmingSkills = [
    { name: 'C', level: 'Advanced', percentage: 90 },
    { name: 'Python', level: 'Intermediate', percentage: 75 },
    { name: 'Java', level: 'Intermediate', percentage: 70 },
    { name: 'C++', level: 'Intermediate', percentage: 70 },
    { name: 'SQL', level: 'Intermediate', percentage: 75 },
    { name: 'HTML', level: 'Intermediate', percentage: 75 },
    { name: 'CSS', level: 'Intermediate', percentage: 70 },
  ];

  // Pill badge skills
  const otherCategories = [
    {
      id: 'Machine Learning',
      title: 'Artificial Intelligence & Machine Learning',
      icon: <BrainCircuit size={24} className="text-accent" />,
      skills: ['Machine Learning', 'Data Science', 'Scikit-Learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Feature Engineering', 'Model Evaluation']
    },
    {
      id: 'Backend',
      title: 'Backend Development',
      icon: <Server size={24} className="text-accent-secondary" />,
      skills: ['FastAPI', 'REST APIs', 'Authentication', 'JSON', 'API Integration']
    },
    {
      id: 'Database',
      title: 'Databases',
      icon: <Database size={24} className="text-accent" />,
      skills: ['MySQL', 'SQLite']
    },
    {
      id: 'Tools',
      title: 'Developer Tools',
      icon: <Wrench size={24} className="text-accent-secondary" />,
      skills: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'Linux', 'Anaconda']
    }
  ];

  // A helper function to assign random cool icons to pill badges since generic ones aren't always perfect
  const getPillIcon = (skill: string) => {
    if (['FastAPI', 'REST APIs', 'API Integration'].includes(skill)) return <Network size={14} />;
    if (['MySQL', 'SQLite'].includes(skill)) return <Database size={14} />;
    if (['Git', 'GitHub'].includes(skill)) return <GitBranch size={14} />;
    if (['Linux', 'Anaconda'].includes(skill)) return <Terminal size={14} />;
    if (['VS Code', 'Jupyter Notebook'].includes(skill)) return <Monitor size={14} />;
    if (['Machine Learning', 'Model Evaluation'].includes(skill)) return <Activity size={14} />;
    if (['Data Science', 'Pandas', 'NumPy'].includes(skill)) return <Layers size={14} />;
    if (['JSON', 'Authentication'].includes(skill)) return <FileJson size={14} />;
    return <Blocks size={14} />;
  };

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      
      {/* Subtle Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-2 block">
            Technical Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & Technologies
          </h2>
          <p className="text-textSecondary text-lg max-w-3xl mx-auto">
            A collection of programming languages, frameworks, tools, and technologies that I use to design, develop, and deploy intelligent software solutions.
          </p>
        </motion.div>

        {/* Filter Buttons */}
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
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-accent rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {filter}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-20 min-h-[400px]">
          <AnimatePresence mode="popLayout">
            
            {/* Programming Languages Category */}
            {(activeFilter === 'All' || activeFilter === 'Programming') && (
              <motion.div
                key="Programming"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="col-span-1 md:col-span-2 xl:col-span-3 mb-8"
              >
                <Card className="hover:border-accent/30 transition-colors h-full bg-card/60">
                  <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-6">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                      <Code2 size={24} />
                    </div>
                    <h3 className="text-2xl font-bold">Programming Languages</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-8">
                    {programmingSkills.map((skill, index) => (
                      <div key={skill.name} className="flex flex-col gap-2">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-white">{skill.name}</span>
                          <span className="text-xs text-textSecondary uppercase tracking-wider">{skill.level}</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.percentage}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                            className="h-full bg-gradient-to-r from-accent to-accent-secondary rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            )}

            {/* Other Categories */}
            {otherCategories.map((category) => {
              if (activeFilter !== 'All' && activeFilter !== category.id) return null;
              
              return (
                <motion.div
                  key={category.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="h-full"
                >
                  <Card className="hover:border-white/20 transition-colors h-full bg-card/60">
                    <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-6">
                      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                        {category.icon}
                      </div>
                      <h3 className="text-xl font-bold">{category.title}</h3>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill) => (
                        <motion.div
                          key={skill}
                          whileHover={{ y: -3, scale: 1.05 }}
                          className="group relative flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-textSecondary hover:text-white hover:border-accent/50 cursor-default transition-all duration-300"
                        >
                          <div className="absolute inset-0 bg-accent/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <span className="text-accent/70 group-hover:text-accent transition-colors relative z-10">
                            {getPillIcon(skill)}
                          </span>
                          <span className="relative z-10">{skill}</span>
                        </motion.div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Current Focus Highlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto rounded-3xl p-[1px] overflow-hidden"
        >
          {/* Animated Glowing Border */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent via-accent-secondary to-accent animate-pulse opacity-50" />
          
          <div className="relative bg-card rounded-3xl p-8 md:p-12 text-center backdrop-blur-xl border border-white/5">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-accent/20 to-accent-secondary/20 rounded-2xl flex items-center justify-center mb-6">
              <Cpu size={32} className="text-accent" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Current Focus</h3>
            <p className="text-textSecondary text-lg leading-relaxed max-w-3xl mx-auto">
              I am currently strengthening my expertise in Artificial Intelligence, Machine Learning, Data Science, and Backend Development by building real-world projects, exploring modern frameworks, and continuously improving my problem-solving skills through practical implementation.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
