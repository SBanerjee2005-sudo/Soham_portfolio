import { motion } from 'framer-motion';
import { experience, education } from '../../data/content';
import { Card } from '../ui/Card';

export function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Experience Timeline */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
            </motion.div>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
              {experience.map((exp, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-accent">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] !p-6">
                    <div className="text-accent text-sm font-medium mb-1">{exp.period}</div>
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <div className="text-white/60 mb-3">{exp.company}</div>
                    <p className="text-textSecondary">{exp.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
            </motion.div>
            
            <Card delay={0.2} className="relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              </div>
              <h3 className="text-2xl font-bold mb-1">{education.degree}</h3>
              <div className="text-accent mb-4">{education.university}</div>
              <div className="text-textSecondary mb-6">{education.period}</div>
              
              <h4 className="font-semibold mb-3">Relevant Coursework:</h4>
              <div className="flex flex-wrap gap-2">
                {education.coursework.map((course, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-white/5 rounded-full text-sm text-textSecondary border border-white/5"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
