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

const courses = [
  // --- Curso 1: Refrigeracion I ---
  {
    id: 1,
    title: "REFRIGERACION I (Domicilio)",
    structuredContent: {
      objective: "Formar técnicos capaces de analizar, diagnosticar, evaluar y ejecutar intervenciones profesionales en sistemas de refrigeración doméstica —heladeras de un frío, dos fríos, sistemas No Frost y freezers— aplicando procedimientos seguros de manipulación de refrigerantes conforme a normativas vigentes, y tomando decisiones técnicas fundamentadas para la puesta en funcionamiento óptimo de los equipos.",
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
          title: "Tema 2: Tipos de equipos",
          points: [
            "Heladeras de un frío y dos fríos",
            "Sistemas No Frost",
            "Freezers",
            "Funcionamiento de compresores y circuitos",
            "Componentes principales y auxiliares"
          ]
        },
        {
          title: "Tema 3: Diagnóstico y reparación",
          points: [
            "Herramientas y materiales necesarios",
            "Técnicas de diagnóstico de fallas",
            "Reparación de circuitos y compresores",
            "Mantenimiento preventivo y correctivo",
            "Pruebas finales de funcionamiento"
          ]
        },
        {
          title: "Tema 4: Prácticas en taller",
          points: [
            "Desmontaje y montaje de heladeras y freezers",
            "Medición de presiones y temperaturas",
            "Carga de refrigerante y verificación de fugas",
            "Simulación de fallas y resolución"
          ]
        }
      ],
      contact: {
        whatsapp: "+54 362 5490089",
        email: "aircool.integral@gmail.com",
        instagram: "@aircoolrefrigeracion"
      }
    },
    images: ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg"],
  },

  // --- Curso 2: Electricidad Domiciliaria I ---
  {
    id: 2,
    title: "Electricidad Domiciliaria I",
    structuredContent: {
      objective: "Capacitar a personas sin experiencia previa en el área, para que adquieran los conocimientos y habilidades necesarias para desempeñarse como técnicos en instalaciones eléctricas domiciliarias, conforme a las normas vigentes de seguridad y buenas prácticas.",
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
          title: "Módulo 1: Fundamentos de Electricidad",
          points: [
            "Magnitudes eléctricas básicas: tensión, corriente, potencia y resistencia",
            "Corriente continua y alterna",
            "Unidades y leyes fundamentales (Ohm, Joule, Watt)",
            "Identificación de conductores y simbología eléctrica",
            "Normas de seguridad eléctrica"
          ]
        },
        {
          title: "Módulo 2: Instalaciones domiciliarias",
          points: [
            "Planificación y diseño de instalaciones",
            "Interpretación de planos y esquemas",
            "Montaje de circuitos de iluminación y tomas",
            "Elementos de protección y seguridad"
          ]
        },
        {
          title: "Módulo 3: Prácticas y evaluación",
          points: [
            "Simulación de fallas y diagnóstico",
            "Prácticas en taller",
            "Examen teórico-práctico final integrador",
            "Certificación final"
          ]
        }
      ],
      activities: [
        "Armado de un tablero domiciliario básico",
        "Cableado e instalación de un circuito de iluminación y tomas",
        "Simulación de fallas y diagnóstico",
        "Aplicación de normas de seguridad en taller"
      ],
      requirements: [
        "Edad mínima: 18 años",
        "Modalidad Presencial: completar el 80% de asistencia",
        "Modalidad Virtual: completar el 100% de descargas y trabajos online",
        "Evaluaciones – Presencial: prácticas y examen final integrador",
        "Evaluaciones – Virtual: examen final integrador en taller",
        "Certificación: Instalador Domiciliario Nivel Inicial"
      ],
      contact: {
        whatsapp: "+54 362 5490089",
        email: "electricidad@example.com",
        instagram: "@electricidadtecnica"
      }
    },
    images: ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg"]
  },

  // --- Curso 3: Instalador de Split ---
  {
    id: 3,
    title: "INSTALADOR DE SPLIT (MINISPLIT)",
    structuredContent: {
      objective: "Lograr las capacidades y destrezas de un profesional técnico para el montaje e instalación de equipos Split y mini Split de baja potencia, sujeto a las condiciones y normativas vigentes.",
      modality: "Presencial y a distancia (b-learning)",
      schedule: [
        { days: "Martes y Jueves", hours: "15:30 a 17hs (Turno tarde) / 20:00 a 21:30 (Turno noche)" },
        { days: "Lunes y Miércoles", hours: "15:30 a 17hs (Turno tarde) / 20:00 a 21:30 (Turno noche)" }
      ],
      location: "Av. Marconi 365, Resistencia – Chaco",
      duration: "1 mes",
      fees: [
        { type: "Inscripción", amount: "$10.000 (cupos limitados)" },
        { type: "Pago único", amount: "$65.000 (efectivo, transferencia)" },
        { type: "Pago con tarjeta en 2 cuotas", amount: "$35.000" }
      ],
      contents: [
        {
          title: "Tema 1: Normas de seguridad y prohibiciones",
          points: [
            "Seguridad personal y del entorno",
            "Prohibiciones de manipulación incorrecta",
            "Uso adecuado de herramientas y equipos"
          ]
        },
        {
          title: "Tema 2: Montaje de equipos Split",
          points: [
            "Preparación del espacio y ubicación del equipo",
            "Conexión de línea frigorífica",
            "Instalación de unidades interior y exterior",
            "Pruebas de funcionamiento y regulación"
          ]
        },
        {
          title: "Tema 3: Prácticas y certificación",
          points: [
            "27 clases grabadas en Campus Virtual",
            "Material PDF descargable",
            "Soporte telefónico personalizado",
            "Acceso ilimitado 24/7",
            "Certificado final con reconocimiento institucional"
          ]
        }
      ],
      activities: [
        "Prácticas guiadas en instalación de Split",
        "Simulación de fallas y diagnóstico",
        "Montaje completo de mini Split",
        "Examen teórico-práctico final"
      ],
      requirements: ["Diploma con aval institucional"],
      contact: {
        whatsapp: "+54 362 5490089",
        email: "aircool.integral@gmail.com",
        instagram: "@aircoolrefrigeracion"
      }
    },
    images: ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg"]
  }
];

export default courses;