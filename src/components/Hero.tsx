import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/sacred-valley-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-gradient opacity-90" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Sacred Roots
          <br />
          <span className="text-soft-sand">Worldschool Hub Peru</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-4 max-w-2xl mx-auto leading-relaxed opacity-95">
          A home for families who learn, travel & grow together.
        </p>
        
        <p className="text-lg md:text-xl mb-8 text-soft-sand font-semibold">
          📍 Cusco, Peru
        </p>
        
        <Link to="/apply">
          <Button 
            size="lg" 
            className="warm-gradient text-white border-0 px-8 py-6 text-lg font-semibold rounded-2xl shadow-warm hover:scale-105 transition-smooth"
          >
            Start your family's next adventure
          </Button>
        </Link>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;