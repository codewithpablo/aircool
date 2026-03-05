'use client';

import { Transition } from "motion/react";
import * as motion from "motion/react-client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Reordering() {
  const [order, setOrder] = useState(initialOrder);

  useEffect(() => {
    const timeout = setTimeout(() => setOrder(shuffle(order)), 2000);
    return () => clearTimeout(timeout);
  }, [order]);

  return (
    <ul className="grid grid-cols-2 gap-6 w-full h-full lg:grid-cols-2">
      {order.map((src) => (
        <motion.li
          key={src}
          layout
          transition={spring}
          className="relative w-full aspect-[5/3] md:aspect-square rounded-2xl overflow-hidden"
        >
          <Image
            src={src}
            alt="imagen"
            fill
            className="object-cover w-full h-full"
          />
        </motion.li>
      ))}
    </ul>
  );
}

const initialOrder = [
  "/1.jpg",
  "/2.jpg",
  "/3.jpg",
  "/4.jpg",
  "/5.jpg",
  "/6.jpg",
  "/7.jpg",
  "/8.jpg",
];

function shuffle([...array]: string[]) {
  return array.sort(() => Math.random() - 0.5);
}

const spring: Transition = {
  type: "spring",
  damping: 25,
  stiffness: 300,
};
