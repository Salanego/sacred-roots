import { Heart, Users, Sparkles, TreePine, Music, Palette, Brain } from "lucide-react";

const Vision = () => {
  const visionPoints = [
    {
      icon: Users,
      text: "A vibrant hub for families seeking alternative, holistic, and community-based learning"
    },
    {
      icon: TreePine,
      text: "Daily experiences rooted in nature, art, music, movement, and hands-on science"
    },
    {
      icon: Sparkles,
      text: "A free and holistic pedagogy that nurtures curiosity, creativity, and emotional well-being"
    },
    {
      icon: Heart,
      text: "Co-housing living: an intentional community space where families and single parents sharing daily life, learning, and growth."
    },
    {
      icon: Music,
      text: "A safe and inspiring place for free play, cultural exchange, and collaborative projects between children and parents alike."
    },
    {
      icon: Brain,
      text: "A learning space consciously designed to support neurodivergent children with flexibility, compassion, and empowerment"
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
        
        <div className="max-w-7xl mx-auto">
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