"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type Logo = {
  name: string;
  light: string;
  dark?: string;
};

const logos: Logo[] = [
  { name: "Logo 1", light: "/logosa/1.png" },
  { name: "Logo 2", light: "/logosa/2.png" },
    { name: "Logo 3", light: "/logosa/3png",  dark: "/logosa/black/3.png" },
  { name: "Logo 4", light: "/logosa/4.png" },
  { name: "Logo 5", light: "/logosa/5.png", dark: "/logosa/black/5.png" },

  // 👇 ya NO importa el nombre del archivo
  { name: "Logo 6", light: "/logosa/seis.png" },

  { name: "Logo 7", light: "/logosa/7.png" },
  { name: "Logo 8", light: "/logosa/8.png", dark: "/logosa/black/8.png" },
  { name: "Logo 9", light: "/logosa/9.png", dark: "/logosa/black/9.png" },
  { name: "Logo 11", light: "/logosa/11.png", dark: "/logosa/black/11.png" },
  { name: "Logo 12", light: "/logosa/12.png",  dark: "/logosa/black/12.png" },
  { name: "Logo 13", light: "/logosa/13.png" },
];

export default function HeroBrandsCarrousel() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full mt-6 mb-12 overflow-visible">
      <div className="flex w-max animate-marquee gap-14">
        {[...logos, ...logos].map((logo, index) => {
          const isDark = resolvedTheme === "dark";
          const src = isDark && logo.dark ? logo.dark : logo.light;

          return (
            <div
              key={`${logo.name}-${index}`}
              className="flex h-32 w-52 items-center justify-center"
            >
              <Image
                key={src}
                src={src}
                alt={logo.name}
                width={200}
                height={100}
                priority={index < 6}
                className="object-contain transition duration-300 "
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
