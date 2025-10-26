"use client";

import * as React from "react";
import AutoScroll from "embla-carousel-auto-scroll";
import { courses } from "@/constants";
import { CourseCard } from "./CourseCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface CoursesGalleryProps {
  direction?: "left" | "right"; // prop opcional
}

export default function CoursesGallery({ direction = "right" }: CoursesGalleryProps) {
  const plugin = React.useRef(
    AutoScroll({
      speed: 0.5,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
      stopOnFocusIn: false,
      direction: direction === "right" ? "forward" : "backward", // usa el prop
    })
  );

  return (
    <div className="w-full">
      

      <Carousel
        plugins={[plugin.current]}
        className="w-[99%] mx-auto"
        opts={{
          loop: true,
          align: "start",
        }}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {courses.map((course, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
            >
              <CourseCard
                name={course.name}
                image={course.image}
                description={course.description}
                link={course.link}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
