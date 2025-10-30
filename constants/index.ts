export const images = [
  '/1.jpeg',
  '/2.jpg',
  '/3.jpg',
  '/4.jpg',
  '/5.jpg',
  '/6.jpg',
  '/7.jpg',
  '/8.jpg',
  '/9.jpg',
  '/10.jpg',
  '/11.jpg',
  '/12.jpg',
  '/14.jpg',
  '/15.jpg',
  '/16.jpg',
  '/17.jpg',
]


export const courses = [
  {
    name: "Fundamentos de la Refrigeración",
    image: "/1.jpeg",
    category: "Refrigeración",
    amountOfLessons: 10,
    totalHours: 8,
    link: "/courses/fundamentos-de-la-refrigeracion",
    price: 12000,
  },
  {
    name: "Instalación de Aire Acondicionado",
    image: "/2.jpg",
    category: "Aire Acondicionado",
    amountOfLessons: 12,
    totalHours: 10,
    link: "/courses/instalacion-de-aire-acondicionado",
    price: 15000,
  },
  {
    name: "Conceptos Eléctricos Básicos para HVAC",
    image: "/3.jpg",
    category: "Electricidad",
    amountOfLessons: 8,
    totalHours: 6,
    link: "/courses/conceptos-electricos-para-hvac",
    price: 9000,
  },
  {
    name: "Manipulación y Seguridad de Refrigerantes",
    image: "/4.jpg",
    category: "Seguridad",
    amountOfLessons: 9,
    totalHours: 7,
    link: "/courses/manipulacion-y-seguridad-de-refrigerantes",
    price: 11000,
  },
  {
    name: "Mantenimiento Preventivo de Sistemas HVAC",
    image: "/5.jpg",
    category: "Mantenimiento",
    amountOfLessons: 11,
    totalHours: 9,
    link: "/courses/mantenimiento-preventivo-hvac",
    price: 14000,
  },
  {
    name: "Diagnóstico de Fallas en Sistemas de Refrigeración",
    image: "/6.jpg",
    category: "Diagnóstico",
    amountOfLessons: 10,
    totalHours: 8,
    link: "/courses/diagnostico-de-fallas-en-refrigeracion",
    price: 13000,
  },
  {
    name: "Sistemas de Refrigeración Comercial",
    image: "/7.jpg",
    category: "Refrigeración Comercial",
    amountOfLessons: 13,
    totalHours: 10,
    link: "/courses/sistemas-de-refrigeracion-comercial",
    price: 18000,
  },
  {
    name: "Heladeras y Freezers Domésticos",
    image: "/8.jpg",
    category: "Electrodomésticos",
    amountOfLessons: 9,
    totalHours: 7,
    link: "/courses/heladeras-y-freezers-domesticos",
    price: 10000,
  },
  {
    name: "Refrigeración Industrial Avanzada",
    image: "/9.jpg",
    category: "Refrigeración Industrial",
    amountOfLessons: 14,
    totalHours: 12,
    link: "/courses/refrigeracion-industrial-avanzada",
    price: 20000,
  },
  {
    name: "Aire Acondicionado Centralizado",
    image: "/10.jpg",
    category: "Aire Acondicionado",
    amountOfLessons: 12,
    totalHours: 9,
    link: "/courses/aire-acondicionado-centralizado",
    price: 16000,
  },
  {
    name: "Control y Automatización en HVAC",
    image: "/11.jpg",
    category: "Automatización",
    amountOfLessons: 10,
    totalHours: 8,
    link: "/courses/control-y-automatizacion-hvac",
    price: 15000,
  },
  {
    name: "Bombas de Calor y Sistemas Híbridos",
    image: "/12.jpg",
    category: "Energía",
    amountOfLessons: 11,
    totalHours: 9,
    link: "/courses/bombas-de-calor-y-sistemas-hibridos",
    price: 17000,
  },
  {
    name: "Instalación y Mantenimiento de Torres de Enfriamiento",
    image: "/13.jpg",
    category: "Mantenimiento",
    amountOfLessons: 10,
    totalHours: 8,
    link: "/courses/torres-de-enfriamiento",
    price: 14000,
  },
  {
    name: "Refrigerantes Ecológicos y Normativas",
    image: "/14.jpg",
    category: "Seguridad",
    amountOfLessons: 8,
    totalHours: 6,
    link: "/courses/refrigerantes-ecologicos",
    price: 12000,
  },
  {
    name: "Sistemas VRF y VAV",
    image: "/15.jpg",
    category: "Aire Acondicionado",
    amountOfLessons: 12,
    totalHours: 10,
    link: "/courses/sistemas-vrf-vav",
    price: 18000,
  },
  {
    name: "Mantenimiento de Equipos Comerciales",
    image: "/16.jpg",
    category: "Mantenimiento",
    amountOfLessons: 10,
    totalHours: 8,
    link: "/courses/mantenimiento-equipos-comerciales",
    price: 15000,
  },
  {
    name: "Gestión Energética en Sistemas HVAC",
    image: "/17.jpg",
    category: "Energía",
    amountOfLessons: 9,
    totalHours: 7,
    link: "/courses/gestion-energetica-hvac",
    price: 16000,
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
