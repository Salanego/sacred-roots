import { Brain, Palette, Heart, Sparkles } from "lucide-react";
const LearningApproach = () => {
  const approaches = [{
    icon: Brain,
    text: "Integrates creativity, movement, and project-based learning to engage every type of intelligence through real-world exploration"
  }, {
    icon: Palette,
    text: "Encourages curiosity and self-expression through art, music, and free play, inspiring creative exploration and discovery"
  }, {
    icon: Heart,
    text: "Honors emotional well-being and individuality through empathy, mindfulness, and authentic connection"
  }, {
    icon: Sparkles,
    text: "Embraces neurodivergent children through conscious parenting, compassion, adaptability, and mindful understanding"
  }];
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Learning Approach
          </h2>
          <div className="w-24 h-1 warm-gradient mx-auto rounded-full mb-8" />
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">We offer a holistic education that:</p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {approaches.map((approach, index) => <div key={index} className="flex items-start gap-6 p-6 rounded-3xl bg-card shadow-earth hover:shadow-warm transition-smooth">
                <div className="flex-shrink-0 w-12 h-12 rounded-full warm-gradient flex items-center justify-center">
                  <approach.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  {approach.text}
                </p>
              </div>)}
          </div>
          
          <p className="text-xl text-center text-muted-foreground mt-12 max-w-3xl mx-auto italic">
            Every child learns not only through lessons but also through play, exploration, and meaningful connection.
          </p>
        </div>
      </div>
    </section>;
};
export default LearningApproach;