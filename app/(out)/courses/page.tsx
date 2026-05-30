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

              {/* DETALLES DEL CURSO */}
              <div className="mt-4 space-y-3">
                {/* Grid de 3 columnas: Duración, Modalidad, Nivel */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400">
                    <Clock className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                    <span className="font-medium text-xs">{course.summary.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-500 flex-shrink-0"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    <span className="font-medium text-xs">{course.summary.modality}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-500 flex-shrink-0"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    <span className="font-medium text-xs">Nivel {course.summary.level}</span>
                  </div>
                </div>

                {/* Separador */}
                <div className="border-t border-gray-100 dark:border-gray-800" />

                {/* Aprendizajes principales (máximo 2) */}
                <div className="space-y-1.5">
                  {course.summary.learnings.slice(0, 2).map((learning, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                      <span>{learning}</span>
                    </div>
                  ))}
                </div>
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
          className="fixed inset-0 bg-black/60 backdrop-blur-md flex justify-center items-center z-50 p-4 overflow-hidden animate-in fade-in duration-200"
          onClick={closeModals}
        >
          <div
            className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-2xl h-[70vh] flex flex-col relative overflow-hidden border border-gray-200/50 dark:border-white/10 max-h-[85vh] animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* HEADER */}
            <div className="relative overflow-hidden px-6 py-5 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-600 text-white">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/20 backdrop-blur-sm shadow-lg">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold tracking-tight">{currentCourse.summary.title}</h2>
                    <p className="text-xs text-white/70 mt-0.5">Información del curso</p>
                  </div>
                </div>
                <button
                  onClick={closeModals}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all hover:scale-105"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* BADGES */}
            <div className="flex flex-wrap gap-2 px-6 py-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50/80 dark:bg-gray-800/50 backdrop-blur-sm">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-cyan-100 to-cyan-50 dark:from-cyan-900/40 dark:to-cyan-900/20 text-cyan-700 dark:text-cyan-300 text-xs font-semibold shadow-sm border border-cyan-200/50 dark:border-cyan-700/30">
                <Clock className="w-3.5 h-3.5" />
                {currentCourse.summary.duration}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-900/40 dark:to-blue-900/20 text-blue-700 dark:text-blue-300 text-xs font-semibold shadow-sm border border-blue-200/50 dark:border-blue-700/30">
                {currentCourse.summary.modality}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-100 to-purple-50 dark:from-purple-900/40 dark:to-purple-900/20 text-purple-700 dark:text-purple-300 text-xs font-semibold shadow-sm border border-purple-200/50 dark:border-purple-700/30">
                Nivel {currentCourse.summary.level}
              </span>
            </div>

            {/* CONTENIDO */}
            <div className="flex-1 overflow-y-auto px-6 py-5 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
              {!showFullDetails ? (
                /* VISTA PREVIA */
                <div className="space-y-5">
                  {/* Objetivo */}
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-50 via-blue-50 to-cyan-100 dark:from-cyan-900/25 dark:via-blue-900/20 dark:to-cyan-900/15 border border-cyan-200/60 dark:border-cyan-700/40 shadow-sm">
                    <h3 className="font-bold text-sm text-cyan-700 dark:text-cyan-300 mb-2.5 flex items-center gap-2">
                      <div className="p-1 rounded-lg bg-cyan-200/50 dark:bg-cyan-800/30">
                        <Target className="w-4 h-4" />
                      </div>
                      Objetivo del curso
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {currentCourse.structuredContent.objective}
                    </p>
                  </div>

                  {/* Aprenderás */}
                  <div>
                    <h3 className="font-bold text-sm text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <div className="p-1 rounded-lg bg-cyan-100 dark:bg-cyan-900/30">
                        <CheckCircle className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                      </div>
                      ¿Qué vas a aprender?
                    </h3>
                    <div className="grid gap-2">
                      {currentCourse.summary.learnings.slice(0, 3).map((l, i) => (
                        <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100/50 dark:from-gray-800/60 dark:to-gray-800/30 border border-gray-200/60 dark:border-gray-700/50 hover:border-cyan-300 dark:hover:border-cyan-600 transition-colors">
                          <CheckCircle className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{l}</p>
                        </div>
                      ))}
                      {currentCourse.summary.learnings.length > 3 && (
                        <p className="text-xs text-gray-500 dark:text-gray-400 text-center py-2 px-4 rounded-lg bg-gray-50 dark:bg-gray-800/30">
                          +{currentCourse.summary.learnings.length - 3} puntos más en detalles completos
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Inversión */}
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-50 via-green-50 to-emerald-100 dark:from-emerald-900/25 dark:via-green-900/20 dark:to-emerald-900/15 border border-emerald-200/60 dark:border-emerald-700/40 shadow-sm">
                    <h3 className="font-bold text-sm text-emerald-700 dark:text-emerald-300 mb-3 flex items-center gap-2">
                      <div className="p-1 rounded-lg bg-emerald-200/50 dark:bg-emerald-800/30">
                        <CreditCard className="w-4 h-4" />
                      </div>
                      Inversión
                    </h3>
                    <div className="space-y-2">
                      {currentCourse.structuredContent.fees.map((f, i) => (
                        <div key={i} className="flex justify-between items-center text-sm py-1.5 px-2 rounded-lg hover:bg-emerald-100/30 dark:hover:bg-emerald-900/20 transition-colors">
                          <span className="text-gray-600 dark:text-gray-400">{f.type}</span>
                          <span className="font-bold text-emerald-600 dark:text-emerald-400">{f.amount}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Botón Ver detalles completos */}
                  <button
                    onClick={() => setShowFullDetails(true)}
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-600 hover:from-cyan-600 hover:via-blue-600 hover:to-cyan-700 text-white font-bold flex items-center justify-center gap-2 transition-all hover:scale-[1.02] shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/40"
                  >
                    <FileText className="w-5 h-5" />
                    Ver detalles completos
                  </button>
                </div>
              ) : (
                /* DETALLES COMPLETOS */
                <div className="space-y-5">
                  {/* Botón volver */}
                  <button
                    onClick={() => setShowFullDetails(false)}
                    className="flex items-center gap-2 text-sm font-medium text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors mb-3 px-3 py-2 rounded-lg hover:bg-cyan-50 dark:hover:bg-cyan-900/20"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Volver a la vista previa
                  </button>

                  {/* Accordions con detalles */}
                  <div className="space-y-3">
                    {/* Contenidos */}
                    <div className="border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <details className="group">
                        <summary className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100/50 dark:from-gray-800/60 dark:to-gray-800/30 cursor-pointer list-none transition-colors group-open:from-cyan-50 group-open:to-blue-50 dark:group-open:from-cyan-900/20 dark:group-open:to-blue-900/20">
                          <span className="font-bold text-sm text-gray-900 dark:text-white flex items-center gap-2">
                            <div className="p-1.5 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                              <FileText className="w-4 h-4 text-blue-500" />
                            </div>
                            Contenidos del programa
                          </span>
                          <span className="w-5 h-5 text-gray-400 group-open:text-cyan-500 transition-all duration-300 group-open:rotate-180">
                            <ChevronDown className="w-full h-full" />
                          </span>
                        </summary>
                        <div className="border-t border-gray-200 dark:border-gray-700">
                          <div className="p-4 space-y-4 bg-white dark:bg-gray-900/50">
                            {currentCourse.structuredContent.contents.map((c, i) => (
                              <div key={i} className="pb-3 border-b border-gray-100 dark:border-gray-800 last:border-0 last:pb-0">
                                <h4 className="font-bold text-sm text-gray-900 dark:text-white mb-2">{c.title}</h4>
                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-1">
                                  {c.points.map((p, j) => (
                                    <li key={j} className="pl-1">{p}</li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </details>
                    </div>

                    {/* Actividades */}
                    <div className="border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <details className="group">
                        <summary className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100/50 dark:from-gray-800/60 dark:to-gray-800/30 cursor-pointer list-none transition-colors group-open:from-cyan-50 group-open:to-blue-50 dark:group-open:from-cyan-900/20 dark:group-open:to-blue-900/20">
                          <span className="font-bold text-sm text-gray-900 dark:text-white flex items-center gap-2">
                            <div className="p-1.5 rounded-lg bg-cyan-100 dark:bg-cyan-900/30">
                              <CheckCircle className="w-4 h-4 text-cyan-500" />
                            </div>
                            Actividades
                          </span>
                          <span className="w-5 h-5 text-gray-400 group-open:text-cyan-500 transition-all duration-300 group-open:rotate-180">
                            <ChevronDown className="w-full h-full" />
                          </span>
                        </summary>
                        <div className="border-t border-gray-200 dark:border-gray-700">
                          <div className="p-4 bg-white dark:bg-gray-900/50">
                            <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-400">
                              {currentCourse.structuredContent.activities.map((a, i) => (
                                <li key={i} className="pl-1">{a}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </details>
                    </div>

                    {/* Requisitos */}
                    <div className="border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <details className="group">
                        <summary className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100/50 dark:from-gray-800/60 dark:to-gray-800/30 cursor-pointer list-none transition-colors group-open:from-cyan-50 group-open:to-blue-50 dark:group-open:from-cyan-900/20 dark:group-open:to-blue-900/20">
                          <span className="font-bold text-sm text-gray-900 dark:text-white flex items-center gap-2">
                            <div className="p-1.5 rounded-lg bg-purple-100 dark:bg-purple-900/30">
                              <Target className="w-4 h-4 text-purple-500" />
                            </div>
                            Requisitos
                          </span>
                          <span className="w-5 h-5 text-gray-400 group-open:text-cyan-500 transition-all duration-300 group-open:rotate-180">
                            <ChevronDown className="w-full h-full" />
                          </span>
                        </summary>
                        <div className="border-t border-gray-200 dark:border-gray-700">
                          <div className="p-4 bg-white dark:bg-gray-900/50">
                            <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-400">
                              {currentCourse.structuredContent.requirements.map((r, i) => (
                                <li key={i} className="pl-1">{r}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </details>
                    </div>

                    {/* Ubicación */}
                    {currentCourse.structuredContent.location && (
                      <div className="border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <details className="group">
                          <summary className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100/50 dark:from-gray-800/60 dark:to-gray-800/30 cursor-pointer list-none transition-colors group-open:from-cyan-50 group-open:to-blue-50 dark:group-open:from-cyan-900/20 dark:group-open:to-blue-900/20">
                            <span className="font-bold text-sm text-gray-900 dark:text-white flex items-center gap-2">
                              <div className="p-1.5 rounded-lg bg-red-100 dark:bg-red-900/30">
                                <MapPin className="w-4 h-4 text-red-500" />
                              </div>
                              Ubicación
                            </span>
                            <span className="w-5 h-5 text-gray-400 group-open:text-cyan-500 transition-all duration-300 group-open:rotate-180">
                              <ChevronDown className="w-full h-full" />
                            </span>
                          </summary>
                          <div className="border-t border-gray-200 dark:border-gray-700">
                            <div className="p-4 bg-white dark:bg-gray-900/50">
                              <p className="text-sm text-gray-600 dark:text-gray-400">{currentCourse.structuredContent.location}</p>
                            </div>
                          </div>
                        </details>
                      </div>
                    )}
                  </div>

                  {/* Contacto */}
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 dark:from-gray-800/60 dark:via-gray-800/40 dark:to-gray-800/60 border border-gray-200 dark:border-gray-700 shadow-sm">
                    <h3 className="font-bold text-sm text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <div className="p-1 rounded-lg bg-sky-100 dark:bg-sky-900/30">
                        <Mail className="w-4 h-4 text-sky-500" />
                      </div>
                      Contacto
                    </h3>
                    <div className="space-y-2">
                      <p className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 py-2 px-3 rounded-lg hover:bg-white/50 dark:hover:bg-white/5 transition-colors">
                        <Phone className="w-4 h-4 text-sky-500" />
                        <span className="font-medium">{currentCourse.structuredContent.contact.whatsapp}</span>
                      </p>
                      <p className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 py-2 px-3 rounded-lg hover:bg-white/50 dark:hover:bg-white/5 transition-colors">
                        <Mail className="w-4 h-4 text-sky-500" />
                        <span className="font-medium">{currentCourse.structuredContent.contact.email}</span>
                      </p>
                      <p className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 py-2 px-3 rounded-lg hover:bg-white/50 dark:hover:bg-white/5 transition-colors">
                        <Instagram className="w-4 h-4 text-sky-500" />
                        <span className="font-medium">{currentCourse.structuredContent.contact.instagram}</span>
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
          className="fixed inset-0 bg-black/60 backdrop-blur-md flex justify-center items-center z-50 p-4 overflow-hidden animate-in fade-in duration-200"
          onClick={closeModals}
        >
          <div
            className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-md p-0 relative overflow-hidden border border-gray-200/50 dark:border-white/10 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* HEADER CON GRADIENTE */}
            <div className="relative overflow-hidden px-6 py-5 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-600 text-white">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/20 backdrop-blur-sm shadow-lg">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold tracking-tight">Inscripción al Curso</h3>
                    <p className="text-xs text-white/70 mt-0.5">Completa los siguientes pasos</p>
                  </div>
                </div>
                <button
                  onClick={closeModals}
                  className="relative p-2 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all hover:scale-105"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                </button>
              </div>
            </div>

            {/* CONTENIDO */}
            <div className="p-6 space-y-5">
              {/* Curso seleccionado */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-50 via-blue-50 to-cyan-100 dark:from-cyan-900/25 dark:via-blue-900/20 dark:to-cyan-900/15 border border-cyan-200/50 dark:border-cyan-700/30">
                <p className="text-xs text-cyan-700 dark:text-cyan-300 font-semibold mb-1">Curso seleccionado</p>
                <p className="text-sm font-bold text-gray-900 dark:text-white">{currentCourse.title}</p>
              </div>

              {/* Alias destacado */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 dark:from-gray-800/60 dark:via-gray-800/40 dark:to-gray-800/60 border border-gray-200 dark:border-gray-700">
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                  Transfiere el importe al siguiente alias:
                </p>
                <p className="text-lg font-mono font-bold text-gray-900 dark:text-white tracking-wide text-center py-3 px-4 bg-white dark:bg-black/30 rounded-xl border border-gray-200 dark:border-gray-600">
                  aircool.miceli
                </p>
              </div>

              {/* Input nombre */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300">
                  ¿A nombre de quién se realiza la transferencia?
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={buyerName}
                    onChange={(e) => setBuyerName(e.target.value)}
                    placeholder="Ej: Juan Pérez"
                    className="w-full px-4 py-3 text-sm border-2 border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white focus:border-cyan-400 dark:focus:border-cyan-500 focus:ring-4 focus:ring-cyan-400/20 outline-none transition-all placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* Botón WhatsApp */}
              <button
                onClick={sendWhatsapp}
                disabled={!buyerName}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 hover:from-emerald-600 hover:via-green-600 hover:to-emerald-700 
                           text-white font-bold text-sm 
                           flex items-center justify-center gap-2.5 
                           shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/40 
                           transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span>Enviar comprobante por WhatsApp</span>
              </button>

              {/* Nota informativa */}
              <p className="text-xs text-center text-gray-500 dark:text-gray-400 px-4">
                Una vez realizada la transferencia, envía el comprobante por WhatsApp para confirmar tu inscripción.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}