import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-cyberpunk-dark overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyberpunk-dark via-cyberpunk-dark to-cyberpunk-neon opacity-50" />
      <div className="relative z-10 text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold text-white animate-glow mb-6"
        >
          CYBER<span className="text-cyberpunk-neon">ART</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
        >
          Where digital dreams meet reality
        </motion.p>
      </div>
    </div>
  );
};