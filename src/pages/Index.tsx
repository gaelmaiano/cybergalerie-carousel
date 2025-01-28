import { Hero } from "../components/Hero";
import { Gallery } from "../components/Gallery";
import { Carousel } from "../components/Carousel";
import { ContactForm } from "../components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-cyberpunk-dark text-white">
      <Hero />
      <Carousel />
      <Gallery />
      <ContactForm />
    </div>
  );
};

export default Index;