import { Calendar, Home, Users2, Heart } from "lucide-react";

const CommunityLife = () => {
  const features = [
    {
      icon: Calendar,
      title: "Flexible Duration",
      description: "Stay from 2 weeks to several months, adapting to your family's journey and needs."
    },
    {
      icon: Home,
      title: "Co-housing Style",
      description: "Private family rooms combined with beautiful communal spaces for connection and growth."
    },
    {
      icon: Users2,
      title: "Shared Rhythms",
      description: "Meals, conversations, and daily rhythms that bring families together naturally."
    },
    {
      icon: Heart,
      title: "Balanced Living",
      description: "Perfect harmony between family privacy and meaningful community connection."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Life in Community
          </h2>
          <div className="w-24 h-1 warm-gradient mx-auto rounded-full" />
          <p className="text-xl text-muted-foreground mt-8 max-w-3xl mx-auto leading-relaxed">
            Experience the magic of intentional community living, where families from around the world 
            create lasting bonds while honoring each family's unique journey.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-3xl bg-card shadow-earth hover:shadow-warm transition-smooth group"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full warm-gradient flex items-center justify-center group-hover:scale-110 transition-smooth">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityLife;