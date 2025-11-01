"use client"

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence, Variants, Transition } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

interface TabItem {
  title: string;
  description: string;
  image: string;
}

interface TabContentMap {
  rolando: TabItem;
  tioNano: TabItem;
  veronica: TabItem;
}

const IMAGE_SIZE = "300px";

const tabContent: TabContentMap = {
  rolando: {
    title: "Rolando Miceli",
    description: `Rolando Miceli descubrió su vocación entre motores, herramientas y el sonido del metal trabajando. Se formó como Técnico Electromecánico de nivel medio y, con apenas 19 años, comenzó su trayectoria profesional en la empresa multinacional Casa Tía S.A., donde aprendió el valor de la precisión, la disciplina y el trabajo bien hecho. Movido por su interés por la ciencia y los procesos industriales, inició la carrera de Ingeniería Química, experiencia que amplió su mirada técnica. Tras años de práctica y experiencia, descubrió una nueva vocación: formar a otros. Por eso estudió el Profesorado en Educación Técnica, y más tarde se convirtió en Licenciado en Tecnología Educativa, convencido de que enseñar es también construir futuro. En 2007 fundó Aircool Refrigeración, empresa dedicada al servicio técnico en sistemas de refrigeración familiar y comercial. A lo largo de los años, su nombre se consolidó en la región por la ética profesional, la experiencia y la confianza de más de 2.500 clientes.`,
    image: "/3.jpg"
  },
  tioNano: {
    title: "Tío Nano",
    description: `Nano ha sido un pilar de inspiración y enseñanza para Rolando. Su dedicación, paciencia y conocimiento técnico han guiado a muchas generaciones en la familia. Siempre presente, Nano comparte su experiencia y su pasión por la tecnología, transmitiendo valores de esfuerzo y disciplina. Su historia personal está llena de desafíos superados y aprendizajes que lo convirtieron en un referente familiar y profesional.`,
    image: "/12.jpg"
  },
  veronica: {
    title: "Verónica",
    description: `Verónica es una pieza clave en el proyecto y en la vida de Rolando. Su visión estratégica, compromiso y capacidad para organizar y coordinar hacen que todo funcione con armonía. A lo largo de los años ha demostrado ser una profesional ejemplar y una persona que inspira confianza, constancia y dedicación. Su historia refleja pasión, esfuerzo y contribuciones significativas al éxito del equipo.`,
    image: "/9.jpg"
  }
};

// Componente de tecleo rápido (~3 segundos por descripción)
const TypingText = ({ text, isVisible, onComplete }: { text: string; isVisible: boolean; onComplete: () => void; }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const cleanedText = useMemo(() => text?.trimStart() || "", [text]);

  // Velocidad para que dure 3 segundos
  const speed = cleanedText.length > 0 ? 3 / cleanedText.length : 0.01;

  useEffect(() => {
    if (isVisible) {
      setDisplayedText("");
      setCurrentIndex(0);
    }
  }, [cleanedText, isVisible]);

  useEffect(() => {
    if (isVisible && currentIndex < cleanedText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + cleanedText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed * 1000);
      return () => clearTimeout(timeout);
    } else if (isVisible && currentIndex === cleanedText.length) {
      onComplete();
    }
  }, [currentIndex, cleanedText, isVisible, speed, onComplete]);

  return (
    <motion.p
      className="text-gray-500 mb-4 whitespace-pre-wrap text-left"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
    >
      {displayedText}
    </motion.p>
  );
};

const AnimatedCircleBorder = ({ size=`${1}`, color = "#3b82f6", strokeWidth = 4 }) => {
  const parsedSize = parseInt(size);
  const radius = (parsedSize / 2) - (strokeWidth / 2);
  const circumference = 2 * Math.PI * radius;

  const animationVariants: Variants = { 
    draw: {
      strokeDashoffset: [circumference, 0, circumference * 2], 
      transition: {
        duration: 4, 
        ease: "linear" as any, 
        repeat: Infinity,
      } as Transition,
    },
  };

  return (
    <div className="absolute top-0 left-0" style={{ width: size, height: size }}>
      <motion.svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="absolute top-0 left-0"
      >
        <motion.circle
          cx={parsedSize / 2}
          cy={parsedSize / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          variants={animationVariants}
          animate="draw"
        />
      </motion.svg>
    </div>
  );
};

const floatVariants: Variants = { 
  float: {
    y: ["0px", "-10px", "0px"],
    x: "0px", 
    transition: {
      duration: 5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const sectionVariants: Variants = { 
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const itemVariants: Variants = { 
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const About = () => {
  type TabKey = "rolando" | "tioNano" | "veronica";
  const [activeTab, setActiveTab] = useState<TabKey>("rolando");
  const [isTypingDone, setIsTypingDone] = useState(false);
  const onTypingComplete = useCallback(() => setIsTypingDone(true), []);
  const tabs: TabKey[] = ["rolando", "tioNano", "veronica"];

  return (
    <motion.div
      className="flex flex-col md:flex-row md:gap-20 max-w-[1000px] overflow-hidden mx-auto my-20"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Imagen */}
      <motion.div className="flex-1 items-center mt-5 flex flex-col" variants={itemVariants}>
        <div className="text-center flex flex-col gap-5">
          <h2 className="text-gray-800 text-4xl font-bold">¿Cómo surgió Aircool?</h2>
        </div>

        <motion.div className="mt-10" variants={floatVariants} animate="float">
          <div className="relative rounded-full overflow-hidden shadow-xl" style={{ width: IMAGE_SIZE, height: IMAGE_SIZE }}>
            <Image 
              src={tabContent[activeTab].image} 
              alt={tabContent[activeTab].title} 
              fill 
              style={{ objectFit: 'cover' }}
            />
            <AnimatedCircleBorder size={IMAGE_SIZE} color="#3b82f6" strokeWidth={4} />
          </div>
        </motion.div>
      </motion.div>

      {/* Tabs y descripción */}
      <motion.div className="w-full p-5" variants={itemVariants}>
        <Tabs value={activeTab} onValueChange={(value) => { setActiveTab(value as TabKey); setIsTypingDone(false); }}>
          <TabsList className="rounded-full border w-full flex justify-between mb-10">
            {tabs.map(tabId => (
              <TabsTrigger
                key={tabId}
                value={tabId}
                className="flex-1 text-center h-full w-full py-5 m-0 rounded-full data-[state=active]:bg-blue-500 data-[state=active]:text-white font-light"
              >
                {tabContent[tabId].title}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Contenedor con altura mínima para que se vea todo */}
          <div className="min-h-[450px]">
            <AnimatePresence mode="wait">
              {tabs.map(tabId => activeTab === tabId && (
                <motion.div
                  key={tabId + "-content"}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 text-left">{tabContent[tabId].title}</h2>
                  <TypingText text={tabContent[tabId].description} isVisible={activeTab === tabId} onComplete={onTypingComplete} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </Tabs>
      </motion.div>
    </motion.div>
  );
};

export default About;
