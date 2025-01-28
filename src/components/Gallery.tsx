import { motion } from "framer-motion";

const artworks = [
  { id: 1, title: "Digital Dreams", image: "/lovable-uploads/c027e072-0a61-45be-bf09-8311aaace468.png" },
  { id: 2, title: "Neon Warrior", image: "/lovable-uploads/97c9edd8-1494-4300-8201-298c1f3f04f9.png" },
  { id: 3, title: "Dark Vision", image: "/lovable-uploads/11912b22-e539-4d54-bc87-9d0fe4377a7f.png" },
  { id: 4, title: "Neural Portrait", image: "/lovable-uploads/81d448be-03d9-40f1-af12-c7b9bd5a3c37.png" },
  { id: 5, title: "Cyber Reality", image: "/lovable-uploads/77629b66-ba0f-4442-ad24-3d71343ca5da.png" },
  { id: 6, title: "Digital Escape", image: "/lovable-uploads/af6385f9-c849-45e2-8bd7-e8aefa9f7452.png" },
  { id: 7, title: "Tech Noir", image: "/lovable-uploads/e29c6119-51e9-45d1-b6e2-55868bbb7abb.png" },
  { id: 8, title: "Cyber Ghost", image: "/lovable-uploads/eea54558-f8a5-4aba-90c5-a64f23f19fef.png" },
  { id: 9, title: "Digital Shadow", image: "/lovable-uploads/6351e5c8-d39d-49f0-b70b-1c6dc4456426.png" },
];

export const Gallery = () => {
  return (
    <div className="py-20 bg-cyberpunk-dark">
      <h2 className="text-4xl font-bold text-center text-white mb-12 animate-glow">Gallery</h2>
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