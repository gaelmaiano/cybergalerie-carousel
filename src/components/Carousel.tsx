import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const featured = [
  { id: 1, title: "Digital Dreams", image: "/lovable-uploads/c027e072-0a61-45be-bf09-8311aaace468.png" },
  { id: 2, title: "Neon Warrior", image: "/lovable-uploads/97c9edd8-1494-4300-8201-298c1f3f04f9.png" },
  { id: 3, title: "Dark Vision", image: "/lovable-uploads/11912b22-e539-4d54-bc87-9d0fe4377a7f.png" },
  { id: 4, title: "Neural Portrait", image: "/lovable-uploads/81d448be-03d9-40f1-af12-c7b9bd5a3c37.png" },
];

export const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % featured.length);
  const prev = () => setCurrent((current - 1 + featured.length) % featured.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="relative h-[600px] bg-cyberpunk-dark overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={featured[current].image}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      
      <div className="absolute inset-0 bg-gradient-to-t from-cyberpunk-dark to-transparent opacity-60" />
      
      <div className="absolute inset-x-0 bottom-0 p-8">
        <h3 className="text-white text-3xl font-bold mb-4 animate-glow">{featured[current].title}</h3>
      </div>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-cyberpunk-dark/50 text-white hover:bg-cyberpunk-neon/50 transition-colors"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-cyberpunk-dark/50 text-white hover:bg-cyberpunk-neon/50 transition-colors"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};