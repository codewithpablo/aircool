"use client";

import Image from "next/image";

const logos = [
  "/logosa/1.png",
  "/logosa/2.png",
  "/logosa/3.png",
  "/logosa/4.png",
  "/logosa/5.png",
  "/logosa/6.png",
  "/logosa/7.png",
  "/logosa/8.png",
  "/logosa/9.png",
  "/logosa/11.png",
  "/logosa/12.png",
  "/logosa/13.png",
  "/logosa/14.png",
  "/logosa/15.png",
  "/logosa/16.png",
  "/logosa/17.png",
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
