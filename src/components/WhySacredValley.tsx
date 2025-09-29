import { Mountain, Waves, BookOpen } from "lucide-react";

const WhySacredValley = () => {
  return (
    <section className="py-20 earth-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-deep-brown mb-6">
            Why the Sacred Valley?
          </h2>
          <div className="w-24 h-1 bg-sage-green mx-auto rounded-full" />
        </div>
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/80 flex items-center justify-center shadow-earth group-hover:scale-110 transition-smooth">
              <Mountain className="w-10 h-10 text-sage-green" />
            </div>
            <h3 className="text-xl font-semibold text-deep-brown mb-4">
              Ancient Wisdom
            </h3>
            <p className="text-warm-terracotta leading-relaxed">
              Surrounded by mountains, rivers, and the deep wisdom of Andean traditions that have flourished for centuries.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/80 flex items-center justify-center shadow-earth group-hover:scale-110 transition-smooth">
              <Waves className="w-10 h-10 text-sage-green" />
            </div>
            <h3 className="text-xl font-semibold text-deep-brown mb-4">
              Natural Rhythm
            </h3>
            <p className="text-warm-terracotta leading-relaxed">
              A place to slow down, reconnect with nature's pace, and give children space for organic learning.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/80 flex items-center justify-center shadow-earth group-hover:scale-110 transition-smooth">
              <BookOpen className="w-10 h-10 text-sage-green" />
            </div>
            <h3 className="text-xl font-semibold text-deep-brown mb-4">
              Living Classroom
            </h3>
            <p className="text-warm-terracotta leading-relaxed">
              Every walk in nature, local story, and shared meal becomes an integral part of the learning journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySacredValley;