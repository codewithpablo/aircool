'use client';
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle, ArrowLeft, BookOpen, Trophy, Clock, Star } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Refrigeración Integral Básica",
    description: "Aprende los fundamentos de la refrigeración integral, el funcionamiento de los sistemas y cómo realizar mantenimientos eficientes.",
    reward: "Certificado oficial + insignia digital",
    duration: "4 semanas",
    modality: "Online con prácticas virtuales",
    requirements: "No se requieren conocimientos previos",
    learningPoints: [
      "Conocer los componentes de un sistema de refrigeración",
      "Aprender a realizar mantenimiento básico",
      "Seguridad en el manejo de gases refrigerantes",
    ],
    images: ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg"],
  },
  {
    id: 2,
    title: "Refrigeración Integral Avanzada",
    description: "Domina la instalación y reparación de sistemas de refrigeración complejos con técnicas profesionales.",
    reward: "Certificado avanzado + premio sorpresa",
    duration: "6 semanas",
    modality: "Online + prácticas presenciales",
    requirements: "Conocimientos básicos de refrigeración",
    learningPoints: [
      "Instalación y calibración de equipos",
      "Diagnóstico de fallas avanzadas",
      "Optimización energética de sistemas",
    ],
    images: ["/5.jpg", "/6.jpg", "/7.jpg", "/8.jpg"],
  },
  {
    id: 3,
    title: "Refrigeración Integral Profesional",
    description: "Conviértete en un especialista en refrigeración profesional, liderando proyectos y aplicando innovación tecnológica.",
    reward: "Certificado profesional + regalo exclusivo",
    duration: "8 semanas",
    modality: "Presencial y remoto",
    requirements: "Conocimientos avanzados en refrigeración",
    learningPoints: [
      "Liderar proyectos de instalación",
      "Aplicar innovación tecnológica",
      "Gestión de equipos y clientes",
    ],
    images: ["/9.jpg", "/10.jpg", "/11.jpg", "/12.jpg"],
  },
];

export default function CursosPage() {
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showPayModal, setShowPayModal] = useState(false);
  const [preview, setPreview] = useState("");
  const [paid, setPaid] = useState(false);
  const [fullName, setFullName] = useState("");

  const openInfoModal = (id: number) => {
    setSelectedCourse(id);
    setShowInfoModal(true);
  };

  const openPayModal = (id: number) => {
    setSelectedCourse(id);
    setShowPayModal(true);
  };

  const closeModals = () => {
    setShowInfoModal(false);
    setShowPayModal(false);
    setSelectedCourse(null);
    setPreview("");
    setPaid(false);
    setFullName("");
  };

  const handlePaymentSubmit = () => {
    if (!paid) {
      alert("Debes marcar 'Ya pagué' antes de enviar el comprobante.");
      return;
    }
    if (!fullName.trim()) {
      alert("Por favor ingresa nombre y apellido del alumno.");
      return;
    }

    const phone = "543624217417"; // reemplazar por tu número
    const courseTitle = courses.find(c => c.id === selectedCourse)?.title;

    const message = `Hola, mi nombre *${fullName}*.\n\nAcabo de pagar el curso *${courseTitle}* al alias indicado *aircool.instituto*.\nA continuación, adjunto el comprobante de la transferencia.\n\nMuchas gracias por el curso y la atención brindada.`;

    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    closeModals();
  };

  const currentCourse = courses.find(c => c.id === selectedCourse);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
      <main className="py-10 px-5 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {courses.map((course) => (
            <motion.div
              key={course.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 flex flex-col justify-between overflow-hidden transition-colors duration-300"
            >
              <div>
                <h2 className="text-2xl font-bold text-blue-300 flex items-center gap-2">
                  <BookOpen className="w-6 h-6" /> {course.title}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mt-2">{course.description}</p>
                <p className="mt-3 font-semibold text-blue-300 flex items-center gap-2">
                  <Trophy className="w-5 h-5" /> {course.reward}
                </p>

                {/* Galería de imágenes */}
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
                  onClick={() => openPayModal(course.id)}
                  className="w-1/2 bg-blue-300 hover:bg-blue-400 text-white py-2 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-1"
                >
                  <CheckCircle className="w-5 h-5" /> Comprar
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* MODAL DE INFORMACIÓN */}
      {showInfoModal && currentCourse && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50"
          onClick={closeModals}
        >
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-lg w-full relative shadow-lg overflow-auto transition-colors duration-300"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="my-5 left-4 text-gray-900 dark:text-white font-bold text-xl flex items-center gap-1"
              onClick={closeModals}
            >
              <ArrowLeft /> Volver
            </button>

            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
              <BookOpen className="w-6 h-6" /> {currentCourse.title}
            </h2>

            <div className="flex items-center gap-2 mb-3">
              <Clock className="w-5 h-5" /> <span className="text-gray-700 dark:text-gray-300">Duración: {currentCourse.duration}</span>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <Star className="w-5 h-5" /> <span className="text-gray-700 dark:text-gray-300">Modalidad: {currentCourse.modality}</span>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="w-5 h-5" /> <span className="text-gray-700 dark:text-gray-300">Requisitos: {currentCourse.requirements}</span>
            </div>

            <h3 className="mt-4 mb-2 font-semibold text-gray-900 dark:text-white flex items-center gap-2">
              <Trophy className="w-5 h-5" /> Lo que aprenderás:
            </h3>
            <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300">
              {currentCourse.learningPoints.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      )}

      {/* MODAL DE PAGO */}
      {showPayModal && currentCourse && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50"
          onClick={closeModals}
        >
          <motion.div
            className="bg-white dark:bg-black rounded-2xl p-8 max-w-md w-full relative shadow-lg overflow-hidden transition-colors duration-300"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 left-4 text-gray-900 dark:text-white font-bold text-xl flex items-center gap-1"
              onClick={closeModals}
            >
              <ArrowLeft /> Volver
            </button>

            {/* Logos según modo */}
            <div className="flex justify-center mb-6 mt-6">
              <Image
                src="/mp.png"
                alt="Mercado Pago"
                width={240}
                height={80}
                className="hidden dark:block object-contain"
              />
              <Image
                src="/mpwhite.png"
                alt="Mercado Pago"
                width={240}
                height={80}
                className="block dark:hidden object-contain"
              />
            </div>

            <h2 className="text-xl font-bold mb-4 text-center text-gray-900 dark:text-white">
              Completa tu pago
            </h2>
            <p className="text-center text-gray-700 dark:text-gray-300 mb-5">
              Transferí a nuestro alias <span className="font-bold">aircool.instituto</span> y subí tu comprobante para enviarlo por WhatsApp.
            </p>

            {/* Input nombre */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Nombre completo de la persona que va a cursar"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00aee8]"
              />
            </div>

           

            {/* Preview del comprobante */}
            {preview && (
              <div className="mb-4">
                <img src={preview} alt="Preview pago" className="w-full h-40 object-cover rounded-lg" />
              </div>
            )}

            <button
              type="button"
              onClick={handlePaymentSubmit}
              className={`w-full py-3 rounded-xl font-bold mt-2 flex items-center justify-center gap-2 shadow-md transition-colors duration-200 ${
                paid && fullName.trim()
                  ? "bg-[#00aee8] hover:bg-[#0095c6] text-white"
                  : "bg-gray-400 dark:bg-gray-600 text-gray-300 cursor-not-allowed"
              }`}
              disabled={!(paid && fullName.trim())}
            >
              <CheckCircle /> Enviar comprobante por WhatsApp
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}
