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

export default function CarouselVertical() {
  const autoplay = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
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
        {images.map((e, i) => (
          <CarouselItem key={i}>
            <div className="relative w-xs h-full">
              <Image src={e} alt="" width={400} height={100} className="h-full object-cover rounded-2xl" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
