import {
  Wrench,
  Snowflake,
  Zap,
} from "lucide-react";

export const courses = [
  {
    id: 1,
    title: "Instalación de Aire Acondicionado Split",
    preview:
      "Aprende desde cero a instalar equipos split residenciales de forma profesional.",

    Icon: Snowflake,

    images: [
      "/curso-split/1.jpeg",
      "/curso-split/2.jpeg",
      "/curso-split/3.jpeg",
      "/curso-split/4.jpeg",
    ],

    summary: {
      title: "Instalación de Aire Split",
      duration: "4 semanas",
      modality: "Presencial",
      level: "Inicial",
      learnings: [
        "Montaje de unidad interior",
        "Instalación de unidad exterior",
        "Vacío y carga del sistema",
        "Pruebas de funcionamiento",
      ],
    },

    structuredContent: {
      objective:
        "Capacitar al alumno para instalar equipos split residenciales de forma segura.",

      duration: "4 semanas",
      modality: "Presencial",
      location: "Resistencia, Chaco",

      contents: [
        {
          title: "Fundamentos",
          points: [
            "Tipos de equipos",
            "Herramientas",
            "Seguridad",
          ],
        },
        {
          title: "Instalación",
          points: [
            "Soportes",
            "Cañerías",
            "Cableado",
          ],
        },
      ],

      activities: [
        "Prácticas reales",
        "Instalación completa",
      ],

      requirements: [
        "Ser mayor de 16 años",
        "No se requieren conocimientos previos",
      ],

      fees: [
        {
          type: "Contado",
          amount: "$120.000",
        },
        {
          type: "Cuotas",
          amount: "3 x $45.000",
        },
      ],

      contact: {
        whatsapp: "+54 362 1234567",
        email: "info@aircool.com",
        instagram: "@aircool",
      },
    },
  },

  {
    id: 2,
    title: "Refrigeración Comercial",
    preview:
      "Diagnóstico, mantenimiento y reparación de cámaras frigoríficas y sistemas comerciales.",

    Icon: Wrench,

    images: [
      "/curso-freezers/3.jpeg",
      "/curso-freezers/4.jpeg",
      "/curso-freezers/1.jpeg",
      "/curso-freezers/2.jpeg",
    ],

    summary: {
      title: "Refrigeración Comercial",
      duration: "8 semanas",
      modality: "Presencial",
      level: "Intermedio",
      learnings: [
        "Diagnóstico de fallas",
        "Medición de presiones",
        "Carga de refrigerante",
        "Mantenimiento preventivo",
      ],
    },

    structuredContent: {
      objective:
        "Formar técnicos capaces de trabajar en sistemas de refrigeración comercial.",

      duration: "8 semanas",
      modality: "Presencial",
      location: "Resistencia, Chaco",

      contents: [
        {
          title: "Circuito frigorífico",
          points: [
            "Compresor",
            "Condensador",
            "Evaporador",
          ],
        },
        {
          title: "Diagnóstico",
          points: [
            "Presiones",
            "Temperaturas",
            "Fugas",
          ],
        },
      ],

      activities: [
        "Prácticas en equipos reales",
        "Simulación de fallas",
      ],

      requirements: [
        "Conocimientos básicos de refrigeración",
      ],

      fees: [
        {
          type: "Contado",
          amount: "$180.000",
        },
      ],

      contact: {
        whatsapp: "+54 362 1234567",
        email: "info@aircool.com",
        instagram: "@aircool",
      },
    },
  },

  {
    id: 3,
    title: "Electricidad Aplicada a Climatización",
    preview:
      "Interpretación de circuitos eléctricos y resolución de fallas en equipos de climatización.",

    Icon: Zap,

    images: [
      "/curso-electricidad/3.jpeg",
      "/curso-electricidad/4.jpeg",
      "/curso-electricidad/1.jpeg",
      "/curso-electricidad/2.jpeg",
    ],

    summary: {
      title: "Electricidad para Climatización",
      duration: "6 semanas",
      modality: "Presencial",
      level: "Intermedio",
      learnings: [
        "Uso de multímetro",
        "Interpretación de planos",
        "Diagnóstico eléctrico",
        "Protecciones eléctricas",
      ],
    },

    structuredContent: {
      objective:
        "Brindar conocimientos eléctricos aplicados a equipos de climatización.",

      duration: "6 semanas",
      modality: "Presencial",
      location: "Resistencia, Chaco",

      contents: [
        {
          title: "Electricidad básica",
          points: [
            "Voltaje",
            "Corriente",
            "Resistencia",
          ],
        },
        {
          title: "Diagnóstico",
          points: [
            "Multímetro",
            "Continuidad",
            "Protecciones",
          ],
        },
      ],

      activities: [
        "Prácticas con tableros",
        "Mediciones reales",
      ],

      requirements: [
        "Conocimientos básicos de herramientas",
      ],

      fees: [
        {
          type: "Contado",
          amount: "$150.000",
        },
      ],

      contact: {
        whatsapp: "+54 362 1234567",
        email: "info@aircool.com",
        instagram: "@aircool",
      },
    },
  },
];