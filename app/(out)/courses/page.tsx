'use client';

import { courses } from './courses';
import { useState } from "react";
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
  ChevronDown,
 
} from "lucide-react";

// --- COMPONENTE PRINCIPAL ---
export default function CursosPage() {
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [showFullDetails, setShowFullDetails] = useState(false);
  const [buyerName, setBuyerName] = useState("");
  const [activeTab, setActiveTab] = useState("resumen");
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const currentCourse = courses.find(c => c.id === selectedCourse);

  const openInfoModal = (id: number) => { setSelectedCourse(id); setShowInfoModal(true); setShowFullDetails(false); setActiveTab("resumen"); setExpandedSections({}); };
  const openBuyModal = (id: number) => { setSelectedCourse(id); setShowBuyModal(true); };
  const closeModals = () => { setShowInfoModal(false); setShowBuyModal(false); setShowFullDetails(false); setSelectedCourse(null); setBuyerName(""); setActiveTab("resumen"); setExpandedSections({}); };

  const sendWhatsapp = () => {
    if (!buyerName || !currentCourse) return;
    const phone = currentCourse.structuredContent.contact.whatsapp.replace(/\D/g, '');
    const message = `Hola, soy ${buyerName} y voy a enviar el comprobante de pago para el curso ${currentCourse.title}`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="relative min-h-screen w-full text-gray-900 dark:text-white transition-colors duration-300 pt-28 pb-16 overflow-hidden">

      {/* CÍRCULO DIFUMINADO NEUTRO */}
      <div
        className="absolute top-[5%] left-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-slate-500/20 dark:bg-gray-950/20 rounded-full blur-[140px] md:blur-[180px] pointer-events-none z-0 transform -translate-x-1/2 -translate-y-1/2"
      />

      <main className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">

        {/* HEADER DE CURSOS */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-950 dark:text-white tracking-tight"
          >
            Nuestros Cursos
          </h1>
          <p
            className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed px-2"
          >
            Fórmate con profesionales técnicos y adquiere las habilidades prácticas y teóricas necesarias para destacarse como especialista en el rubro, asegurándote un perfil de altísima exigencia laboral.
          </p>
        </div>

        <div className="
    grid 
    grid-cols-1 
    sm:grid-cols-2 
    xl:grid-cols-3 
    gap-8 
    lg:gap-10
    items-stretch
  ">

          {courses.map((course) => (

            <div
              key={course.id}
              className="
          bg-white dark:bg-gray-900/40 dark:backdrop-blur-xl
          shadow-lg hover:shadow-2xl dark:shadow-black/50
          rounded-2xl
          p-5 sm:p-6
          flex flex-col
          border border-gray-100 dark:border-white/10
          h-full
          transition-all duration-300 hover:scale-[1.03]
        "
            >
              {/* TÍTULO */}
              <div className="flex items-start gap-4 mb-4 sm:mb-5">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-2.5 rounded-xl border border-blue-100 dark:border-blue-800/30 flex-shrink-0 shadow-sm">
                  <course.Icon className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white leading-tight line-clamp-3 my-auto">
                  {course.title}
                </h2>
              </div>

              {/* PREVIEW */}
              <p className="
          text-gray-700 dark:text-gray-300 
          text-sm sm:text-base
          mb-4 
          line-clamp-3
        ">
                {course.preview}
              </p>

              {/* IMÁGENES */}
              <div className="
          grid grid-cols-2 
          gap-2 sm:gap-3 
          mt-3 
          h-[180px] sm:h-[220px] lg:h-[240px]
        ">
                {course.images.map((img, idx) => (
                  <div
                    key={idx}
                    className="relative w-full h-full rounded-xl overflow-hidden"
                  >
                    <Image
                      src={img}
                      alt={`Imagen ${course.title}`}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </div>

              {/* BOTONES */}
              <div className="
          mt-auto 
          pt-5 
          flex 
          flex-col sm:flex-row 
          gap-3
        ">
                <button
                  onClick={() => openInfoModal(course.id)}
                  className="
              w-full sm:w-1/2
              bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600
              text-white 
              py-2.5
              rounded-lg 
              font-semibold 
              flex items-center justify-center gap-2
              shadow-md
              transition
            "
                >
                  <BookOpen className="w-5 h-5" />
                  Ver más
                </button>

                <button
                  onClick={() => openBuyModal(course.id)}
                  className="
              w-full sm:w-1/2
              bg-sky-500 hover:bg-cyan-600
              text-white 
              py-2.5
              rounded-lg 
              font-semibold 
              flex items-center justify-center gap-2
              shadow-md
              transition
            "
                >
                  <CheckCircle className="w-5 h-5" />
                  Comprar
                </button>
              </div>

            </div>

          ))}

        </div>

      </main>

      {/* MODAL INFO */}
      {showInfoModal && currentCourse && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4 overflow-hidden"
          onClick={closeModals}
        >
          <div
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-2xl h-[70vh] flex flex-col relative overflow-hidden border border-gray-200 dark:border-gray-700 max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* HEADER */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/20">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h2 className="text-lg font-semibold">{currentCourse.summary.title}</h2>
              </div>
              <button
                onClick={closeModals}
                className="p-2 rounded-full hover:bg-white/20 transition"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            </div>

            {/* BADGES */}
            <div className="flex flex-wrap gap-2 px-6 py-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 text-xs font-medium">
                <Clock className="w-3.5 h-3.5" />
                {currentCourse.summary.duration}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium">
                {currentCourse.summary.modality}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-medium">
                Nivel {currentCourse.summary.level}
              </span>
            </div>

            {/* CONTENIDO */}
            <div className="flex-1 overflow-y-auto px-6 py-5">
              {!showFullDetails ? (
                /* VISTA PREVIA */
                <div className="space-y-6">
                  {/* Objetivo */}
                  <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border border-cyan-200/50 dark:border-cyan-700/30">
                    <h3 className="font-semibold text-sm text-cyan-700 dark:text-cyan-300 mb-2 flex items-center gap-2">
                      <Target className="w-4 h-4" />
                      Objetivo del curso
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {currentCourse.structuredContent.objective}
                    </p>
                  </div>

                  {/* Aprenderás */}
                  <div>
                    <h3 className="font-semibold text-sm text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-cyan-500" />
                      ¿Qué vas a aprender?
                    </h3>
                    <div className="grid gap-2">
                      {currentCourse.summary.learnings.slice(0, 3).map((l, i) => (
                        <div key={i} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                          <CheckCircle className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-gray-700 dark:text-gray-300">{l}</p>
                        </div>
                      ))}
                      {currentCourse.summary.learnings.length > 3 && (
                        <p className="text-xs text-gray-500 dark:text-gray-400 text-center py-2">
                          +{currentCourse.summary.learnings.length - 3} puntos más en detalles completos
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Inversión */}
                  <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 border border-emerald-200/50 dark:border-emerald-700/30">
                    <h3 className="font-semibold text-sm text-emerald-700 dark:text-emerald-300 mb-3 flex items-center gap-2">
                      <CreditCard className="w-4 h-4" />
                      Inversión
                    </h3>
                    <div className="space-y-2">
                      {currentCourse.structuredContent.fees.map((f, i) => (
                        <div key={i} className="flex justify-between items-center text-sm">
                          <span className="text-gray-600 dark:text-gray-400">{f.type}</span>
                          <span className="font-bold text-emerald-600 dark:text-emerald-400">{f.amount}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Botón Ver detalles completos */}
                  <button
                    onClick={() => setShowFullDetails(true)}
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold flex items-center justify-center gap-2 transition-all hover:scale-[1.02] shadow-lg shadow-cyan-500/25"
                  >
                    <FileText className="w-5 h-5" />
                    Ver detalles completos
                  </button>
                </div>
              ) : (
                /* DETALLES COMPLETOS */
                <div className="space-y-6">
                  {/* Botón volver */}
                  <button
                    onClick={() => setShowFullDetails(false)}
                    className="flex items-center gap-2 text-sm text-cyan-600 dark:text-cyan-400 hover:underline mb-4"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Volver a la vista previa
                  </button>

                  {/* Accordions con detalles */}
                  <div className="space-y-3">
                    {/* Contenidos */}
                    <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                      <details className="group">
                        <summary className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/50 cursor-pointer list-none hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors">
                          <span className="font-semibold text-sm text-gray-900 dark:text-white flex items-center gap-2">
                            <FileText className="w-4 h-4 text-blue-500" />
                            Contenidos del programa
                          </span>
                          <span className="w-4 h-4 text-gray-500 transition-transform duration-400 group-open:rotate-180">
                            <ChevronDown className="w-full h-full" />
                          </span>
                        </summary>
                        <div className="border-t border-gray-200 dark:border-gray-700">
                          <div className="p-4 space-y-4">
                            {currentCourse.structuredContent.contents.map((c, i) => (
                              <div key={i}>
                                <h4 className="font-semibold text-sm text-gray-900 dark:text-white mb-2">{c.title}</h4>
                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-1">
                                  {c.points.map((p, j) => (
                                    <li key={j}>{p}</li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </details>
                    </div>

                    {/* Actividades */}
                    <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                      <details className="group">
                        <summary className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/50 cursor-pointer list-none hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors">
                          <span className="font-semibold text-sm text-gray-900 dark:text-white flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-cyan-500" />
                            Actividades
                          </span>
                          <span className="w-4 h-4 text-gray-500 transition-transform duration-400 group-open:rotate-180">
                            <ChevronDown className="w-full h-full" />
                          </span>
                        </summary>
                        <div className="border-t border-gray-200 dark:border-gray-700">
                          <div className="p-4">
                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                              {currentCourse.structuredContent.activities.map((a, i) => (
                                <li key={i}>{a}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </details>
                    </div>

                    {/* Requisitos */}
                    <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                      <details className="group">
                        <summary className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/50 cursor-pointer list-none hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors">
                          <span className="font-semibold text-sm text-gray-900 dark:text-white flex items-center gap-2">
                            <Target className="w-4 h-4 text-purple-500" />
                            Requisitos
                          </span>
                          <span className="w-4 h-4 text-gray-500 transition-transform duration-400 group-open:rotate-180">
                            <ChevronDown className="w-full h-full" />
                          </span>
                        </summary>
                        <div className="border-t border-gray-200 dark:border-gray-700">
                          <div className="p-4">
                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                              {currentCourse.structuredContent.requirements.map((r, i) => (
                                <li key={i}>{r}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </details>
                    </div>

                    {/* Ubicación */}
                    {currentCourse.structuredContent.location && (
                      <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                        <details className="group">
                          <summary className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/50 cursor-pointer list-none hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors">
                            <span className="font-semibold text-sm text-gray-900 dark:text-white flex items-center gap-2">
                              <MapPin className="w-4 h-4 text-red-500" />
                              Ubicación
                            </span>
                            <span className="w-4 h-4 text-gray-500 transition-transform duration-400 group-open:rotate-180">
                              <ChevronDown className="w-full h-full" />
                            </span>
                          </summary>
                          <div className="border-t border-gray-200 dark:border-gray-700">
                            <div className="p-4">
                              <p className="text-sm text-gray-600 dark:text-gray-400">{currentCourse.structuredContent.location}</p>
                            </div>
                          </div>
                        </details>
                      </div>
                    )}
                  </div>

                  {/* Contacto */}
                  <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                    <h3 className="font-semibold text-sm text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-sky-500" />
                      Contacto
                    </h3>
                    <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <p className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        {currentCourse.structuredContent.contact.whatsapp}
                      </p>
                      <p className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        {currentCourse.structuredContent.contact.email}
                      </p>
                      <p className="flex items-center gap-2">
                        <Instagram className="w-4 h-4" />
                        {currentCourse.structuredContent.contact.instagram}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* MODAL COMPRA */}
      {showBuyModal && currentCourse && (
        <div
          className="fixed inset-0 backdrop-blur-md flex justify-center items-center z-50 p-4 overflow-hidden"
          onClick={closeModals}
        >
          <div
            className="bg-white dark:bg-gray-900/95 dark:backdrop-blur-3xl rounded-2xl shadow-2xl dark:shadow-[0_0_50px_rgba(59,130,246,0.15)] w-full max-w-md p-6 relative border border-gray-200 dark:border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={closeModals}
              className="absolute top-3 right-3 p-1.5 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 transition text-gray-500 dark:text-gray-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            </button>

            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
              <span className="p-2 rounded-lg bg-sky-50 dark:bg-white/5 text-sky-500 dark:text-cyan-300">
                <CreditCard className="w-4 h-4 sm:w-5 sm:h-5" />
              </span>
              Inscripción
            </h3>

            {/* Alias destacado - compacto */}
            <div className="mb-4 p-3 rounded-lg bg-slate-50 dark:bg-slate-700/10 border border-slate-100 dark:border-slate-700/20">
              <p className="text-xs text-gray-700 dark:text-slate-200 leading-relaxed mb-1.5">
                Transfiere el importe al siguiente alias:
              </p>
              <p className="text-lg font-mono font-bold text-slate-900 dark:text-white tracking-wide text-center py-1.5 bg-white dark:bg-black/20 rounded">
                aircool.miceli
              </p>
            </div>

            <div className="space-y-3 mb-5">
              <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 ml-0.5">
                ¿A nombre de quién?
              </label>
              <input
                type="text"
                value={buyerName}
                onChange={(e) => setBuyerName(e.target.value)}
                placeholder="Nombre completo"
                className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-white/10 rounded-lg bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white focus:ring-2 focus:ring-sky-500/50 outline-none transition-all"
              />
            </div>

            <button
              onClick={sendWhatsapp}
              className="w-full bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 
                         text-white py-2.5 rounded-lg font-bold 
                         text-xs sm:text-sm 
                         flex items-center justify-center gap-2 
                         shadow-lg shadow-sky-500/20 transition-all hover:scale-[1.02]"
            >
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" /> 
              <span>Enviar a WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}