import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import gallery1 from "@/assets/gallery-sacred-valley-1.jpg";
import gallery2 from "@/assets/gallery-sacred-valley-2.jpg";
import gallery3 from "@/assets/gallery-sacred-valley-3.jpg";
import gallery4 from "@/assets/gallery-sacred-valley-4.jpg";
import gallery5 from "@/assets/gallery-sacred-valley-5.jpg";
import gallery6 from "@/assets/gallery-sacred-valley-6.jpg";
import gallery7 from "@/assets/gallery-sacred-valley-7.jpg";

const Gallery = () => {
  const images = [
    {
      src: gallery1,
      alt: "Family exploring the ancient Maras salt pools in the Sacred Valley"
    },
    {
      src: gallery2,
      alt: "Discovering the impressive terraces of Ollantaytambo archaeological site"
    },
    {
      src: gallery3,
      alt: "Children celebrating at the iconic Machu Picchu citadel"
    },
    {
      src: gallery4,
      alt: "Young explorers taking in the breathtaking views of Machu Picchu"
    },
    {
      src: gallery5,
      alt: "Adventurous family encounter with llamas at Rainbow Mountain"
    },
    {
      src: gallery6,
      alt: "The stunning natural colors of Vinicunca Rainbow Mountain"
    },
    {
      src: gallery7,
      alt: "Charming cobblestone streets of a traditional Sacred Valley town"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Life in the Sacred Valley</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Experience the beauty and wonder of learning in one of the world's most inspiring locations
        </p>
        
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>

        <div className="text-center mt-8">
          <Button 
            asChild 
            size="lg" 
            className="gap-2"
          >
            <a 
              href="https://www.instagram.com/sacredrootshub?igsh=djB5OTZ2YTV3eXR1" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Instagram className="w-5 h-5" />
              Follow Us on Instagram
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
export default Gallery;