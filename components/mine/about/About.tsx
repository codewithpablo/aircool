"use client";

import React, { useState } from "react";
import Image from "next/image";
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
    title: "Verónica Miceli",
    badge: "Cofundadora",
    images: ["/VERONICA/3.jpeg", "/VERONICA/1.jpeg"],
    description:
      `Soy diseñadora gráfica con trayectoria desde 2004, especializada en comunicación visual, diseño estratégico y desarrollo de identidad corporativa. Comencé mi carrera en ESTAMPAR, donde durante cuatro años integré los equipos de diseño, marketing y administración, participando activamente en la planificación y producción visual de eventos de relevancia en la provincia del Chaco.

Mi formación se complementa con estudios en diseño web, auxiliar jurídico y guía de talleres de oración y vida, lo que me ha permitido desarrollar una visión multidisciplinaria y una sensibilidad especial para el acompañamiento personal y profesional de equipos. Asimismo, cuento con experiencia en la formación de líderes y en la conducción de grupos orientados al crecimiento humano y espiritual.

A lo largo de mi recorrido, he colaborado con diversas empresas en la creación de planes de acción destinados a optimizar su imagen institucional y fortalecer su comunicación interna y externa. Mi enfoque integra la excelencia profesional con valores humanos y cristianos, promoviendo espacios de trabajo donde la creatividad, la ética y el desarrollo personal se convierten en pilares para transformar proyectos y vidas.`,
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
];




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
    <section className="relative w-full px-4 sm:px-6 md:px-10 lg:px-16 overflow-visible">
      {/* CÍRCULO DIFUMINADO (Celeste en Light, Verde en Dark) */}
      <div
        className="absolute top-1/2 left-1/2 w-[500px] h-[500px] lg:w-[800px] lg:h-[800px] bg-blue-400/50 dark:bg-green-500/10 rounded-full blur-[120px] lg:blur-[160px] pointer-events-none z-0 transform -translate-x-1/2 -translate-y-1/2"
      />
      <div className="flex-col items-center text-center space-y-4 pt-2 md:pt-16 pb-4 md:pb-10 relative z-10 hidden sm:flex">
        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-sky-400 dark:from-blue-500 dark:to-emerald-500 rounded-full" />
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 dark:from-white dark:via-white dark:to-gray-400">
          Fundadores
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 max-w-[1400px] mx-auto pb-8 md:pb-16 relative z-10 px-4 lg:px-8">
        {teachers.map((t, i) => {
          const active = imgIndex[i] || 0;

          return (
            <div
              key={i}
              className="
              relative
              w-full max-w-md mx-auto
              aspect-[3/4] lg:aspect-[4/5] xl:aspect-[1/1.1]
              max-h-[450px] sm:max-h-[480px] lg:max-h-[550px]
              rounded-3xl
              overflow-hidden
              shadow-xl
              group
              transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]
              "
            >
              {/* IMAGEN */}
              <div className="absolute inset-0">
                <Image
                  src={t.images[active]}
                  alt={t.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* CONTENIDO */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white flex flex-col gap-3">

                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
                  {t.title}
                </h3>

                <span className="w-fit text-xs px-3 py-1 rounded-full bg-blue-500/80 backdrop-blur-sm">
                  {t.badge}
                </span>

                <button
                  onClick={() => openModal(i)}
                  className="w-fit mt-1 px-4 py-2.5 text-xs sm:text-sm font-medium rounded-full bg-blue-600 hover:bg-blue-500 transition hover:shadow-lg shadow-blue-500/30 backdrop-blur border border-blue-400/50"
                  style={{
                    boxShadow: "0 0 15px rgba(59, 130, 246, 0.4)",
                  }}
                >
                  Ver más
                </button>

              </div>

              {/* CONTROLES */}
              <button
                onClick={() => prevImg(i)}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 md:p-2.5 rounded-full"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={() => nextImg(i)}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 md:p-2.5 rounded-full"
              >
                <ChevronRight size={18} />
              </button>

            </div>
          );
        })}
      </div>

      {/* MODAL */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl lg:max-w-4xl xl:max-w-5xl w-full max-h-[90vh] md:max-h-[85vh] p-0 overflow-hidden border border-gray-200/50 dark:border-white/10 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-2xl shadow-[0_0_60px_-15px_rgba(0,0,0,0.5)] dark:shadow-[0_0_60px_-15px_rgba(0,0,0,1)] rounded-3xl sm:rounded-[2rem]">
          {selected !== null && (
            <div className="flex flex-col md:flex-row h-full max-h-[90vh] md:max-h-[85vh]">
              {/* IMAGEN DE LA PERSONA */}
              <div className="relative w-full h-[300px] md:h-auto md:w-[45%] lg:w-[42%] shrink-0 overflow-hidden">
                <Image
                  src={teachers[selected].images[0]}
                  alt={teachers[selected].title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white flex flex-col gap-3">
                  <span className="w-fit px-4 py-1.5 bg-blue-600/90 backdrop-blur-md rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-[0.15em] shadow-lg shadow-blue-500/40 border border-blue-400/30">
                    {teachers[selected].badge}
                  </span>
                </div>
              </div>

              {/* CONTENIDO TEXTUAL */}
              <div className="flex-1 flex flex-col p-6 sm:p-8 md:p-10 lg:p-12 overflow-y-auto">
                <DialogHeader className="mb-6 space-y-2 text-left md:pr-8">
                  <DialogTitle className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 pb-1">
                    {teachers[selected].title}
                  </DialogTitle>
                  <DialogDescription className="sr-only">
                    Biografía y trayectoria de {teachers[selected].title}
                  </DialogDescription>
                </DialogHeader>

                <div className="text-gray-600 dark:text-gray-300 space-y-5 text-sm sm:text-[15px] md:text-base leading-relaxed text-pretty flex-1">
                  {teachers[selected].description.split('\n').filter(p => p.trim() !== '').map((paragraph, idx) => (
                    <p key={idx} className="relative z-10">{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
