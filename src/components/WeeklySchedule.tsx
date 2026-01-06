import schedule1 from "@/assets/schedule-1.jpg";
import schedule2 from "@/assets/schedule-2.jpg";

const WeeklySchedule = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-2">
            Our Rhythm
          </p>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground">
            Weekly Flow Example
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="rounded-xl shadow-lg border border-border/50 overflow-hidden">
            <img
              src={schedule1}
              alt="Weekly schedule Monday to Wednesday"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="rounded-xl shadow-lg border border-border/50 overflow-hidden">
            <img
              src={schedule2}
              alt="Weekly schedule Thursday to Weekend"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeeklySchedule;
