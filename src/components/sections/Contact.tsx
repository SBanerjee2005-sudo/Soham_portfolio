import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { GithubIcon, LinkedinIcon } from '../ui/icons';
import { 
  Mail, 
  Phone, 
  GraduationCap, 
  User, 
  Code2, 
  Send,
  MessageSquare,
  Sparkles
} from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the mailto link
    const mailtoSubject = encodeURIComponent(`${formData.subject} - from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:soham0405@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    
    // Optional: clear form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -left-1/4 w-[600px] h-[600px] bg-accent-secondary/5 rounded-full blur-[120px] pointer-events-none" />

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
            Let's Connect
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In Touch
          </h2>
          <p className="text-textSecondary text-lg max-w-2xl mx-auto leading-relaxed">
            Thank you for visiting my portfolio. I am always open to discussing internship opportunities, collaborations, Artificial Intelligence, Machine Learning, Data Science, Backend Development, and exciting software engineering ideas. Feel free to connect with me through the following platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Contact Information (7 Cards) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <Card className="bg-card/40 p-5 border-white/5 flex items-center gap-4 hover:border-accent/30 transition-colors">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-textSecondary shrink-0">
                  <User size={18} />
                </div>
                <div>
                  <p className="text-xs text-textSecondary uppercase tracking-wider mb-0.5">Name</p>
                  <p className="text-sm font-semibold text-white">Soham Banerjee</p>
                </div>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
              <a href="mailto:soham0405@gmail.com" className="block outline-none">
                <Card className="bg-card/40 p-5 border-white/5 flex items-center gap-4 hover:border-accent/30 hover:bg-accent/5 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-accent shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-textSecondary uppercase tracking-wider mb-0.5">Email</p>
                    <p className="text-sm font-semibold text-white">soham0405@gmail.com</p>
                  </div>
                </Card>
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <a href="tel:+919674342053" className="block outline-none">
                <Card className="bg-card/40 p-5 border-white/5 flex items-center gap-4 hover:border-accent/30 hover:bg-accent/5 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-accent shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-textSecondary uppercase tracking-wider mb-0.5">Phone</p>
                    <p className="text-sm font-semibold text-white">+91 9674342053</p>
                  </div>
                </Card>
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.25 }}>
              <a href="https://www.linkedin.com/in/soham-banerjee-a77078312" target="_blank" rel="noopener noreferrer" className="block outline-none">
                <Card className="bg-card/40 p-5 border-white/5 flex items-center gap-4 hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/10 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#0A66C2] shrink-0">
                    <LinkedinIcon width={18} height={18} />
                  </div>
                  <div>
                    <p className="text-xs text-textSecondary uppercase tracking-wider mb-0.5">LinkedIn</p>
                    <p className="text-sm font-semibold text-white truncate max-w-[200px] sm:max-w-full">linkedin.com/in/soham-banerjee</p>
                  </div>
                </Card>
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <a href="https://github.com/SBanerjee2005-sudo" target="_blank" rel="noopener noreferrer" className="block outline-none">
                <Card className="bg-card/40 p-5 border-white/5 flex items-center gap-4 hover:border-white/30 hover:bg-white/5 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white shrink-0">
                    <GithubIcon width={18} height={18} />
                  </div>
                  <div>
                    <p className="text-xs text-textSecondary uppercase tracking-wider mb-0.5">GitHub</p>
                    <p className="text-sm font-semibold text-white truncate max-w-[200px] sm:max-w-full">github.com/SBanerjee2005-sudo</p>
                  </div>
                </Card>
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.35 }}>
              <Card className="bg-card/40 p-5 border-white/5 flex items-center gap-4 hover:border-accent/30 transition-colors">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-textSecondary shrink-0">
                  <GraduationCap size={18} />
                </div>
                <div>
                  <p className="text-xs text-textSecondary uppercase tracking-wider mb-0.5">College</p>
                  <p className="text-sm font-semibold text-white">Heritage Institute of Technology</p>
                  <p className="text-xs text-textSecondary mt-0.5">Kolkata, West Bengal, India</p>
                </div>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
              <Card className="bg-card/40 p-5 border-white/5 flex items-center gap-4 hover:border-accent/30 transition-colors">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-accent shrink-0">
                  <Code2 size={18} />
                </div>
                <div>
                  <p className="text-xs text-textSecondary uppercase tracking-wider mb-0.5">Current Status</p>
                  <p className="text-sm font-semibold text-white">Third-Year B.Tech Student</p>
                  <p className="text-xs text-textSecondary mt-1 leading-relaxed">
                    Computer Science & Engineering<br/>
                    Aspiring Data Scientist | AI & Machine Learning Enthusiast
                  </p>
                </div>
              </Card>
            </motion.div>

          </div>

          {/* Right Column: Contact Form & Call to Action */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <Card className="bg-card/40 p-8 border-white/5">
                <div className="flex items-center gap-3 mb-8">
                  <MessageSquare size={20} className="text-accent" />
                  <h3 className="text-xl font-bold text-white">Send a Message</h3>
                </div>
                
                <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-sm font-medium text-textSecondary">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="John Doe"
                        className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-sm font-medium text-textSecondary">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="john@example.com"
                        className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                      />
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="text-sm font-medium text-textSecondary">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      placeholder="Internship Opportunity"
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-medium text-textSecondary">Message</label>
                    <textarea 
                      id="message" 
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Hello Soham, I would like to discuss..."
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                    />
                  </div>

                  <div className="mt-2">
                    <button 
                      type="submit" 
                      className="w-full sm:w-auto px-8 py-3.5 bg-accent hover:bg-accent/90 text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-accent/20"
                    >
                      <Send size={18} />
                      Send Message
                    </button>
                  </div>
                </form>
              </Card>
            </motion.div>

            {/* Call To Action Card */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <div className="relative p-[1px] rounded-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-accent via-accent-secondary to-accent opacity-50 blur-sm group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                <Card className="relative bg-card p-8 rounded-2xl h-full border-none">
                  <div className="flex items-center gap-3 mb-4">
                    <Sparkles className="text-accent" size={24} />
                    <h3 className="text-2xl font-bold text-white">Let's Build Something Meaningful Together</h3>
                  </div>
                  <p className="text-textSecondary leading-relaxed">
                    I'm always excited to connect with recruiters, developers, students, and professionals who share an interest in Artificial Intelligence, Machine Learning, Data Science, and Backend Development.
                    <br/><br/>
                    Whether it's an internship opportunity, a collaborative project, or simply a discussion about technology, I'd love to connect.
                  </p>
                </Card>
              </div>
            </motion.div>

          </div>

        </div>

        {/* Floating Social Icons (Bottom Center) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ delay: 0.5 }}
          className="mt-20 flex items-center justify-center gap-6"
        >
          <a href="https://github.com/SBanerjee2005-sudo" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-textSecondary hover:text-white hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300">
            <GithubIcon width={20} height={20} />
          </a>
          <a href="https://www.linkedin.com/in/soham-banerjee-a77078312" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-textSecondary hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]/30 hover:shadow-[0_0_20px_rgba(10,102,194,0.3)] transition-all duration-300">
            <LinkedinIcon width={20} height={20} />
          </a>
          <a href="mailto:soham0405@gmail.com" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-textSecondary hover:text-accent hover:bg-accent/10 hover:border-accent/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300">
            <Mail size={20} />
          </a>
          <a href="tel:+919674342053" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-textSecondary hover:text-accent-secondary hover:bg-accent-secondary/10 hover:border-accent-secondary/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300">
            <Phone size={20} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
