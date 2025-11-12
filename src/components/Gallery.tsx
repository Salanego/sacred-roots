import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import galleryHub1 from "@/assets/gallery-hub-1.jpg";
import galleryHub2 from "@/assets/gallery-hub-2.jpg";
import galleryHub3 from "@/assets/gallery-hub-3.jpg";
import galleryHub4 from "@/assets/gallery-hub-4.jpg";
import galleryHub5 from "@/assets/gallery-hub-5.jpg";
import galleryHub6 from "@/assets/gallery-hub-6.jpg";
import galleryHub7 from "@/assets/gallery-hub-7.jpg";
import galleryHub8 from "@/assets/gallery-hub-8.jpg";
import galleryHub9 from "@/assets/gallery-hub-9.jpg";
import galleryHub10 from "@/assets/gallery-hub-10.jpg";
import galleryHub11 from "@/assets/gallery-hub-11.jpg";
import galleryHub12 from "@/assets/gallery-hub-12.jpg";
import galleryHub13 from "@/assets/gallery-hub-13.jpg";
import galleryHub14 from "@/assets/gallery-hub-14.jpg";
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
      src: galleryHub1,
      alt: "Sacred Roots Hub glass pavilion illuminated at dusk with warm interior lighting"
    },
    {
      src: galleryHub2,
      alt: "Traditional adobe house with terracotta tile roof nestled in lush gardens"
    },
    {
      src: galleryHub3,
      alt: "Cozy living space with traditional fireplace and colorful Peruvian textiles"
    },
    {
      src: galleryHub4,
      alt: "Child relaxing in hammock with stunning waterfall view in the Sacred Valley"
    },
    {
      src: galleryHub5,
      alt: "Bright meditation and yoga space with floor cushions and panoramic glass walls"
    },
    {
      src: galleryHub6,
      alt: "Welcoming entrance with warm wooden details and traditional mosaic tiles"
    },
    {
      src: galleryHub7,
      alt: "Comfortable bedroom with unique conical thatched roof and natural materials"
    },
    {
      src: galleryHub8,
      alt: "Community library and learning space with exposed bamboo ceiling"
    },
    {
      src: galleryHub9,
      alt: "Communal kitchen area with natural bamboo ceiling and mountain views"
    },
    {
      src: galleryHub10,
      alt: "Children practicing aerial yoga in beautiful glass-roofed studio with garden views"
    },
    {
      src: galleryHub11,
      alt: "Peaceful garden with traditional adobe houses surrounded by mountains"
    },
    {
      src: galleryHub12,
      alt: "Sacred Valley garden with waterfall cascading down the mountain in the distance"
    },
    {
      src: galleryHub13,
      alt: "Serene meditation and yoga space with ceremonial altar and wooden details"
    },
    {
      src: galleryHub14,
      alt: "Warm shared bedroom with traditional conical wooden ceiling and natural terracotta floors"
    },
    {
      src: gallery7,
      alt: "Charming cobblestone streets of a traditional Sacred Valley town"
    },
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
                <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-muted/20">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-contain"
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