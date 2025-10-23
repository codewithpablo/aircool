"use client";
import TestimonialCard from "./TestimonialCard";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { testimonios } from "@/constants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function CarouselVertical() {
  const autoplay = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <Carousel
      plugins={[autoplay.current]}
      orientation="vertical"
      className="w-full max-w-xs  "
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      
    >
      <CarouselContent className=" h-[400px] rounded-3xl ">
        {testimonios.map((testimonio, index) => (
          <CarouselItem key={index} className="">
            <TestimonialCard testimonio={testimonio}/>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
