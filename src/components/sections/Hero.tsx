import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/icons';
import { AnimatedBackground } from '../ui/AnimatedBackground';
import { TypewriterText } from '../ui/TypewriterText';
import { PremiumButton } from '../ui/PremiumButton';
import { AIIllustration } from '../illustrations/AIIllustration';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10">
      {/* Animated Background layer */}
      <AnimatedBackground />
      
      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Side: Content */}
          <div className="w-full lg:w-[55%] flex flex-col justify-center">
            
            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-[800] tracking-tight mb-4"
            >
              <span className="text-gradient leading-tight">SOHAM BANERJEE</span>
            </motion.h1>

            {/* Subtitle with Typewriter Effect */}
            <div className="mb-6 h-auto min-h-[4rem] md:min-h-[2rem]">
              <TypewriterText 
                text="Aspiring Data Scientist | AI & Machine Learning Enthusiast | Backend Developer | Computer Science Undergraduate"
                className="text-lg md:text-xl font-medium text-accent-secondary"
                delay={0.5}
              />
            </div>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-base md:text-lg text-slate-400 leading-relaxed mb-10 max-w-2xl"
            >
              I am a third-year Computer Science and Engineering student at Heritage Institute of Technology, Kolkata, passionate about Artificial Intelligence, Machine Learning, Data Science, and Backend Development.
              <br/><br/>
              I enjoy building intelligent, data-driven applications that solve real-world problems through modern machine learning techniques and scalable backend systems. I am constantly exploring new technologies and transforming ideas into impactful software solutions.
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="flex flex-col sm:flex-row flex-wrap gap-4"
            >
              <PremiumButton variant="primary" href="#projects" icon={<ArrowRight size={18} />}>
                View Projects
              </PremiumButton>
              
              <PremiumButton variant="secondary" href="/resume.pdf" icon={<Download size={18} />}>
                Download Resume
              </PremiumButton>
              
              <PremiumButton variant="outline" href="https://github.com/SBanerjee2005-sudo" icon={<GithubIcon width={18} height={18} />}>
                GitHub
              </PremiumButton>
              
              <PremiumButton variant="outline" href="https://www.linkedin.com/in/soham-banerjee-a77078312" icon={<LinkedinIcon width={18} height={18} />}>
                LinkedIn
              </PremiumButton>
            </motion.div>
          </div>

          {/* Right Side: Abstract SVG Illustration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full lg:w-[45%] flex items-center justify-center mt-12 lg:mt-0"
          >
            <AIIllustration />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
