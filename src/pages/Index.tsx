import { Hero } from "../components/Hero";
import { Gallery } from "../components/Gallery";
import { Carousel } from "../components/Carousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-cyberpunk-dark text-white">
      <Hero />
      <Carousel />
      <Gallery />
    </div>
  );
};

export default Index;