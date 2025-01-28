import { motion } from "framer-motion";

const artworks = [
  { id: 1, title: "Digital Dreams", image: "https://source.unsplash.com/random/800x600?cyberpunk" },
  { id: 2, title: "Neon City", image: "https://source.unsplash.com/random/800x600?neon" },
  { id: 3, title: "Future Vision", image: "https://source.unsplash.com/random/800x600?scifi" },
  { id: 4, title: "Neural Network", image: "https://source.unsplash.com/random/800x600?digital" },
  { id: 5, title: "Cyber Reality", image: "https://source.unsplash.com/random/800x600?future" },
  { id: 6, title: "Digital Escape", image: "https://source.unsplash.com/random/800x600?tech" },
];

export const Gallery = () => {
  return (
    <div className="py-20 bg-cyberpunk-dark">
      <h2 className="text-4xl font-bold text-center text-white mb-12">Gallery</h2>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {artworks.map((artwork) => (
          <motion.div
            key={artwork.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            className="relative group overflow-hidden rounded-lg"
          >
            <img
              src={artwork.image}
              alt={artwork.title}
              className="w-full h-[300px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cyberpunk-dark to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end p-6">
              <h3 className="text-white text-xl font-bold">{artwork.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};