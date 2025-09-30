import { Heart, Users, Sparkles, TreePine, Music, Palette } from "lucide-react";

const Vision = () => {
  const visionPoints = [
    {
      icon: Users,
      text: "A vibrant hub for families seeking alternative, holistic, and community-based learning"
    },
    {
      icon: TreePine,
      text: "Activities in nature, art, music, hands-on science, and Andean culture"
    },
    {
      icon: Sparkles,
      text: "A learning space with a free, holistic pedagogy that integrates multiple intelligences, creativity, movement, and emotional well-being designed with love and awareness for neurodivergent children"
    },
    {
      icon: Heart,
      text: "Co-housing style living: a shared house in community for families and single parents, combining accommodation + community life"
    },
    {
      icon: Music,
      text: "Space for free play, cultural exchange, and collaborative projects"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Vision
          </h2>
          <div className="w-24 h-1 warm-gradient mx-auto rounded-full" />
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-6">
            {visionPoints.map((point, index) => (
              <div 
                key={index}
                className="flex items-start gap-6 p-6 rounded-3xl bg-card shadow-earth hover:shadow-warm transition-smooth"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full warm-gradient flex items-center justify-center">
                  <point.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  {point.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;