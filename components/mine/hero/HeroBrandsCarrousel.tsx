"use client";

import Image from "next/image";

const logos = [
  "/logos/1.png",
  "/logos/2.png",
  "/logos/3.png",
  "/logos/4.png",
  "/logos/5.png",
  "/logos/6.png",
  "/logos/7.png",
  "/logos/8.png",
  "/logos/9.png",
  "/logos/11.png",
  "/logos/12.png",
  "/logos/13.png",
];

export default function HeroBrandsCarrousel() {
  return (
    <div className="w-full  mb-12 mt-6 overflow-visible">
      <div className="flex w-max animate-marquee gap-14">
        {/* Primera pasada */}
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex h-32 w-52 items-center justify-center"
          >
            <Image
              src={logo}
              alt={`Logo ${index + 1}`}
              width={200}
              height={100}
              className="select:none object-contain dark:grayscale  dark:hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}

        {/* Segunda pasada (duplicado) */}
        {logos.map((logo, index) => (
          <div
            key={`dup-${index}`}
            className="flex h-32 w-52 items-center justify-center"
          >
            <Image
              src={logo}
              alt={`Logo ${index + 1}`}
              width={200}
              height={100}
              className="select:none object-contain dark:grayscale  dark:hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
