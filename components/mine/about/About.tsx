'use client';

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* =========================
   DATA
========================= */

const teachers = [
  {
    title: "Rolando Miceli",
    badge: "Fundador",
    images: ["/ROLANDO/3.jpeg", "/ROLANDO/2.jpeg"],
    description:
      "Mi nombre es Rolando Miceli, soy Técnico Electromecánico matriculado (MP 1621)...",
  },
  {
    title: "Orlando Miceli",
    badge: "Cofundador",
    images: ["/NANO/2.jpeg", "/NANO/1.jpeg"],
    description:
      "Soy Ingeniero Electrónico y Técnico Frigorista, con amplia experiencia...",
  },
  {
    title: "Verónica Miceli",
    badge: "Cofundadora",
    images: ["/VERONICA/1.jpeg", "/VERONICA/3.jpeg"],
    description:
      "Soy diseñadora gráfica con trayectoria ininterrumpida desde 2004...",
  },
];

/* =========================
   ANIMACIONES
========================= */

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const imageVariants: Variants = {
  enter: { opacity: 0, scale: 1.1 },
  center: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

/* =========================
   CINEMATIC BACKGROUND
========================= */

const CinematicBackground = () => (
  <div className="absolute inset-0 pointer-events-none z-0 overflow-visible">
    <motion.div
      className="absolute top-[-30%] left-[-20%] w-[800px] h-[800px] rounded-full bg-cyan-300/20 dark:bg-cyan-500/10 blur-[180px]"
      animate={{ x: [0, 60, 0], y: [0, 40, 0], rotate: [0, 20, 0] }}
      transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-cyan-200/10 dark:bg-cyan-400/15 blur-[200px]"
      animate={{ x: [0, -50, 0], y: [0, -30, 0], rotate: [0, -15, 0] }}
      transition={{ repeat: Infinity, duration: 30, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute top-[10%] right-[5%] w-[400px] h-[400px] rounded-full bg-cyan-100/20 dark:bg-cyan-300/10 blur-[150px]"
      animate={{ x: [0, 30, 0], y: [0, 20, 0], rotate: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 22, ease: "easeInOut" }}
    />
  </div>
);

/* =========================
   COMPONENTE
========================= */

export default function TeachersSection() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [imgIndex, setImgIndex] = useState<Record<number, number>>({});

  const openModal = (i: number) => {
    setSelected(i);
    setImgIndex((p) => ({ ...p, [i]: 0 }));
    setOpen(true);
  };

  const nextImg = (i: number) => {
    const total = teachers[i].images.length;
    const current = imgIndex[i] || 0;
    setImgIndex((p) => ({ ...p, [i]: (current + 1) % total }));
  };

  const prevImg = (i: number) => {
    const total = teachers[i].images.length;
    const current = imgIndex[i] || 0;
    setImgIndex((p) => ({
      ...p,
      [i]: current === 0 ? total - 1 : current - 1,
    }));
  };

  return (
    <section className="relative w-full px-6 md:px-20 pt-20 overflow-visible">
      {/* Fondo cinematográfico azul */}
      <CinematicBackground />

      <h2 className="text-center text-5xl md:text-6xl font-bold mb-16 dark:text-white relative z-10">
        Fundadores
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 relative z-10">
        {teachers.map((t, i) => {
          const active = imgIndex[i] || 0;

          return (
            <motion.div
              key={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative h-[420px] rounded-3xl overflow-hidden shadow-xl group"
            >
              {/* IMAGEN */}
              <AnimatePresence initial={false}>
                <motion.div
                  key={active}
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0"
                >
                  <Image
                    src={t.images[active]}
                    alt={t.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* CONTENIDO */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white flex flex-col gap-3">
                <h3 className="text-2xl font-semibold">{t.title}</h3>

                {/* BADGE */}
                <span className="w-fit text-xs px-4 py-1 rounded-full bg-blue-500/80 backdrop-blur-sm">
                  {t.badge}
                </span>

                {/* BOTÓN ABAJO DEL BADGE */}
                <button
                  onClick={() => openModal(i)}
                  className="w-fit mt-1 px-4 py-2 text-sm rounded-full bg-white/20 hover:bg-white/30 transition backdrop-blur border border-white/20"
                >
                  Ver más
                </button>
              </div>

              {/* CONTROLES */}
              <button
                onClick={() => prevImg(i)}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={() => nextImg(i)}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full"
              >
                <ChevronRight size={18} />
              </button>
            </motion.div>
          );
        })}
      </div>

      {/* MODAL */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {selected !== null ? teachers[selected].title : ""}
            </DialogTitle>
            <DialogDescription className="pt-4 whitespace-pre-line">
              {selected !== null ? teachers[selected].description : ""}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
}
