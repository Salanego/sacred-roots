import { Home, Sun, Heart, Users2 } from "lucide-react";
const CommunityLife = () => {
  const features = [{
    icon: Home,
    title: "Private family room + communal spaces",
    description: "Your own family room plus shared kitchen and living areas for connection and growth"
  }, {
    icon: Sun,
    title: "Weekly wellness & creative sessions",
    description: "Weekly yoga, dance, sound healing, and art sessions for the whole family"
  }, {
    icon: Heart,
    title: "Nature & cultural activities",
    description: "Guided nature walks & cultural activities in the Sacred Valley"
  }, {
    icon: Users2,
    title: "Community gatherings",
    description: "Community dinners, sharing circles, and family-friendly events"
  }];
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Co-Housing Community Life
          </h2>
          <div className="w-24 h-1 warm-gradient mx-auto rounded-full" />
          <p className="text-xl text-muted-foreground mt-8 max-w-3xl mx-auto leading-relaxed">Our Hub is built around co-housing living, where families and single parents create daily life together. Parents are an essential part of the experience.

We cherish community life with shared dinners, circles, family-friendly gatherings, and local celebrations, where meaningful friendships naturally bloom</p>
        </div>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => <div key={index} className="text-center p-8 rounded-3xl bg-card shadow-earth hover:shadow-warm transition-smooth group">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full warm-gradient flex items-center justify-center group-hover:scale-110 transition-smooth">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>)}
        </div>

        <div className="max-w-4xl mx-auto mt-16 space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
          
          
        </div>
      </div>
    </section>;
};
export default CommunityLife;