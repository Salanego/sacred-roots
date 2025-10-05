import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageCircle, ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 hero-gradient">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight px-4">
            Join us in the Sacred Valley
          </h2>
          
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto px-4">
            A place where the world becomes your classroom, and community becomes your home.
          </p>
          
          <div className="space-y-4 md:space-y-6 px-4">
            <Link to="/apply" className="block">
              <Button 
                size="lg" 
                className="warm-gradient text-white border-0 px-6 md:px-12 py-4 md:py-6 text-base md:text-xl font-semibold rounded-2xl shadow-warm hover:scale-105 transition-smooth group w-full md:w-auto"
              >
                <MessageCircle className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 group-hover:animate-pulse flex-shrink-0" />
                <span className="text-center flex-1">Message us today to start your journey</span>
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-2 md:ml-3 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </Button>
            </Link>
            
            <div className="text-white/80 text-sm md:text-lg">
              Ready to give your family an unforgettable learning adventure?
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-4 h-4 bg-white/20 rounded-full animate-pulse" />
          <div className="absolute top-40 right-20 w-3 h-3 bg-white/30 rounded-full animate-pulse delay-300" />
          <div className="absolute bottom-20 left-20 w-2 h-2 bg-white/25 rounded-full animate-pulse delay-700" />
          <div className="absolute bottom-40 right-10 w-5 h-5 bg-white/15 rounded-full animate-pulse delay-500" />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;