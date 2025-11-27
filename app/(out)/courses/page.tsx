'use client';
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  CheckCircle,
  ArrowLeft,
  BookOpen,
  Clock,
  Mail,
  Phone,
  Instagram,
  Target,
  MapPin,
  CreditCard,
  FileText,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

// --- ARRAY DE CURSOS ---
const courses = [
  {
    id: 1,
    title: "Refrigeracion I: Heladeras y Freezers",
    preview: "Aprende desde cero a reparar y mantener equipos, practicando directamente sobre heladeras y freezers reales, guiado por docentes expertos.",
    // INFORMACION PARA EL PRIMER SLIDE (Resumen)
    summary: {
        title: "Refrigeración Familiar: Heladeras y Freezers",
        duration: "90 días",
        modality: "Presencial con material virtual",
        level: "Inicial – Intermedio – Avanzado (según corresponda)",
        learnings: [
            "Diagnóstico y detección de fallas en sistemas No Frost y convencionales.",
            "Soldaduras, vacío profesional y carga precisa de refrigerantes (R600a/R134a).",
            "Uso de instrumentos: manifold, vacuómetro y pinza amperométrica."
        ]
    },
    // INFORMACION PARA LOS SLIDES DETALLADOS
    structuredContent: {
      objective: "Formar técnicos capaces de analizar, diagnosticar, evaluar y ejecutar intervenciones profesionales en sistemas de refrigeración doméstica (heladeras y freezers), aplicando criterio técnico y normativas vigentes. Al finalizar, el estudiante será capaz de diagnosticar, intervenir y dejar operativo un equipo de refrigeración doméstica, aplicando criterio técnico y normativas vigentes.",
      modality: "Curso presencial y a distancia (b-learning)",
      schedule: [
        { days: "Martes y Jueves", hours: "18:00 a 19:30hs (Turno tarde)" },
        { days: "Lunes y Miércoles", hours: "18:00 a 19:30hs (Turno tarde)" },
      ],
      location: "Av. Marconi 365, Resistencia – Chaco",
      duration: "3 meses",
      fees: [
        { type: "Inscripción", amount: "$10.000 (cupos limitados)" },
        { type: "Pago único", amount: "$145.000 (efectivo, transferencia)" },
        { type: "2 cuotas", amount: "$80.000 (efectivo, transferencia)" },
        { type: "3 cuotas", amount: "$65.000 (efectivo, transferencia)" },
        { type: "Pago con tarjeta", amount: "Consultar valores" },
      ],
      contents: [
        {
          title: "Tema 1: Normas de seguridad en refrigeración doméstica",
          points: [
            "Reglas de seguridad personal y del entorno de trabajo",
            "Riesgos en la manipulación de refrigerantes",
            "Prohibiciones y procedimientos permitidos",
            "Gestión de residuos y normativa ambiental vigente"
          ]
        },
        {
          title: "Tema 2: Fundamentos de la refrigeración",
          points: [
            "Conceptos de calor, transferencia térmica y temperatura",
            "Leyes de la termodinámica aplicadas al ciclo frigorífico",
            "Estados del refrigerante: evaporación, condensación, expansión",
            "Unidades de energía: calorías, BTU, frigorías",
            "Sistema de medición: presión, temperatura, vacío",
            "Interpretación de diagramas presión–temperatura"
          ]
        },
        {
          title: "Tema 3: Ciclo frigorífico aplicado a refrigeradores domésticos",
          points: [
            "Componentes principales: compresor, condensador, evaporador y dispositivo de expansión",
            "Identificación de cada componente en diferentes modelos",
            "Flujo del refrigerante en cada etapa del ciclo",
            "Errores comunes de interpretación del ciclo y consecuencias en la reparación"
          ]
        },
        {
          title: "Tema 4: Gases refrigerantes",
          points: [
            "Tipos de refrigerantes usados en refrigeración doméstica",
            "R600a (isobutano)",
            "R134a",
            "Mezclas y sustituciones",
            "Presiones de trabajo según gas y temperatura",
            "Identificación por etiqueta y clasificación por seguridad",
            "Manipulación responsable y normativa ambiental vigente"
          ]
        },
        {
          title: "Tema 5: Electricidad aplicada al servicio técnico",
          points: [
            "Tensión, corriente, resistencia",
            "Uso práctico de multímetro en diagnóstico eléctrico",
            "Motores monofásicos en refrigeración",
            "Capacitores de arranque y marcha",
            "Esquemas eléctricos de heladeras y freezers"
          ]
        },
        {
          title: "Tema 6: Sistemas de refrigeración doméstica",
          points: [
            "Heladeras de un frío: Flujo del aire frío natural (convección), termostatos y control de temperatura",
            "Heladeras de dos fríos: Distribución de aire, canales internos, válvulas y desvío de flujo",
            "Sistemas No Frost: Recorrido del aire forzado, sistema de deshielo automático (timer, bimetal, fusible térmico), fallas típicas",
            "Freezers (verticales y horizontales): Particularidades del aislamiento, controladores y funcionamiento continuo"
          ]
        },
        {
          title: "Tema 7: Instrumentos y herramientas de servicio",
          points: [
            "Uso del manifold para refrigeración doméstica",
            "Vacuómetro / bomba de vacío",
            "Detector de fugas",
            "Limpieza de circuito y procedimientos de recuperación de refrigerante"
          ]
        },
        {
          title: "Tema 8: Técnicas de reparación, soldaduras y reemplazo de componentes",
          points: [
            "Detección y reparación de fugas (cobre, aluminio, mezclas)",
            "Soldaduras blandas y fuertes",
            "Reemplazo de filtros deshidratadores",
            "Reemplazo de termostatos",
            "Reemplazo de relés y protectores térmicos",
            "Reemplazo de ventiladores de evaporador (No Frost)"
          ]
        },
        {
          title: "Tema 9: Carga de refrigerante y puesta en funcionamiento",
          points: [
            "Procedimiento de vacío",
            "Carga por peso y carga por presión",
            "Control de consumo eléctrico",
            "Evaluación de rendimiento del equipo y entrega al cliente"
          ]
        },
        {
          title: "Tema 10: Ejercicios de diagnóstico en equipos reales",
          points: [
            "Heladera de un frío → falla en termostato",
            "Dos fríos → obstrucción parcial del capilar",
            "No Frost → evaporador congelado / falla de deshielo",
            "Freezer → fuga en evaporador / pérdida de gas"
          ]
        },
      ],
      contact: {
        whatsapp: "+54 362 5490089",
        email: "aircool.integral@gmail.com",
        instagram: "@aircoolrefrigeracion"
      }
    },
    images: ["/curso-freezers/1.jpeg", "/curso-freezers/2.jpeg", "/curso-freezers/3.jpeg", "/curso-freezers/4.jpeg"],
  },
  {
    id: 2,
    title: "Curso de Refrigeración II: Aire Acondicionado Split",
    preview: "Fórmate como técnico especializado en Instalación, aprendiendo paso a paso a montar e instalar equipos Split y Mini Split.",
    // INFORMACION PARA EL PRIMER SLIDE (Resumen)
    summary: {
        title: "Aire Acondicionado Split",
        duration: "30 Días",
        modality: "Presencial y a distancia (b-learning)",
        level: "Inicial – Intermedio – Avanzado (según corresponda)",
        learnings: [
            "Fijación de unidad interior y exterior.",
            "Correcto uso de gases refrigerantes.",
            "Acoples flare, soldaduras y vacío profesional."
        ]
    },
    // INFORMACION PARA LOS SLIDES DETALLADOS (ACTUALIZADO CON DOCUMENTO 2)
    structuredContent: {
      objective: "Lograr las capacidades y destrezas de un profesional técnico para el montaje e instalación de equipos Split y mini Split de baja potencia, sujeto a las condiciones y normativas vigentes.",
      modality: "Presencial y a distancia (b-learning)",
      schedule: [
        { days: "Martes y Jueves", hours: "15:30 a 17hs / 20:00 a 21:30" },
        { days: "Lunes y Miércoles", hours: "15:30 a 17hs / 20:00 a 21:30" }
      ],
      duration: "1 mes",
      location: "Av. Marconi 365, Resistencia – Chaco",
      fees: [
        { type: "Inscripción", amount: "$10.000 (cupos limitados)" },
        { type: "Pago único", amount: "$65.000 (efectivo, transferencia)" },
        { type: "Pago con tarjeta en 2 cuotas", amount: "$35.000" }
      ],
      contents: [
        { title: "Tema 1: Normas de seguridad y prohibiciones", points: ["Seguridad personal", "Seguridad del entorno"] },
        {
            title: "Tema 2: Conceptos básicos",
            points: [
              "Calor y Temperatura",
              "Leyes de la termodinámica",
              "Relación con la refrigeración de Equipos Split",
              "Sistema de medición",
              "Cálculo de Superficie",
              "Frigorías o Calorías, Aire acondicionado o acondicionador de aire",
              "Balance térmico simplificado",
              "Gases Refrigerantes",
              "Mediciones"
            ]
        },
        {
            title: "Tema 3: Comprender los conceptos básicos de la electricidad",
            points: [
              "Corriente eléctrica",
              "Diferencia de potencial",
              "Resistencia",
              "Ley de Ohm",
              "Conexión de alimentación de fuerza",
              "Calculo de sección según tabla",
              "Cables Auxiliares"
            ]
        },
        {
            title: "Tema 4: Partes de un equipo Split, insumos y accesorios",
            points: [
              "Tipos de Cañerías y Conexiones",
              "Abocardado de Cañerías",
              "Aislantes para Cañerías",
              "Tipos de Desagüe",
              "Ubicación del Desagüe",
              "Aislación en desagües",
              "Cintas de Protección",
              "Unidad Interior",
              "Unidad Exterior",
              "Disposiciones y ubicación de montaje.",
              "Errores comunes."
            ]
        },
        {
            title: "Tema 5: Ciclo de refrigeración básico y sus gases",
            points: [
              "Ciclo básico de refrigeración:",
              "Refrigerantes:",
              "Presiones de trabajo según el tipo de refrigerante:",
              "Errores comunes."
            ]
        },
        {
            title: "Tema 6: Conceptos básicos de presión y vacío.",
            points: [
              "Definición de presión y vacío",
              "Prueba de Presurización y Vacío",
              "Unidades de Vacío y Presión"
            ]
        },
        {
            title: "Tema 7: Anclaje seguro y selección de fijaciones según tipo de mampostería",
            points: [
              "Normas de Seguridad:",
              "Elementos de Fijación",
              "Mampostería",
              "Determinación de Resistencia",
              "Simulador de anclaje"
            ]
        },
        {
            title: "Tema 8: Montaje de unidades, metodología de instalación",
            points: [
              "Tipos de Salidas de cañería",
              "Herramientas Necesaria",
              "Insumos de Sellado",
              "Montaje a nivel de pis",
              "Montaje en altura"
            ]
        },
        {
            title: "Tema 9: Conexión y puesta en marcha de equipos Split y mini Split en simulador didáctico",
            points: [
              "Preparación del lugar y mediciones",
              "Montaje e Instalación de unidades",
              "Preparación de Caños",
              "Prueba hidráulica",
              "Prueba de vacío",
              "Conexión drenaje",
              "Puesta en marcha y controles"
            ]
        }
      ],
      activities: [
        "27 clases grabadas en nuestro Campus Virtual",
        "Material PDF descargable",
        "Soporte telefónico personalizado",
        "Acceso ilimitado 24/7",
        "Certificado con reconocimiento del Ingeniero Orlando Miceli y el Lic. Rolando Miceli"
      ],
      requirements: ["Diploma con aval institucional"],
      contact: {
        whatsapp: "+54 362 5490089",
        email: "aircool.integral@gmail.com",
        instagram: "@aircoolrefrigeracion"
      }
    },
    images: ["/curso-split/1.jpeg", "/curso-split/2.jpeg", "/curso-split/3.jpeg", "/curso-split/4.jpeg"],
  },
  {
    id: 3,
    title: "Electricidad I: Instalaciones Eléctricas",
    preview: "Conviértete en técnico en instalaciones eléctricas. Aprende a realizar instalaciones seguras, leer planos y elegir protecciones. Obtén un certificado que avala tus habilidades.",
    // INFORMACION PARA EL PRIMER SLIDE (Resumen)
    summary: {
        title: "Electricidad Domiciliaria",
        duration: "3 meses",
        modality: "Presencial y/o virtual",
        level: "Sin experiencia",
        learnings: [
            "Circuitos y conexionado profesional.",
            "Montaje y configuración de tableros eléctricos.",
            "Técnicas de medición (multímetro y pinza amperométrica).",
            "Aplicación de normas IRAM, AEA y prácticas de seguridad."
        ]
    },
    // INFORMACION PARA LOS SLIDES DETALLADOS (ACTUALIZADO CON DOCUMENTO 3)
    structuredContent: {
      objective: "Capacitar a personas sin experiencia previa en el área, para que adquieran los conocimientos y habilidades necesarias para desempeñarse como técnicos en instalaciones eléctricas domiciliarias, conforme a las normas vigentes de seguridad y buenas prácticas. Al finalizar el curso, el alumno será capaz de planificar y ejecutar instalaciones eléctricas seguras, interpretar planos y esquemas de conexión, y seleccionar adecuadamente los elementos de protección para garantizar la seguridad de las personas y las instalaciones. Los participantes que completen satisfactoriamente la capacitación obtendrán un certificado de finalización del curso, avalando las competencias adquiridas.",
      modality: "Presencial y/o virtual",
      schedule: [
        { days: "3 días por semana", hours: "1,5hs por día (4,5hs semanales, 54hs totales)" }
      ],
      location: "Av. Marconi 365, Resistencia – Chaco",
      duration: "3 meses",
      fees: [
        { type: "Inscripción", amount: "$10.000" },
        { type: "Pago único", amount: "$120.000 (efectivo, transferencia)" },
        { type: "2 cuotas", amount: "$65.000" },
        { type: "3 cuotas", amount: "$45.000" },
        { type: "Pago con tarjeta", amount: "Consultar valores" },
      ],
      contents: [
        {
          title: "Módulo 1: Fundamentos de Electricidad (2 semanas)",
          points: [
            "Magnitudes eléctricas básicas: tensión, corriente, potencia y resistencia.",
            "Corriente continua y alterna.",
            "Unidades y leyes fundamentales (Ohm, Joule, Watt).",
            "Identificación de conductores y simbología eléctrica.",
            "Normas de seguridad eléctrica."
          ]
        },
        {
          title: "Módulo 2: Elementos de la Instalación Domiciliaria (3 semanas)",
          points: [
            "Conductores y aislantes.",
            "Tipos de cables y canalizaciones.",
            "Dispositivos de maniobra y protección (llaves, termomagnéticas, disyuntores diferenciales).",
            "Cálculo de secciones de conductores y protección adecuada.",
            "Tablero principal y circuitos derivados."
          ]
        },
        {
          title: "Módulo 3: Instalaciones en Viviendas (4 semanas)",
          points: [
            "Distribución de circuitos en una vivienda tipo.",
            "Instalación de iluminación y tomacorrientes.",
            "Conexión de artefactos de Iluminación.",
            "Normas IRAM y reglamento AEA.",
            "Práctica de montaje: cañerías, cajas, empalmes y conexionado."
          ]
        },
        {
          title: "Módulo 4: Verificación, Medición y Seguridad (3 semanas)",
          points: [
            "Uso del Multímetro y pinza amperométrica.",
            "Medición de continuidad, aislamiento y consumo.",
            "Detección y corrección de fallas comunes.",
            "Conexión a tierra y protección diferencial.",
            "Mantenimiento preventivo y buenas prácticas."
          ]
        }
      ],
      activities: [
        "Armado de un tablero domiciliario básico.",
        "Cableado e instalación de un circuito de iluminación y tomas.",
        "Simulación de fallas y diagnóstico.",
        "Aplicación de normas de seguridad en taller."
      ],
      requirements: [
        "Edad mínima: 18 años.",
        "Modalidad Presencial: completar el 80% de asistencia.",
        "Modalidad Virtual: completar el 100% de descargas y 100% de trabajos online.",
        "Evaluaciones – Modalidad Presencial: prácticas en taller y examen teórico-práctico final integrador.",
        "Evaluaciones – Modalidad Virtual: examen teórico-práctico final integrador en taller.",
        "Certificación: Instalador Domiciliario Nivel Inicial."
      ],
      contact: {
        whatsapp: "+54 362 5490089",
        email: "electricidad@example.com",
        instagram: "@electricidadtecnica"
      }
    },
    images: ["/curso-electricidad/1.jpeg", "/curso-electricidad/2.jpeg", "/curso-electricidad/3.jpeg", "/curso-electricidad/4.jpeg"],
  }
];

// --- FUNCION PARA GENERAR EL CONTENIDO DEL SLIDE DE RESUMEN ---
const generateSummaryContent = (summary: any, onButtonClick: () => void) => (
    <div className="space-y-4 text-gray-700 dark:text-gray-300">
        
        {/* Duración y Modalidad */}
        <div className="border-b pb-3 border-blue-100 dark:border-gray-700 space-y-1">
            <p><Clock className="inline w-4 h-4 mr-1 text-blue-400" /> Duración: <strong>{summary.duration}</strong></p>
            <p><FileText className="inline w-4 h-4 mr-1 text-blue-400" /> Modalidad: {summary.modality}</p>
            <p className="text-sm">Nivel: {summary.level}</p>
        </div>

        {/* Lo que aprenderás */}
        <div>
            <h4 className="font-semibold mb-1 flex items-center gap-1 text-gray-900 dark:text-white">
                Lo que aprenderás:
            </h4>
            <ul className="list-disc list-inside ml-5 space-y-0.5 text-sm">
                {summary.learnings.map((learning: string, idx: number) => (
                    <li key={idx}>{learning}</li>
                ))}
            </ul>
        </div>
        
        {/* Botón Detalles Académicos */}
        <div className="pt-4 flex justify-center">
            <button 
                onClick={onButtonClick} 
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold transition-colors duration-200 shadow-md"
            >
                Detalles Académicos <ArrowLeft className="inline w-4 h-4 ml-1 transform rotate-180" />
            </button>
        </div>
    </div>
);


// --- COMPONENTE PRINCIPAL ---
export default function CursosPage() {
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [buyerName, setBuyerName] = useState("");
  const [showDetails, setShowDetails] = useState(false); 

  const currentCourse = courses.find(c => c.id === selectedCourse);

  const openInfoModal = (id: number) => {
    setSelectedCourse(id);
    setShowInfoModal(true);
    setShowDetails(false); 
    setActiveSlide(0);
  };

  const openBuyModal = (id: number) => {
    setSelectedCourse(id);
    setShowBuyModal(true);
  };

  const closeModals = () => {
    setShowInfoModal(false);
    setShowBuyModal(false);
    setSelectedCourse(null);
    setActiveSlide(0);
    setBuyerName("");
    setShowDetails(false); 
  };

  const detailSlides = currentCourse ? [
    { title: "Objetivo del Curso", icon: <Target />, content: currentCourse.structuredContent.objective },
    { title: "Duración y Horarios", icon: <Clock />, content: (
      <div className="space-y-2">
        <div><strong>Duración Total:</strong> {currentCourse.structuredContent.duration}</div>
        <div><strong>Modalidad:</strong> {currentCourse.structuredContent.modality}</div>
        <div><strong>Días y horarios:</strong></div>
        <ul className="list-disc list-inside ml-5">
          {currentCourse.structuredContent.schedule.map((s, idx) => (
            <li key={idx}>{s.days} → {s.hours}</li>
          ))}
        </ul>
      </div>
    )},
    { title: "Ubicación", icon: <MapPin />, content: currentCourse.structuredContent.location },
    { title: "Inversión y Costos", icon: <CreditCard />, content: (
      <ul className="list-disc list-inside ml-5 space-y-1">
        {currentCourse.structuredContent.fees.map((f, idx) => (
          <li key={idx}>{f.type}: {f.amount}</li>
        ))}
      </ul>
    )},
    { title: "Contenidos Detallados", icon: <FileText />, content: (
      <div className="space-y-2">
        {currentCourse.structuredContent.contents.map((topic, idx) => (
          <div key={idx}>
            <h4 className="font-semibold">{topic.title}</h4>
            <ul className="list-disc list-inside ml-5">
              {topic.points.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </div>
        ))}
      </div>
    )},
    { title: "Contacto", icon: <Mail />, content: (
      <ul className="space-y-1">
        <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> {currentCourse.structuredContent.contact.whatsapp}</li>
        <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> {currentCourse.structuredContent.contact.email}</li>
        <li className="flex items-center gap-2"><Instagram className="w-4 h-4" /> {currentCourse.structuredContent.contact.instagram}</li>
      </ul>
    )}
  ] : [];

  const sendWhatsapp = () => {
    if (!buyerName || !currentCourse) return;
    const message = `Hola, soy ${buyerName} y voy a enviar el comprobante de pago para el curso ${currentCourse.title}`;
    const phone = currentCourse.structuredContent.contact.whatsapp.replace(/\D/g,''); 
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const currentSlides = showDetails ? detailSlides : [];

  return (
    <div className="bg-gray-50 dark:bg-gray-950  lg:h-screen overflow-hidden text-gray-900 dark:text-white min-h-screen transition-colors duration-300 ">
      <main className="py-10 px-5 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
          {courses.map((course) => (
            <motion.div
              key={course.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 flex flex-col justify-between overflow-hidden transition-colors duration-300 max-w-sm w-full"
            >
              <div>
                <h2 className="text-2xl font-bold text-blue-300 flex items-center gap-2 mb-3">
                  <BookOpen className="w-6 h-6" /> {course.title}
                </h2>

                {/* --- SECCIÓN DE PREVIEW: SOLO TEXTO DESCRIPTIVO (SE MANTUVO) --- */}
                <div className="space-y-3 text-gray-700 dark:text-gray-300 text-sm mb-3">
                  <p className="text-gray-700 dark:text-gray-300">
                    {course.preview}
                  </p>
                </div>
                {/* ------------------------------------------- */}

                <div className="grid grid-cols-2 gap-2 mt-3">
                  {course.images.map((img, idx) => (
                    <div key={idx} className="relative w-full h-32 rounded-lg overflow-hidden">
                      <Image
                        src={img}
                        alt={`Imagen curso ${course.title}`}
                        fill
                        className="object-cover transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex gap-3">
                <button
                  onClick={() => openInfoModal(course.id)}
                  className="w-1/2 bg-blue-300 hover:bg-blue-400 text-white py-2 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-1"
                >
                  <BookOpen className="w-5 h-5" /> Ver más
                </button>
                <button
                  onClick={() => openBuyModal(course.id)}
                  className="w-1/2 bg-blue-300 hover:bg-blue-400 text-white py-2 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-1"
                >
                  <CheckCircle className="w-5 h-5" /> Comprar
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>


      {/* MODAL INFO (LÓGICA DE DETALLES Y RESUMEN) */}
      {showInfoModal && currentCourse && (
        <div className="fixed inset-0 backdrop-blur-md flex justify-center items-center z-50 p-4" onClick={closeModals}>
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-[90vw] md:w-[40vw] h-[90vh] flex flex-col relative overflow-hidden"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 sticky top-0 z-10">
              <div className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white">
                <BookOpen className="w-6 h-6" /> {currentCourse.summary.title}
              </div>
              <button onClick={closeModals} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                <ArrowLeft className="w-5 h-5 text-gray-900 dark:text-white" />
              </button>
            </div>

            {/* CONTENIDO PRINCIPAL DEL MODAL */}
            <div className="relative flex-1 flex items-center px-6 py-4 overflow-hidden">
                
              {/* VISTA DE RESUMEN (DEFAULT) */}
              {!showDetails && (
                <motion.div
                  key="summary"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full overflow-y-auto px-4 py-2 flex items-center justify-center"
                >
                  {generateSummaryContent(currentCourse.summary, () => setShowDetails(true))}
                </motion.div>
              )}

              {/* VISTA DE DETALLES ACADÉMICOS (SLIDES) */}
              {showDetails && (
                <>
                  {/* Navegación de Slides (Solo visible en Detalles) */}
                  <button
                    onClick={() => setActiveSlide((prev) => Math.max(prev - 1, 0))}
                    disabled={activeSlide === 0}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-blue-300 dark:bg-gray-700 disabled:opacity-50 z-20 shadow"
                  >
                    <ChevronLeft className="w-5 h-5 text-white" />
                  </button>
                  <button
                    onClick={() => setActiveSlide((prev) => Math.min(prev + 1, detailSlides.length -1))}
                    disabled={activeSlide === detailSlides.length -1}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-blue-300 dark:bg-gray-700 disabled:opacity-50 z-20 shadow"
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>

                  <motion.div
                    key={activeSlide}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full overflow-y-auto px-4 py-2"
                  >
                    <div className="flex items-center gap-2 mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                      {currentSlides[activeSlide].icon} {currentSlides[activeSlide].title}
                    </div>
                    <div className="text-gray-700 dark:text-gray-300 text-sm md:text-base space-y-2">
                      {currentSlides[activeSlide].content}
                    </div>
                  </motion.div>
                </>
              )}
            </div>

            {/* Indicador y Botón Volver */}
            <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 sticky bottom-0">
                {showDetails ? (
                    <>
                        <button
                            onClick={() => { setShowDetails(false); setActiveSlide(0); }}
                            className="text-sm text-blue-500 hover:text-blue-400 flex items-center gap-1"
                        >
                            <ArrowLeft className="w-4 h-4" /> Volver al Resumen
                        </button>
                        
                        <div className="flex justify-center gap-2">
                            {detailSlides.map((_, idx) => (
                                <span
                                    key={idx}
                                    className={`w-3 h-3 rounded-full transition-colors ${idx === activeSlide ? "bg-blue-400 dark:bg-blue-300" : "bg-gray-300 dark:bg-gray-600 dark:bg-gray-500"}`}
                                ></span>
                            ))}
                        </div>
                        <div className="w-20"> {/* Espaciador para centrar los puntos */} </div>
                    </>
                ) : (
                    // Aquí se quita el texto "Información clave"
                    <div className="w-full h-4"> </div> 
                )}
            </div>
          </motion.div>
        </div>
      )}

      {/* MODAL COMPRA (Sin cambios) */}
      {showBuyModal && currentCourse && (
        <div className="fixed inset-0 backdrop-blur-md flex justify-center items-center z-50 p-4" onClick={closeModals}>
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-[90vw] md:w-[40vw] p-6 flex flex-col relative overflow-hidden"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">{currentCourse.title}</h2>
              <button onClick={closeModals} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                <ArrowLeft className="w-5 h-5 text-gray-900 dark:text-white" />
              </button>
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-gray-700 dark:text-gray-300">Tu nombre:</label>
              <input
                type="text"
                value={buyerName}
                onChange={(e) => setBuyerName(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Ingresa tu nombre"
              />
            </div>
            <button
              onClick={sendWhatsapp}
              className="bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold transition-colors duration-200"
            >
              Enviar comprobante por WhatsApp
            </button>
          </motion.div>
        </div>
      )}

    </div>
  );
}