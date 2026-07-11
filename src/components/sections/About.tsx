import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { User, GraduationCap, MapPin, Code2, Globe, BookOpen } from 'lucide-react';

export function About() {
  const infoData = [
    { icon: <User size={18} />, label: "Name", value: "Soham Banerjee" },
    { icon: <GraduationCap size={18} />, label: "Current Status", value: "Third-Year Undergraduate" },
    { icon: <MapPin size={18} />, label: "College", value: "Heritage Institute of Technology, Kolkata" },
    { icon: <BookOpen size={18} />, label: "Branch", value: "Computer Science and Engineering" },
  ];

  const interests = ["Artificial Intelligence", "Machine Learning", "Data Science", "Backend Development"];
  const languages = ["English", "Bengali", "Hindi"];
  const hobbies = ["Reading Newspapers", "Reading Story Books"];

  const stats = [
    { title: "Current CGPA", value: "9.68+" },
    { title: "WBJEE Rank", value: "2521" },
    { title: "ML Projects", value: "Growing Portfolio" },
    { title: "Current Focus", value: "AI • ML • Backend" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center md:text-left"
        >
          <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-2 block">
            Get to know me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            About Me
          </h2>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT COLUMN: Info Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <Card className="h-full bg-card/60">
              <div className="space-y-6">
                
                {/* Basic Info */}
                <div className="space-y-4 pb-6 border-b border-white/10">
                  {infoData.map((item, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                      <div className="flex items-center gap-2 text-textSecondary w-40 shrink-0">
                        <span className="text-accent">{item.icon}</span>
                        <span className="text-sm">{item.label}</span>
                      </div>
                      <div className="text-white font-medium">
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Interests */}
                <div className="pb-6 border-b border-white/10">
                  <div className="text-textSecondary text-sm flex items-center gap-2 mb-3">
                    <Code2 size={18} className="text-accent" />
                    Current Interests
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {interests.map(interest => (
                      <span key={interest} className="px-3 py-1 bg-white/5 rounded-md text-sm text-white/90">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Languages & Hobbies */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <div className="text-textSecondary text-sm flex items-center gap-2 mb-3">
                      <Globe size={18} className="text-accent" />
                      Languages
                    </div>
                    <ul className="space-y-1">
                      {languages.map(lang => (
                        <li key={lang} className="text-white/90 text-sm flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent-secondary/50" />
                          {lang}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-textSecondary text-sm flex items-center gap-2 mb-3">
                      <BookOpen size={18} className="text-accent" />
                      Hobbies
                    </div>
                    <ul className="space-y-1">
                      {hobbies.map(hobby => (
                        <li key={hobby} className="text-white/90 text-sm flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent-secondary/50" />
                          {hobby}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </Card>
          </motion.div>

          {/* RIGHT COLUMN: Description & Stats */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            {/* Description Text */}
            <div className="prose prose-invert prose-lg max-w-none text-slate-400 leading-relaxed mb-10">
              <p>
                I am Soham Banerjee, a third-year Computer Science and Engineering undergraduate at Heritage Institute of Technology, Kolkata.
              </p>
              <p>
                I am passionate about Artificial Intelligence, Machine Learning, Data Science, and Backend Development. I enjoy building intelligent software systems that solve real-world problems through data-driven decision-making.
              </p>
              <p>
                I am continuously learning modern technologies and improving my problem-solving skills through hands-on projects and practical implementation.
              </p>
              <p>
                My goal is to become a skilled Data Scientist capable of designing intelligent systems that create meaningful impact.
              </p>
              <p>
                Outside academics, I enjoy reading newspapers and story books, which help broaden my knowledge and perspective.
              </p>
            </div>

            {/* 4 Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-auto">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-card/60 backdrop-blur-md border border-white/5 rounded-2xl p-4 text-center shadow-lg transition-colors hover:bg-card/80 flex flex-col justify-center items-center h-full"
                >
                  <div className="text-textSecondary text-xs font-medium uppercase tracking-wider mb-2">
                    {stat.title}
                  </div>
                  <div className="text-white font-bold text-lg md:text-xl leading-tight">
                    {stat.value}
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
