"use client";
import Image from "next/image";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { images, testimonios } from "@/constants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function HeroSlider() {
  const autoplay = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <Carousel
      plugins={[autoplay.current]}
      orientation="vertical"
      className="w-[550px]  "
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      
    >
      <CarouselContent className=" h-[400px] rounded-3xl ">
        {images.map((e, i) => (
          <CarouselItem key={i}>
            <div className="relative w-[550px] h-full">
              <Image src={e} alt="" fill className="h-full object-cover rounded-2xl" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
