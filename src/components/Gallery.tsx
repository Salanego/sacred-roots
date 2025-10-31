import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import gallery1 from "@/assets/gallery-sacred-valley-1.jpg";
import gallery2 from "@/assets/gallery-sacred-valley-2.jpg";
import gallery3 from "@/assets/gallery-sacred-valley-3.jpg";
import gallery4 from "@/assets/gallery-sacred-valley-4.jpg";
import gallery5 from "@/assets/gallery-sacred-valley-5.jpg";

const Gallery = () => {
  const images = [
    {
      src: gallery1,
      alt: "Sacred Valley terraces with misty mountain peaks at golden hour",
    },
    {
      src: gallery2,
      alt: "Children learning outdoors in the Sacred Valley",
    },
    {
      src: gallery3,
      alt: "Traditional Peruvian village at sunset in the Sacred Valley",
    },
    {
      src: gallery4,
      alt: "Lush nature and flowing river in the Sacred Valley",
    },
    {
      src: gallery5,
      alt: "Families gathering together in the Sacred Valley community",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl mb-4 text-foreground">
            Life in the Sacred Valley
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the beauty and magic of our home in Peru
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <div className="p-2">
                  <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
    </section>
  );
};

export default Gallery;
