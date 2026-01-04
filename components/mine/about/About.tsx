"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";

const teachers = [
  {
    title: "Rolando Miceli",
    badge: "Fundador",
    images: ["/ROLANDO/3.jpeg", "/ROLANDO/2.jpeg"],
    description: `
      Mi nombre es Rolando Miceli, soy Técnico Electromecánico matriculado (MP 1621, Consejo de Ingenieros, Arquitectos y Técnicos del Chaco), Profesor de Educación Técnica de nivel terciario (egresado en 2016), Licenciado en Tecnología Educativa, especialista en refrigeración, con formación universitaria en Ingeniería Química, y más de 25 años de experiencia en refrigeración, climatización y electromecánica aplicada.

Mi inicio en el rubro se remonta al año 1997, cuando comencé a desempeñarme como personal de mantenimiento técnico en lo que en ese momento era uno de los supermercados líderes del país, Casa Tía. Ese ámbito fue una verdadera escuela práctica. Allí pude desarrollarme como técnico electromecánico, trabajando con sistemas reales en funcionamiento continuo, bajo exigencias operativas concretas y estándares de servicio elevados.

Durante esa etapa amplié mis conocimientos mediante capacitaciones técnicas específicas, entre ellas formaciones dictadas por Copeland, capacitaciones en refrigeración en la UTN Regional Resistencia, y entrenamientos vinculados a instalación, diagnóstico y mantenimiento de equipos frigoríficos y de climatización. La propia dinámica del lugar, marcada por ampliaciones, nuevas obras y reformas permanentes, nos obligó a crecer técnicamente, comprender nuevos procesos y adaptarnos a la lógica de un mercado en expansión constante.

Con el correr de los años, la experiencia adquirida en obra, mantenimiento y servicio fue consolidando una visión más amplia del rubro. En 2008 dimos un paso estratégico clave, el inicio legal de la firma, acompañada por la apertura de un taller con atención al público, donde los clientes podían encontrarnos de forma directa. En ese espacio se brindaban servicios técnicos especializados, junto con la venta de repuestos, consolidando una presencia clara y confiable en el mercado local.

Tres años más tarde, y como resultado de una lectura madura del mercado, tomamos la decisión de cerrar el local de atención al público para enfocarnos de lleno en el segmento comercial e industrial, ampliando la apuesta hacia proyectos de mayor escala y complejidad. Esta etapa significó un crecimiento técnico y estratégico importante, permitiéndonos trabajar con empresas de relevancia, entre ellas Viral Mayorista, Horneados Libertad, Gran Hotel Total, Gran Diet, y otros clientes del ámbito comercial e industrial.

Paralelamente al desarrollo profesional, comprendí que la falta de técnicos bien formados era una de las principales debilidades del sector. Por ese motivo decidí formarme también como docente técnico, obteniendo en 2016 el título de Profesor de Educación Técnica de nivel terciario, y posteriormente la Licenciatura en Tecnología Educativa, integrando el saber técnico con herramientas pedagógicas modernas y orientadas a la práctica real.

De esta conjunción de experiencia de campo, formación académica y vocación docente nace Aircool Refrigeración y, posteriormente, el Instituto o Usina de Formación Técnica Aircool, con una misión clara, formar técnicos competentes, responsables y con salida laboral real, preparados para enfrentar las exigencias actuales del mercado.

Con más de 2.500 clientes atendidos, una trayectoria sostenida y una visión a largo plazo, hoy lidero un proyecto que integra servicio técnico profesional, formación certificada y valores éticos, convencido de que el verdadero crecimiento del rubro depende de profesionales bien formados, con criterio técnico y compromiso con su trabajo.
    `
  },
  {
    title: "Orlando Miceli",
    badge: "Cofundador",
    images: ["/NANO/2.jpeg", "/NANO/1.jpeg"],
    description: `
    Soy Ingeniero Electrónico y Técnico Frigorista, con amplia experiencia en refrigeración comercial e industrial, mantenimiento electromecánico y automatización de sistemas térmicos.

A lo largo de mi trayectoria me he desempeñado en el sector industrial, brindando soporte técnico especializado en el mantenimiento de equipos de gran porte como puentes grúa, hornos eléctricos, autoclaves y sistemas de control automatizado. Esta experiencia me permitió consolidar una sólida base técnica y desarrollar una mirada integral sobre los procesos de refrigeración y control.

Desde hace varios años decidí volcar toda mi experiencia al desarrollo de Aircool, una empresa familiar dedicada al mantenimiento, instalación y modernización de sistemas de refrigeración. Actualmente trabajo de forma full time en el crecimiento y la innovación del proyecto, impulsando soluciones que integran tecnología, eficiencia energética y calidad de servicio.

Comprometido con la mejora continua, lidero Aircool con una visión orientada a profesionalizar el rubro, formar nuevos técnicos y posicionar a la empresa como referente regional en refrigeración y control electrónico aplicado.
    `
  },
  {
    title: "Verónica Miceli",
    badge: "Cofundadora",
    images: ["/VERONICA/1.jpeg", "/VERONICA/3.jpeg"],
    description: `
Soy diseñadora gráfica con trayectoria ininterrumpida desde 2004, especializada en comunicación visual, diseño estratégico y desarrollo de identidad corporativa. Inicié mi carrera profesional en ESTAMPAR, donde durante cuatro años integré los equipos de diseño, marketing y administración, participando activamente en la planificación y producción visual de eventos de relevancia para la provincia del Chaco.

Mi formación se encuentra enriquecida por estudios en diseño web, auxiliar jurídico y guía de talleres de oración y vida, lo que me ha brindado una mirada multidisciplinaria y una sensibilidad particular para el acompañamiento personal, profesional y organizacional. Cuento además con experiencia en la formación de líderes y en la conducción de grupos orientados al desarrollo humano y espiritual.

A lo largo de mi trayectoria, he trabajado junto a diversas empresas en el diseño e implementación de planes de acción destinados a optimizar la imagen institucional y fortalecer la comunicación interna y externa. Mi enfoque integra estándares de excelencia profesional con valores humanos y cristianos, promoviendo entornos de trabajo donde la creatividad, la ética y el crecimiento integral se consolidan como pilares para impulsar proyectos y transformar realidades.
`
  }
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function TeachersSection() {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [cardImageIndex, setCardImageIndex] = useState<{ [k: number]: number }>({});

  const openFor = (idx: number) => {
    setSelectedIndex(idx);
    setCardImageIndex((prev) => ({ ...prev, [idx]: 0 }));
    setOpen(true);
  };

  const handlePrev = (idx: number) => {
    const imgs = teachers[idx].images;
    const cur = cardImageIndex[idx] || 0;
    setCardImageIndex((prev) => ({ ...prev, [idx]: cur > 0 ? cur - 1 : imgs.length - 1 }));
  };

  const handleNext = (idx: number) => {
    const imgs = teachers[idx].images;
    const cur = cardImageIndex[idx] || 0;
    setCardImageIndex((prev) => ({ ...prev, [idx]: cur < imgs.length - 1 ? cur + 1 : 0 }));
  };

  return (
    <section className="w-full pt-20 px-6 md:px-20  dark:from-gray-900 dark:to-gray-950">
      <motion.h2
        className="uppercase text-5xl md:text-6xl font-bold text-center text-gray-800 mb-16 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Fundadores
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {teachers.map((teacher, i) => {
          const active = cardImageIndex[i] || 0;

          return (
            <motion.div
              key={i}
              className="relative group overflow-hidden rounded-3xl shadow-lg dark:shadow-gray-900/70 w-full max-w-sm h-[420px]"
              variants={cardVariants}
            >
              <Image
                src={teacher.images[active]}
                alt={teacher.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority={true}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white flex flex-col items-start space-y-3">
                <h3 className="text-2xl font-semibold mb-1">{teacher.title}</h3>

                <span className="bg-blue-500/90 text-white text-xs font-semibold px-4 py-1 rounded-full backdrop-blur-sm">
                  {teacher.badge}
                </span>

                <button
                  onClick={() => openFor(i)}
                  className="relative z-50 mt-2 px-4 py-2 bg-white/20 hover:bg-white/30 text-white text-sm rounded-full transition backdrop-blur-sm border border-white/20"
                >
                  Ver más
                </button>
              </div>

              <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-blue-400/50 transition-all duration-500"></div>

              <button
                onClick={() => {
                  const len = teacher.images.length;
                  const cur = cardImageIndex[i] || 0;
                  setCardImageIndex((prev) => ({ ...prev, [i]: cur > 0 ? cur - 1 : len - 1 }));
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={() => {
                  const len = teacher.images.length;
                  const cur = cardImageIndex[i] || 0;
                  setCardImageIndex((prev) => ({ ...prev, [i]: cur < len - 1 ? cur + 1 : 0 }));
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full"
              >
                <ChevronRight size={18} />
              </button>
            </motion.div>
          );
        })}
      </motion.div>

      {/* MODAL CONTROLADO + SCROLL + ALTURA MÁXIMA */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {selectedIndex !== null ? teachers[selectedIndex].title : ""}
            </DialogTitle>

            <DialogDescription className="pt-2 whitespace-pre-line">
              {selectedIndex !== null ? teachers[selectedIndex].description : ""}
            </DialogDescription>
          </DialogHeader>

       
        </DialogContent>
      </Dialog>
    </section>
  );
}
