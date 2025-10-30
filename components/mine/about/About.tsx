import React, { useState, useEffect, useCallback, useMemo } from "react";
// Importamos 'Variants' y 'Transition' de Framer Motion para tipar correctamente
import { motion, AnimatePresence, Variants, Transition } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

// --- TIPOS DE TYPESCRIPT 🤖 ---

interface TabItem {
  title: string;
  description: string;
}

interface TabContentMap {
  tab1: TabItem;
  tab2: TabItem;
  tab3: TabItem;
  [key: string]: TabItem; 
}


// --- Constantes de la Imagen y Secuencia ---
const IMAGE_URL = "/3.jpg"; 
const IMAGE_SIZE = "300px";
const tabSequence = ["tab1", "tab2", "tab3"] as const; 

// ===================================
// I. COMPONENTE DE TEXTO TECLEADO
// ===================================
const TypingText = ({ text, isVisible, onComplete, speed = 0.015 }: { text: string; isVisible: boolean; onComplete: () => void; speed?: number; }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  // CORRECCIÓN DE SANGRÍA: Usamos .trimStart()
  const cleanedText = useMemo(() => text.trimStart(), [text]);

  // Reiniciar cuando la pestaña cambie
  useEffect(() => {
    if (isVisible) {
      setDisplayedText(""); 
      setCurrentIndex(0); 
    }
  }, [cleanedText, isVisible]);

  // Lógica de tecleo
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


// ===================================
// II. COMPONENTE DE BORDE SVG GIRATORIO (Tipado Framer Motion Corregido)
// ===================================

const AnimatedCircleBorder = ({ size=`${1}`, color = "#3b82f6", strokeWidth = 4 }) => {
  const parsedSize = parseInt(size);
  const radius = (parsedSize / 2) - (strokeWidth / 2);
  const circumference = 2 * Math.PI * radius;

  // Tipado explícito con Variants de Framer Motion
  const animationVariants: Variants = { 
    draw: {
      strokeDashoffset: [circumference, 0, circumference * 2], 
      transition: {
        duration: 4, 
        // Solución al error ts(2322): Casteamos "linear" a 'any' 
        ease: "linear" as any, 
        repeat: Infinity,
      } as Transition, // Tipado explícito de la transición
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


// ===================================
// III. VARIANTES FRAMER MOTION Y DATOS
// ===================================

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

// **Datos del contenido de las pestañas con tipado TabContentMap**
const tabContent: TabContentMap = {
  tab1: {
    title: "Los comienzos",
    description: `Rolando Miceli descubrió su vocación entre motores, herramientas y el sonido del metal trabajando. Se formó como Técnico Electromecánico de nivel medio y, con apenas 19 años, comenzó su trayectoria profesional en la empresa multinacional Casa Tía S.A., donde aprendió el valor de la precisión, la disciplina y el trabajo bien hecho.`,
  },
  tab2: {
    title: "Formación y vocación docente",
    description: `Movido por su interés por la ciencia y los procesos industriales, inició la carrera de Ingeniería Química, experiencia que amplió su mirada técnica. Sin embargo, fueron los talleres, las reparaciones y el contacto con la realidad del servicio técnico los que terminaron de definir su camino. Tras años de práctica y experiencia, descubrió una nueva vocación: formar a otros. Por eso estudió el Profesorado en Educación Técnica, y más tarde se convirtió en Licenciado en Tecnología Educativa, convencido de que enseñar es también construir futuro.`,
  },
  tab3: {
    title: "Fundación de Aircool Refrigeración",
    description: `En 2007, fundó Aircool Refrigeración, empresa dedicada al servicio técnico en sistemas de refrigeración familiar y comercial. A lo largo de los años, su nombre se consolidó en la región por la ética profesional, la experiencia y la confianza de más de 2.500 clientes.`,
  },
};


// ===================================
// IV. COMPONENTE PRINCIPAL ABOUT
// ===================================

const About = () => {
  // Define el tipo de clave válido para el estado
  type TabKey = typeof tabSequence[number];
  const [activeTab, setActiveTab] = useState<TabKey>("tab1");
  const [isTypingDone, setIsTypingDone] = useState(false);

  const onTypingComplete = useCallback(() => {
    setIsTypingDone(true);
  }, []);

  useEffect(() => {
    if (isTypingDone) {
      const timeout = setTimeout(() => {
        setActiveTab((prevTab) => {
          const currentIndex = tabSequence.indexOf(prevTab);
          const nextIndex = (currentIndex + 1) % tabSequence.length;
          setIsTypingDone(false);
          // Aseguramos el tipo para el siguiente valor
          return tabSequence[nextIndex] as TabKey; 
        });
      }, 5000); 

      return () => clearTimeout(timeout);
    }
  }, [isTypingDone, activeTab]);


  return (
    <motion.div
      // **SOLUCIÓN AL SCROLL HORIZONTAL:** Se añade 'overflow-x-hidden' al contenedor principal.
      className="flex flex-col md:flex-row md:gap-20 max-w-[1000px] md:h-[500px] overflow-y-hidden overflow-x-hidden mx-auto my-20"
      variants={sectionVariants} 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Columna de la Imagen */}
      <motion.div
        className="flex-1 items-center mt-5 hidden md:flex md:flex-col"
        variants={itemVariants} 
      >
        <div className="text-center flex flex-col gap-5">
          <h2 className="text-gray-800 text-4xl font-bold">¿Como surgió Aircool?</h2>
          <p className="text-gray-400">Informacion acerca de Rolando Micheli</p>
        </div>
        
        {/* Contenedor de la Imagen Flotante y con Borde SVG Animado */}
        <motion.div
            className="mt-10"
            variants={floatVariants} 
            animate="float"
        >
            <div 
                className="relative rounded-full overflow-hidden shadow-xl"
                style={{ width: IMAGE_SIZE, height: IMAGE_SIZE }}
            >
                <Image 
                    src={IMAGE_URL} 
                    alt="Rolando with a certificate" 
                    fill 
                    style={{ objectFit: 'cover' }}
                />
                {/* Borde SVG Animado Giratorio */}
                <AnimatedCircleBorder size={IMAGE_SIZE} color="#3b82f6" strokeWidth={4} />
            </div>
        </motion.div>
        
      </motion.div>

      {/* Contenido de Tabs */}
      <motion.div
        className="w-full p-5"
        variants={itemVariants} 
      >
        <Tabs 
          value={activeTab} 
          onValueChange={(value) => setActiveTab(value as TabKey)}
        >
          {/* Lista de pestañas */}
          <TabsList className="rounded-full border w-full flex justify-between mb-10 ">
            {tabSequence.map((tabId) => (
              <TabsTrigger
                key={tabId}
                className="flex-1 text-center h-full w-full py-5 m-0 rounded-full data-[state=active]:bg-blue-500 data-[state=active]:text-white font-light"
                value={tabId}
                onClick={() => setIsTypingDone(false)}
              >
                {tabId === "tab1" ? "Inicios" : tabId === "tab2" ? "Formación" : "Aircool"}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Contenido de cada pestaña */}
          <div>
            <AnimatePresence mode="wait">
              {tabSequence.map(tabId => activeTab === tabId && (
                <motion.div
                  key={tabId + "-content"} 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 text-left md:text-left">
                    {tabContent[tabId].title} 
                  </h2>
                  <TypingText 
                    text={tabContent[tabId].description}
                    isVisible={activeTab === tabId}
                    onComplete={onTypingComplete}
                  />
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