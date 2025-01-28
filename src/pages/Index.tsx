import { Hero } from "../components/Hero";
import { Gallery } from "../components/Gallery";
import { Carousel } from "../components/Carousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-cyberpunk-dark text-white">
      <Hero />
      <Carousel />
      <Gallery />
      <div className="py-20 bg-cyberpunk-dark">
        <div className="container max-w-2xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6 animate-glow">
            Contact
          </h2>
          <a 
            href="mailto:phenixcyber8@gmail.com"
            className="text-2xl text-cyberpunk-neon hover:text-cyberpunk-pink transition-colors duration-300 animate-pulse"
          >
            phenixcyber8@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;