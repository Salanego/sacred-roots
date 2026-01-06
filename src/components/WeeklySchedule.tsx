import { useEffect, useState } from "react";
import schedule1 from "@/assets/schedule-1.jpg";
import schedule2 from "@/assets/schedule-2.jpg";

const WeeklySchedule = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const schedules = [schedule1, schedule2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % schedules.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Weekly Flow Example
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse into how our days unfold at Sacred Roots Hub
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden rounded-2xl shadow-earth">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {schedules.map((schedule, index) => (
                <div key={index} className="min-w-full">
                  <img
                    src={schedule}
                    alt={`Weekly schedule ${index + 1}`}
                    className="w-full h-auto object-contain bg-muted"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {schedules.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-primary scale-110"
                    : "bg-primary/30 hover:bg-primary/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeeklySchedule;
