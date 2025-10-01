import { Sparkles } from "lucide-react";

const WhatIsWorldschool = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Sparkles className="w-8 h-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              What is a Worldschool Hub?
            </h2>
          </div>
          
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>
              A Worldschool Hub is more than a school — it's a living community. Here, learning happens everywhere: in nature, in the kitchen, through art, music, and cultural experiences. Families live in co-housing style, with private family rooms and shared spaces for meals, activities, and connection.
            </p>
            
            <p className="font-semibold text-foreground">
              It's a home designed for independence and togetherness — where children and parents grow side by side.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsWorldschool;
