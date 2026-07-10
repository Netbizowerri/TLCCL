import { motion } from "framer-motion";

export default function AbstractHeroIllustration() {
  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto flex items-center justify-center p-4">
      {/* Background Soft Blobs */}
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-soft to-brand-muted rounded-full filter blur-3xl opacity-60 animate-pulse duration-4000" />
      
      {/* Animated SVG */}
      <motion.svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10 drop-shadow-2xl"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Growth Grid / Pathway Grid */}
        <g opacity="0.15">
          <line x1="50" y1="400" x2="450" y2="400" stroke="#0F172A" strokeWidth="2" strokeDasharray="5 5" />
          <line x1="50" y1="300" x2="450" y2="300" stroke="#0F172A" strokeWidth="2" strokeDasharray="5 5" />
          <line x1="50" y1="200" x2="450" y2="200" stroke="#0F172A" strokeWidth="2" strokeDasharray="5 5" />
          <line x1="50" y1="100" x2="450" y2="100" stroke="#0F172A" strokeWidth="2" strokeDasharray="5 5" />
          <line x1="100" y1="50" x2="100" y2="450" stroke="#0F172A" strokeWidth="2" strokeDasharray="5 5" />
          <line x1="250" y1="50" x2="250" y2="450" stroke="#0F172A" strokeWidth="2" strokeDasharray="5 5" />
          <line x1="400" y1="50" x2="400" y2="450" stroke="#0F172A" strokeWidth="2" strokeDasharray="5 5" />
        </g>

        {/* The Growth Path Curve */}
        <motion.path
          d="M 50 400 C 150 380, 200 250, 300 200 C 380 160, 400 120, 420 80"
          stroke="url(#pathGradient)"
          strokeWidth="8"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Floating Star / Milestone Indicators */}
        {/* Milestone 1 */}
        <motion.circle
          cx="100"
          cy="390"
          r="10"
          fill="#0D9488"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
        />
        <motion.circle
          cx="100"
          cy="390"
          r="18"
          stroke="#0D9488"
          strokeWidth="2"
          opacity="0.4"
          initial={{ scale: 0 }}
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ delay: 0.5, duration: 2, repeat: Infinity }}
        />

        {/* Milestone 2 */}
        <motion.circle
          cx="210"
          cy="245"
          r="12"
          fill="#2563EB"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: "spring" }}
        />
        <motion.circle
          cx="210"
          cy="245"
          r="22"
          stroke="#2563EB"
          strokeWidth="2"
          opacity="0.4"
          initial={{ scale: 0 }}
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ delay: 1, duration: 2, repeat: Infinity }}
        />

        {/* Milestone 3 */}
        <motion.circle
          cx="315"
          cy="190"
          r="14"
          fill="#F59E0B"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.5, type: "spring" }}
        />
        <motion.circle
          cx="315"
          cy="190"
          r="26"
          stroke="#F59E0B"
          strokeWidth="2"
          opacity="0.4"
          initial={{ scale: 0 }}
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
        />

        {/* Big Bright Star (Goal) */}
        <motion.g
          transform="translate(420, 80)"
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1.2, rotate: 0 }}
          transition={{ delay: 1.8, type: "spring" }}
        >
          <path
            d="M 0 -25 L 7 -7 L 25 -7 L 11 5 L 16 23 L 0 12 L -16 23 L -11 5 L -25 -7 L -7 -7 Z"
            fill="#F59E0B"
            stroke="#FFF"
            strokeWidth="2"
          />
          <circle cx="0" cy="0" r="4" fill="#FFF" />
        </motion.g>

        {/* Abstract Child Illustration (Represented as layered energetic overlapping circles & star of growth) */}
        <g transform="translate(250, 280)">
          {/* Support Circles */}
          <circle cx="-50" cy="50" r="45" fill="#EFF6FF" stroke="#2563EB" strokeWidth="2" opacity="0.6" />
          <circle cx="50" cy="50" r="45" fill="#FFFBEB" stroke="#F59E0B" strokeWidth="2" opacity="0.6" />
          
          {/* The Child - Central Energy */}
          <motion.circle
            cx="0"
            cy="20"
            r="30"
            fill="#0D9488"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, type: "spring" }}
          />
          <motion.path
            d="M -25 70 C -25 40, 25 40, 25 70 Z"
            fill="#0D9488"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.8, type: "spring" }}
          />
          
          {/* Reaching Arms of Hope */}
          <path d="M -15 25 Q -35 0, -45 -15" stroke="#0D9488" strokeWidth="6" strokeLinecap="round" />
          <path d="M 15 25 Q 35 0, 45 -15" stroke="#0D9488" strokeWidth="6" strokeLinecap="round" />
          
          {/* Inner Light */}
          <circle cx="0" cy="20" r="10" fill="#FFF" opacity="0.9" />
        </g>

        {/* Little Floating Stars of Potential */}
        <motion.g
          transform="translate(120, 100)"
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          <polygon points="0,-10 3,-3 10,-3 5,2 7,9 0,5 -7,9 -5,2 -10,-3 -3,-3" fill="#0EA5E9" opacity="0.7" />
        </motion.g>

        <motion.g
          transform="translate(360, 320)"
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <polygon points="0,-8 2,-2 8,-2 4,1 6,7 0,4 -6,7 -4,1 -8,-2 -2,-2" fill="#0D9488" opacity="0.6" />
        </motion.g>

        {/* Gradients */}
        <defs>
          <linearGradient id="pathGradient" x1="50" y1="400" x2="420" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="50%" stopColor="#0EA5E9" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
}
