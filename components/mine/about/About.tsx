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
      `Mi nombre es Rolando Miceli, soy Técnico Electromecánico matriculado (MP 1621 – Consejo de Ingenieros, Arquitectos y Técnicos del Chaco), Profesor de Educación Técnica de nivel terciario (egresado en 2016), Licenciado en Tecnología Educativa, especialista en refrigeración, con formación universitaria en Ingeniería Química, y más de 25 años de experiencia en refrigeración, climatización y electromecánica aplicada.

Mi inicio en el rubro se remonta al año 1997, cuando comencé a desempeñarme como personal de mantenimiento técnico en lo que en ese momento era uno de los supermercados líderes del país: Casa Tía. Ese ámbito fue una verdadera escuela práctica. Allí pude desarrollarme como técnico electromecánico, trabajando con sistemas reales en funcionamiento continuo, bajo exigencias operativas concretas y estándares de servicio elevados.

Durante esa etapa amplié mis conocimientos mediante capacitaciones técnicas específicas, entre ellas formaciones dictadas por Copeland, capacitaciones en refrigeración en la UTN Regional Resistencia, y entrenamientos vinculados a instalación, diagnóstico y mantenimiento de equipos frigoríficos y de climatización. La propia dinámica del lugar —marcada por ampliaciones, nuevas obras y reformas permanentes— nos obligó a crecer técnicamente, comprender nuevos procesos y adaptarnos a la lógica de un mercado en expansión constante.

Con el correr de los años, la experiencia adquirida en obra, mantenimiento y servicio fue consolidando una visión más amplia del rubro. En 2008 dimos un paso estratégico clave: el inicio legal de la firma, acompañada por la apertura de un taller con atención al público, donde los clientes podían encontrarnos de forma directa. En ese espacio se brindaban servicios técnicos especializados, junto con la venta de repuestos, consolidando una presencia clara y confiable en el mercado local.

Tres años más tarde, y como resultado de una lectura madura del mercado, tomamos la decisión de cerrar el local de atención al público para enfocarnos de lleno en el segmento comercial e industrial, ampliando la apuesta hacia proyectos de mayor escala y complejidad. Esta etapa significó un crecimiento técnico y estratégico importante, permitiéndonos trabajar con empresas de relevancia, entre ellas Viral Mayorista, Horneados Libertad, Gran Hotel Total, Gran Diet, y otros clientes del ámbito comercial e industrial.

Paralelamente al desarrollo profesional, comprendí que la falta de técnicos bien formados era una de las principales debilidades del sector. Por ese motivo decidí formarme también como docente técnico, obteniendo en 2016 el título de Profesor de Educación Técnica de nivel terciario, y posteriormente la Licenciatura en Tecnología Educativa, integrando el saber técnico con herramientas pedagógicas modernas y orientadas a la práctica real.

De esta conjunción de experiencia de campo, formación académica y vocación docente nace Aircool Refrigeración y, posteriormente, el Instituto / Usina de Formación Técnica Aircool, con una misión clara: formar técnicos competentes, responsables y con salida laboral real, preparados para enfrentar las exigencias actuales del mercado.

Con más de 2.500 clientes atendidos, una trayectoria sostenida y una visión a largo plazo, hoy lidero un proyecto que integra servicio técnico profesional, formación certificada y valores éticos, convencido de que el verdadero crecimiento del rubro depende de profesionales bien formados, con criterio técnico y compromiso con su trabajo.`,
  },
  {
    title: "Orlando Miceli",
    badge: "Cofundador",
    images: ["/NANO/2.jpeg", "/NANO/1.jpeg"],
    description:
      `Ingeniero Electrónico y Técnico Frigorista, con amplia experiencia en refrigeración comercial e industrial, mantenimiento electromecánico y automatización de sistemas térmicos.

A lo largo de su trayectoria, se ha desempeñado en el sector industrial, brindando soporte técnico especializado en mantenimiento de equipos de gran porte, como puentes grúa, hornos eléctricos, autoclaves y sistemas de control automatizado, lo que le permitió consolidar una sólida base técnica y una mirada integral sobre los procesos de refrigeración y control.

Desde hace varios años, Orlando decidió volcar toda su experiencia al desarrollo de Aircool, una empresa familiar dedicada al mantenimiento, instalación y modernización de sistemas de refrigeración. Actualmente trabaja de forma full time en el crecimiento y la innovación del proyecto, impulsando soluciones que integran tecnología, eficiencia energética y calidad de servicio.

Comprometido con la mejora continua, lidera Aircool con una visión orientada a profesionalizar el rubro, formar nuevos técnicos y posicionar la empresa como referente regional en refrigeración y control electrónico aplicado.`,
  },

  {
    title: "Verónica Miceli",
    badge: "Cofundadora",
    images: ["/VERONICA/1.jpeg", "/VERONICA/3.jpeg"],
    description:
      `Soy diseñadora gráfica con trayectoria desde 2004, especializada en comunicación visual, diseño estratégico y desarrollo de identidad corporativa. Comencé mi carrera en ESTAMPAR, donde durante cuatro años integré los equipos de diseño, marketing y administración, participando activamente en la planificación y producción visual de eventos de relevancia en la provincia del Chaco.

Mi formación se complementa con estudios en diseño web, auxiliar jurídico y guía de talleres de oración y vida, lo que me ha permitido desarrollar una visión multidisciplinaria y una sensibilidad especial para el acompañamiento personal y profesional de equipos. Asimismo, cuento con experiencia en la formación de líderes y en la conducción de grupos orientados al crecimiento humano y espiritual.

A lo largo de mi recorrido, he colaborado con diversas empresas en la creación de planes de acción destinados a optimizar su imagen institucional y fortalecer su comunicación interna y externa. Mi enfoque integra la excelencia profesional con valores humanos y cristianos, promoviendo espacios de trabajo donde la creatividad, la ética y el desarrollo personal se convierten en pilares para transformar proyectos y vidas.`,
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

export const CinematicBackground = () => (
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
    <section className="w-full px-3 sm:px-6 md:px-12 lg:px-20 overflow-visible  ">
      {/* Fondo cinematográfico azul */}
      <CinematicBackground />

      <h2 className="pt-24 pb-10 sm:pt-32 sm:pb-12 text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 dark:text-white relative z-10">
        Fundadores y equipo
      </h2>

      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-8 md:gap-10 justify-center relative z-10 max-w-7xl mx-auto pb-20">
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
              className="relative h-[450px] sm:h-[500px] md:h-[550px] lg:h-[600px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl group"
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
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 text-white flex flex-col gap-2 sm:gap-3">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">{t.title}</h3>

                {/* BADGE */}
                <span className="w-fit text-xs px-3 py-1 rounded-full bg-blue-500/80 backdrop-blur-sm">
                  {t.badge}
                </span>

                {/* BOTÓN ABAJO DEL BADGE */}
                <button
                  onClick={() => openModal(i)}
                  className="w-fit mt-1 px-3 py-2 text-xs sm:text-sm rounded-full bg-white/20 hover:bg-white/30 transition backdrop-blur border border-white/20"
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
