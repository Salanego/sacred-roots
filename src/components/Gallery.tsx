import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import gallery1 from "@/assets/gallery-sacred-valley-1.jpg";
import gallery2 from "@/assets/gallery-sacred-valley-2.jpg";
import gallery3 from "@/assets/gallery-sacred-valley-3.jpg";
import gallery4 from "@/assets/gallery-sacred-valley-4.jpg";
import gallery5 from "@/assets/gallery-sacred-valley-5.jpg";
const Gallery = () => {
  const images = [{
    src: gallery1,
    alt: "Majestic mountain peaks under dramatic gray clouds in the Sacred Valley"
  }, {
    src: gallery2,
    alt: "Ancient stone walkway through the mountains of the Sacred Valley"
  }, {
    src: gallery3,
    alt: "Traditional beige houses nestled at the foot of green hills in Peru"
  }, {
    src: gallery4,
    alt: "Huayna Picchu mountain peak overlooking Machu Picchu in Peru"
  }, {
    src: gallery5,
    alt: "Colorful flags decorating a traditional street in the Sacred Valley"
  }];
  return <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      
    </section>;
};
export default Gallery;