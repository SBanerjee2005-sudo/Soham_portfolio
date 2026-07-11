import { motion } from 'framer-motion';

export function AIIllustration() {
  // Generates coordinates for a circular network of nodes
  const generateNodes = (count: number, radius: number, cx: number, cy: number) => {
    return Array.from({ length: count }).map((_, i) => {
      const angle = (i * 2 * Math.PI) / count;
      return {
        x: cx + radius * Math.cos(angle),
        y: cy + radius * Math.sin(angle),
      };
    });
  };

  const outerNodes = generateNodes(8, 120, 250, 250);
  const innerNodes = generateNodes(6, 60, 250, 250);

  return (
    <div className="relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center">
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="w-full h-full"
      >
        <svg viewBox="0 0 500 500" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="ai-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
            
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            
            <linearGradient id="cube-top" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#2563EB" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="cube-left" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#0891B2" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="cube-right" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#1E40AF" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          {/* Central Brain/Core Outline */}
          <motion.path
            d="M250,150 C290,150 330,170 330,220 C330,240 310,260 300,280 C290,300 270,330 250,330 C230,330 210,300 200,280 C190,260 170,240 170,220 C170,170 210,150 250,150 Z"
            fill="none"
            stroke="url(#ai-gradient)"
            strokeWidth="3"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
          />
          
          {/* Circuit Lines and Connections */}
          {outerNodes.map((node, i) => (
            <motion.line
              key={`line-out-${i}`}
              x1={250} y1={250}
              x2={node.x} y2={node.y}
              stroke="url(#ai-gradient)"
              strokeWidth="1.5"
              strokeOpacity="0.3"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.1, 0.5, 0.1] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
          
          {innerNodes.map((node, i) => {
            const nextNode = innerNodes[(i + 1) % innerNodes.length];
            return (
              <motion.line
                key={`line-in-${i}`}
                x1={node.x} y1={node.y}
                x2={nextNode.x} y2={nextNode.y}
                stroke="#06B6D4"
                strokeWidth="2"
                strokeOpacity="0.6"
                filter="url(#glow)"
                animate={{ strokeOpacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              />
            );
          })}

          {/* Neural Network Nodes */}
          {[...outerNodes, ...innerNodes].map((node, i) => (
            <motion.circle
              key={`node-${i}`}
              cx={node.x}
              cy={node.y}
              r={i < outerNodes.length ? 4 : 6}
              fill="url(#ai-gradient)"
              filter="url(#glow)"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ duration: 2 + (i % 3), repeat: Infinity, delay: i * 0.1 }}
            />
          ))}

          {/* Floating Data Cubes (Isometric) */}
          <motion.g
            animate={{ y: [-15, 15, -15], rotate: [0, 5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            transform="translate(80, 100) scale(0.6)"
          >
            <path d="M50,0 L100,25 L50,50 L0,25 Z" fill="url(#cube-top)" />
            <path d="M0,25 L50,50 L50,100 L0,75 Z" fill="url(#cube-left)" />
            <path d="M50,50 L100,25 L100,75 L50,100 Z" fill="url(#cube-right)" />
          </motion.g>

          <motion.g
            animate={{ y: [20, -20, 20], rotate: [0, -5, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            transform="translate(350, 300) scale(0.8)"
          >
            <path d="M50,0 L100,25 L50,50 L0,25 Z" fill="url(#cube-top)" />
            <path d="M0,25 L50,50 L50,100 L0,75 Z" fill="url(#cube-left)" />
            <path d="M50,50 L100,25 L100,75 L50,100 Z" fill="url(#cube-right)" />
          </motion.g>

          {/* Central Glowing Core */}
          <motion.circle
            cx="250" cy="250" r="20"
            fill="#3B82F6"
            filter="url(#glow)"
            animate={{
              r: [20, 25, 20],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Orbiting Data Particles */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            style={{ originX: "250px", originY: "250px" }}
          >
            <circle cx="250" cy="80" r="3" fill="#06B6D4" filter="url(#glow)" />
            <circle cx="420" cy="250" r="4" fill="#3B82F6" filter="url(#glow)" />
            <circle cx="250" cy="420" r="3" fill="#06B6D4" filter="url(#glow)" />
            <circle cx="80" cy="250" r="4" fill="#3B82F6" filter="url(#glow)" />
          </motion.g>

        </svg>
      </motion.div>
    </div>
  );
}
