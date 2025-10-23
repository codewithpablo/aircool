export const images = [
        '/1.png',
        '/two.jpg',
        '/3.jpg',
        '/4.png',
        '/five.jpg',
]

export const courses = [
  {
    id: 1,
    name: "Fundamentos de la Refrigeración",
    image: "/1.png",
    description:
      "Aprendé los principios básicos de los sistemas de refrigeración, incluyendo termodinámica, transferencia de calor y componentes del sistema.",
    link: "/courses/fundamentos-de-la-refrigeracion",
  },
  {
    id: 2,
    name: "Instalación de Aire Acondicionado",
    image: "/two.jpg",
    description:
      "Dominá el proceso de instalación de sistemas de aire acondicionado tipo split y de ventana de manera segura y eficiente.",
    link: "/courses/instalacion-de-aire-acondicionado",
  },
  {
    id: 3,
    name: "Conceptos Eléctricos Básicos para HVAC",
    image: "/3.jpg",
    description:
      "Entendé los fundamentos de la electricidad y su aplicación en sistemas de refrigeración y aire acondicionado.",
    link: "/courses/conceptos-electricos-para-hvac",
  },
  {
    id: 4,
    name: "Manipulación y Seguridad de Refrigerantes",
    image: "/4.png",
    description:
      "Aprendé los métodos correctos para manipular refrigerantes, incluyendo protocolos de seguridad y regulaciones ambientales.",
    link: "/courses/manipulacion-y-seguridad-de-refrigerantes",
  },
  {
    id: 5,
    name: "Mantenimiento Preventivo de Sistemas HVAC",
    image: "/five.jpg",
    description:
      "Desarrollá habilidades para realizar inspecciones y tareas de mantenimiento regulares que prolonguen la vida útil de los equipos de refrigeración.",
    link: "/courses/mantenimiento-preventivo-hvac",
  },
  {
    id: 6,
    name: "Diagnóstico de Fallas en Sistemas de Refrigeración",
    image: "/1.png",
    description:
      "Identificá y resolvé problemas comunes en sistemas de refrigeración y aire acondicionado utilizando herramientas de diagnóstico.",
    link: "/courses/diagnostico-de-fallas-en-refrigeracion",
  },
  {
    id: 7,
    name: "Sistemas de Refrigeración Comercial",
    image: "/1.png",
    description:
      "Adquirí conocimientos prácticos sobre la instalación y mantenimiento de sistemas de refrigeración de uso comercial a gran escala.",
    link: "/courses/sistemas-de-refrigeracion-comercial",
  },
  {
    id: 8,
    name: "Heladeras y Freezers Domésticos",
    image: "/1.png",
    description:
      "Aprendé a reparar y dar servicio a heladeras y freezers del hogar, enfocándote en fallas comunes y reemplazos necesarios.",
    link: "/courses/heladeras-y-freezers-domesticos",
  },
 
];


// types
export interface Testimonio {
  id: number;
  nombre: string;
  comentario: string;
  foto: string;        // URL o ruta local a la imagen
  ciudad: string;      // localidad dentro del país
  provincia: string;
  pais: 'Argentina';
  curso?: string;      // opcional: curso relacionado
  fecha?: string;      // opcional: "2025-10-01"
}

export const testimonios: Testimonio[] = [
  {
    id: 1,
    nombre: "Lucía Fernández",
    comentario:
      "El curso superó mis expectativas: el contenido es claro y los ejercicios prácticos me ayudaron a entender todo rápido.",
    foto: "https://randomuser.me/api/portraits/women/68.jpg",
    ciudad: "Córdoba",
    provincia: "Córdoba",
    pais: "Argentina",
    curso: "Refrigeración Integral",
    fecha: "2025-09-12",
  },
  {
    id: 2,
    nombre: "Matías Gómez",
    comentario:
      "Las clases tienen buen ritmo y los instructores responden todas las dudas. Lo recomiendo para quienes empiezan desde cero.",
    foto: "https://randomuser.me/api/portraits/men/45.jpg",
    ciudad: "Rosario",
    provincia: "Santa Fe",
    pais: "Argentina",
    curso: "Mecánica de Frío",
    fecha: "2025-08-30",
  },
  {
    id: 3,
    nombre: "Vanina Castro",
    comentario:
      "Práctico y directo al punto. Pude aplicar lo aprendido en mi trabajo al día siguiente.",
    foto: "https://randomuser.me/api/portraits/women/12.jpg",
    ciudad: "Mar del Plata",
    provincia: "Buenos Aires",
    pais: "Argentina",
    curso: "Instalación y Mantenimiento",
    fecha: "2025-07-15",
  },
  {
    id: 4,
    nombre: "Sergio Alvarez",
    comentario:
      "Material actualizado y ejemplos reales. Ideal si querés profesionalizarte en el rubro.",
    foto: "https://randomuser.me/api/portraits/men/32.jpg",
    ciudad: "Mendoza",
    provincia: "Mendoza",
    pais: "Argentina",
    curso: "Sistemas de Refrigeración Comercial",
    fecha: "2025-06-03",
  },
  {
    id: 5,
    nombre: "Mariana López",
    comentario:
      "La comunidad es muy activa y el soporte técnico es rápido. Volvería a tomar otro curso sin dudar.",
    foto: "https://randomuser.me/api/portraits/women/54.jpg",
    ciudad: "San Miguel de Tucumán",
    provincia: "Tucumán",
    pais: "Argentina",
    fecha: "2025-05-21",
  },
  {
    id: 6,
    nombre: "Gonzalo Pérez",
    comentario:
      "Explicaciones claras, buena relación teoría-práctica. Los recursos descargables son muy útiles.",
    foto: "https://randomuser.me/api/portraits/men/21.jpg",
    ciudad: "La Plata",
    provincia: "Buenos Aires",
    pais: "Argentina",
    curso: "Diagnóstico y Reparación",
    fecha: "2025-04-10",
  },
  {
    id: 7,
    nombre: "Florencia Díaz",
    comentario:
      "Me sorprendió la calidad del contenido y las demostraciones paso a paso. Me siento más segura trabajando en campo.",
    foto: "https://randomuser.me/api/portraits/women/37.jpg",
    ciudad: "Bariloche",
    provincia: "Río Negro",
    pais: "Argentina",
    fecha: "2025-03-02",
  },
  {
    id: 8,
    nombre: "Diego Ramírez",
    comentario:
      "Excelente balance entre teoría y práctica. Los proyectos finales me ayudaron a armar un portfolio técnico.",
    foto: "https://randomuser.me/api/portraits/men/14.jpg",
    ciudad: "Salta",
    provincia: "Salta",
    pais: "Argentina",
    curso: "Proyectos de Refrigeración",
    fecha: "2025-01-28",
  },
];

export default testimonios;
