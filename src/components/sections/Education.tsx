import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Card } from '../ui/Card';
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  Code2, 
  TrendingUp,
  BrainCircuit,
  Trophy
} from 'lucide-react';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from 'recharts';

export function Education() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position for the glowing line animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const educationData = [
    {
      year: "2021",
      title: "Secondary Education",
      institution: "West Bengal Board of Secondary Education",
      icon: <BookOpen className="text-white" size={20} />,
      metrics: [
        { label: "Score", value: "694 / 700" },
        { label: "Percentage", value: "99.14%" }
      ],
      description: "Built a strong academic foundation in Mathematics, Science and analytical thinking through outstanding performance in secondary education."
    },
    {
      year: "2023",
      title: "Higher Secondary Education",
      institution: "West Bengal Council of Higher Secondary Education",
      icon: <Award className="text-white" size={20} />,
      metrics: [
        { label: "Stream", value: "Science" },
        { label: "Score", value: "374 / 500" },
        { label: "Percentage", value: "74.8%" }
      ],
      tags: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
      description: "Completed higher secondary education with a Science background, strengthening analytical thinking and computational problem-solving."
    },
    {
      year: "2024",
      title: "West Bengal Joint Entrance Examination",
      institution: "Heritage Institute of Technology, Kolkata",
      icon: <GraduationCap className="text-white" size={20} />,
      metrics: [
        { label: "WBJEE Rank", value: "2521" },
        { label: "Achievement", value: "Secured Admission" }
      ],
      description: "Qualified WBJEE with a competitive rank and began pursuing Computer Science and Engineering."
    },
    {
      year: "Present",
      title: "Bachelor of Technology",
      institution: "Heritage Institute of Technology",
      icon: <Code2 className="text-white" size={20} />,
      metrics: [
        { label: "Branch", value: "Computer Science and Engineering" },
        { label: "Status", value: "Third-Year Undergraduate" }
      ],
      tags: ["Artificial Intelligence", "Machine Learning", "Data Science", "Backend Development"],
      description: "Actively developing practical machine learning projects while exploring backend technologies and modern software engineering practices."
    }
  ];

  const gpaData = [
    { semester: 'Semester I', gpa: 9.72 },
    { semester: 'Semester II', gpa: 9.56 },
    { semester: 'Semester III', gpa: 9.77 },
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass-panel !p-3 !rounded-lg border-white/10 shadow-2xl">
          <p className="text-textSecondary text-xs font-medium uppercase mb-1">{label}</p>
          <p className="text-accent font-bold text-lg">GPA: {payload[0].value}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section id="education" className="py-32 relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-accent-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-2 block">
            Academic Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Education & Academic Excellence
          </h2>
          <p className="text-textSecondary text-lg max-w-3xl mx-auto leading-relaxed">
            My academic journey reflects consistent learning, perseverance, and a passion for technology, culminating in strong university performance and a growing focus on Artificial Intelligence and Machine Learning.
          </p>
        </motion.div>

        {/* PART 1: EDUCATION TIMELINE */}
        <div ref={containerRef} className="relative max-w-5xl mx-auto mb-32">
          
          {/* Background Line (Dimmed) */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2 rounded-full" />
          
          {/* Animated Glowing Line */}
          <motion.div 
            className="absolute left-[28px] md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-accent to-accent-secondary -translate-x-1/2 rounded-full origin-top shadow-[0_0_15px_rgba(59,130,246,0.5)] z-0"
            style={{ height: lineHeight }}
          />

          <div className="space-y-12 md:space-y-24">
            {educationData.map((item, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className="relative flex flex-col md:flex-row items-start md:items-center justify-between group pl-16 md:pl-0">
                  
                  {/* Timeline Node */}
                  <div className="absolute left-[28px] md:left-1/2 top-6 md:top-1/2 w-12 h-12 rounded-full bg-background border-2 border-white/10 -translate-x-1/2 md:-translate-y-1/2 flex items-center justify-center z-20 group-hover:border-accent group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-500">
                    <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      {item.icon}
                    </div>
                  </div>

                  {/* Left Column (Desktop) */}
                  <div className={`w-full md:w-[calc(50%-3rem)] ${isEven ? 'md:text-right' : 'md:order-2 md:text-left'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -30 : 30, y: 20 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                      <Card className="hover:border-white/15">
                        <div className={`flex flex-col ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                          
                          {/* Year Badge */}
                          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4 border border-accent/20">
                            {item.year}
                          </span>
                          
                          <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                          <h4 className="text-lg text-accent-secondary mb-6">{item.institution}</h4>
                          
                          {/* Metrics Grid */}
                          <div className={`grid grid-cols-2 gap-4 w-full mb-6 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                            {item.metrics.map((metric, i) => (
                              <div key={i} className="bg-white/5 rounded-lg p-3">
                                <div className="text-xs text-textSecondary uppercase tracking-wider mb-1">{metric.label}</div>
                                <div className="text-white font-semibold">{metric.value}</div>
                              </div>
                            ))}
                          </div>

                          {/* Tags if present */}
                          {item.tags && (
                            <div className={`flex flex-wrap gap-2 mb-6 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                              {item.tags.map((tag, i) => (
                                <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-xs text-textSecondary border border-white/5">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}

                          <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                            {item.description}
                          </p>
                        </div>
                      </Card>
                    </motion.div>
                  </div>
                  
                  {/* Empty Spacer Column for Desktop */}
                  <div className={`hidden md:block w-full md:w-[calc(50%-3rem)] ${isEven ? 'md:order-2' : ''}`} />
                  
                </div>
              );
            })}
          </div>

          {/* Smooth Transition Element into Dashboard */}
          <div className="relative mt-24 mb-12 flex justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-1 h-24 bg-gradient-to-b from-accent to-transparent rounded-full"
            />
          </div>
        </div>

        {/* PART 2: ACADEMIC PERFORMANCE DASHBOARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto glass-panel p-6 md:p-10 border-white/10"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Academic Performance</h3>
            <p className="text-textSecondary">
              Consistent academic excellence throughout my undergraduate journey.
            </p>
          </div>

          {/* Top Stat Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
            
            {/* Semester I */}
            <motion.div whileHover={{ y: -5, scale: 1.02 }} className="bg-card/50 border border-white/5 rounded-2xl p-6 text-center transition-colors hover:bg-card/80">
              <div className="w-10 h-10 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-4 text-textSecondary">
                <GraduationCap size={20} />
              </div>
              <div className="text-sm text-textSecondary font-medium mb-1">Semester I</div>
              <div className="text-2xl font-bold text-white">9.72</div>
            </motion.div>

            {/* Semester II */}
            <motion.div whileHover={{ y: -5, scale: 1.02 }} className="bg-card/50 border border-white/5 rounded-2xl p-6 text-center transition-colors hover:bg-card/80">
              <div className="w-10 h-10 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-4 text-textSecondary">
                <BookOpen size={20} />
              </div>
              <div className="text-sm text-textSecondary font-medium mb-1">Semester II</div>
              <div className="text-2xl font-bold text-white">9.56</div>
            </motion.div>

            {/* Semester III */}
            <motion.div whileHover={{ y: -5, scale: 1.02 }} className="bg-card/50 border border-white/5 rounded-2xl p-6 text-center transition-colors hover:bg-card/80">
              <div className="w-10 h-10 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-4 text-textSecondary">
                <Award size={20} />
              </div>
              <div className="text-sm text-textSecondary font-medium mb-1">Semester III</div>
              <div className="text-2xl font-bold text-white">9.77</div>
            </motion.div>

            {/* Overall Average */}
            <motion.div whileHover={{ y: -5, scale: 1.02 }} className="bg-card/80 border border-accent/30 rounded-2xl p-6 text-center shadow-[0_0_20px_rgba(59,130,246,0.15)] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent pointer-events-none" />
              <div className="w-10 h-10 mx-auto bg-accent/20 rounded-full flex items-center justify-center mb-4 text-accent relative z-10">
                <TrendingUp size={20} />
              </div>
              <div className="text-sm text-accent-secondary font-medium mb-1 relative z-10">Overall Average</div>
              <div className="text-3xl font-bold text-white relative z-10">9.68+</div>
            </motion.div>

          </div>

          {/* Line Chart */}
          <div className="h-[300px] w-full mb-8 relative">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={gpaData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorGpa" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis 
                  dataKey="semester" 
                  stroke="#9CA3AF" 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false} 
                  dy={10}
                />
                <YAxis 
                  domain={[9.0, 10.0]} 
                  stroke="#9CA3AF" 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false} 
                  dx={0}
                />
                <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(255,255,255,0.1)', strokeWidth: 1 }} />
                <Area 
                  type="monotone" 
                  dataKey="gpa" 
                  stroke="#3B82F6" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorGpa)" 
                  activeDot={{ r: 6, fill: "#06B6D4", stroke: "#fff", strokeWidth: 2 }}
                  animationDuration={1500}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          
          <p className="text-center text-textSecondary text-sm mb-12 max-w-2xl mx-auto">
            Consistently maintaining a GPA above 9.5 while actively pursuing practical projects in Artificial Intelligence, Machine Learning, and Backend Development.
          </p>

          {/* Additional Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 border-t border-white/10 pt-8">
            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
              <div className="bg-white/5 p-3 rounded-lg text-accent mt-1">
                <Code2 size={20} />
              </div>
              <div>
                <div className="text-textSecondary text-xs uppercase tracking-wider mb-1">Current Year</div>
                <div className="font-semibold text-white">Third Year</div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
              <div className="bg-white/5 p-3 rounded-lg text-accent-secondary mt-1">
                <BrainCircuit size={20} />
              </div>
              <div>
                <div className="text-textSecondary text-xs uppercase tracking-wider mb-1">Current Domain</div>
                <div className="font-semibold text-white text-sm">
                  Artificial Intelligence<br/>
                  Machine Learning<br/>
                  Backend Development
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
              <div className="bg-white/5 p-3 rounded-lg text-accent mt-1">
                <Trophy size={20} />
              </div>
              <div>
                <div className="text-textSecondary text-xs uppercase tracking-wider mb-1">Academic Standing</div>
                <div className="font-semibold text-white">High Academic Performance</div>
              </div>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
