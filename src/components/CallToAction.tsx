import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 hero-gradient">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            🌟 Join us in the Sacred Valley
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
            A place where the world becomes your classroom, and community becomes your home.
          </p>
          
          <div className="space-y-6">
            <Button 
              size="lg" 
              className="warm-gradient text-white border-0 px-12 py-6 text-xl font-semibold rounded-2xl shadow-warm hover:scale-105 transition-smooth group"
            >
              <MessageCircle className="w-6 h-6 mr-3 group-hover:animate-pulse" />
              Message us today to start your journey
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <div className="text-white/80 text-lg">
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