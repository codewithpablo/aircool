import TestimonialCard from "./TestimonialCard";
import { testimonios } from "@/constants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CarouselVertical() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      orientation="vertical"
      className="w-full max-w-xs my-14"
    >
      <CarouselContent className="-mt-1 h-[250px]">
        {testimonios.map((testimonio, index) => (
          <CarouselItem key={index} className="pt-1 md:basis-1/2">
                    <TestimonialCard  testimonio={testimonio}/>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
