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

        <div className="max-w-xs sm:max-w-sm mx-auto relative">
          <div className="overflow-hidden rounded-xl shadow-lg border border-border/50">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {schedules.map((schedule, index) => (
                <div key={index} className="min-w-full">
                  <img
                    src={schedule}
                    alt={`Weekly schedule ${index + 1}`}
                    className="w-full h-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {schedules.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-primary w-6"
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
