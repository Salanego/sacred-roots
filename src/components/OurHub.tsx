const OurHub = () => {
  return <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Learning in the Sacred Valley
            </h2>
            <div className="w-24 h-1 warm-gradient mx-auto rounded-full mb-8" />
          </div>
          
          <div className="space-y-8 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>
              At our hub in the Sacred Valley of Peru, learning unfolds naturally—through art, storytelling, music, nature walks, and hands-on discovery. Children explore at their own rhythm, guided by bilingual facilitators who nurture creativity, confidence, and emotional connection.
            </p>
            
            
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="p-8 rounded-3xl bg-card shadow-earth">
                <h3 className="text-2xl font-semibold text-foreground mb-4">Ages 3–16</h3>
                <p className="text-muted-foreground">
                  Our program welcomes children of all ages, creating a multi-age learning community.
                </p>
              </div>
              
              <div className="p-8 rounded-3xl bg-card shadow-earth">
                <h3 className="text-2xl font-semibold text-foreground mb-4">Daily Structure</h3>
                <p className="text-muted-foreground">
                  3–5 hours of flexible learning, with the rest of the time open for adventure, play, and rest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default OurHub;