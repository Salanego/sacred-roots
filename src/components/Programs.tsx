import { Button } from "@/components/ui/button";
import { GraduationCap, Home, Star, Check } from "lucide-react";

const Programs = () => {
  return (
    <section className="py-20 earth-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-deep-brown mb-6">
            Programs & Pricing
          </h2>
          <div className="w-24 h-1 bg-sage-green mx-auto rounded-full" />
        </div>
        
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 mb-16">
          {/* Education Program */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-earth hover:shadow-warm transition-smooth">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full warm-gradient flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-deep-brown">🌿 Education Program</h3>
              </div>
            </div>
            
            <p className="text-warm-terracotta mb-6 leading-relaxed">
              Holistic learning space inspired by multiple intelligences, creativity, movement, and emotional well-being.
            </p>
            
            <ul className="space-y-3 mb-8">
              {[
                "Activities rooted in nature, art, music, hands-on science",
                "Andean traditions and cultural immersion",
                "Designed with love for neurodivergent children",
                "Multiple intelligence approach to learning"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-sage-green mt-0.5 flex-shrink-0" />
                  <span className="text-deep-brown">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="bg-soft-sand/50 rounded-2xl p-6 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-sunset-orange mb-2">$500</div>
                <div className="text-warm-terracotta">per child / month</div>
                <div className="text-lg font-semibold text-deep-brown mt-2">$900</div>
                <div className="text-warm-terracotta">for two siblings / month</div>
              </div>
            </div>
          </div>
          
          {/* Accommodation */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-earth hover:shadow-warm transition-smooth">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full warm-gradient flex items-center justify-center">
                <Home className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-deep-brown">🏡 Accommodation</h3>
              </div>
            </div>
            
            <p className="text-warm-terracotta mb-6 leading-relaxed">
              Co-housing style with private family bungalows and shared community areas for meaningful connections.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="bg-soft-sand/50 rounded-xl p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold text-deep-brown">Master Bungalows</div>
                    <div className="text-sm text-warm-terracotta">Private bungalows with 2–3 beds, private kitchen & bathroom</div>
                  </div>
                  <div className="text-xl font-bold text-sunset-orange">$900</div>
                </div>
              </div>
              
              <div className="bg-soft-sand/50 rounded-xl p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold text-deep-brown">Standard Bungalows</div>
                    <div className="text-sm text-warm-terracotta">Private bungalows with 2–3 beds & private bathroom</div>
                  </div>
                  <div className="text-xl font-bold text-sunset-orange">$800</div>
                </div>
              </div>
              
              <div className="bg-soft-sand/50 rounded-xl p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold text-deep-brown">Standard Bungalows</div>
                    <div className="text-sm text-warm-terracotta">Private bungalows with 2–3 beds & outdoor bathroom</div>
                  </div>
                  <div className="text-xl font-bold text-sunset-orange">$700</div>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-warm-terracotta text-center italic">
              All options include access to shared spaces: kitchen, living areas, garden & community activities
            </p>
          </div>
        </div>
        
        {/* Included Features */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-earth max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6 justify-center">
            <div className="w-12 h-12 rounded-full warm-gradient flex items-center justify-center">
              <Star className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-deep-brown">✨ Both programs include:</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Daily learning experiences tailored to each child",
              "Community life and shared family activities",
              "Free play, collaborative projects, and cultural exchange",
              "A supportive environment for children and parents alike"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-sage-green mt-0.5 flex-shrink-0" />
                <span className="text-deep-brown">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;