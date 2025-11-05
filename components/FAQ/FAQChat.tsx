'use client';
import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Search, X } from 'lucide-react';

const faqs = [
  { question: '¿Qué cursos ofrecen?', answer: 'Ofrecemos cursos de refrigeración básica, avanzada e industrial.' },
  { question: '¿Dónde están ubicados?', answer: 'Estamos en Resistencia, Chaco, pero ofrecemos clases online.' },
  { question: '¿Cómo me inscribo?', answer: 'Podés inscribirte desde la sección “Inscripción” en nuestra web.' },
  { question: '¿Los cursos tienen certificación?', answer: 'Sí, todos nuestros cursos incluyen certificación oficial.' },
  { question: '¿Cuánto duran los cursos?', answer: 'Los cursos varían entre 1 y 3 meses dependiendo del nivel.' },
  { question: '¿Puedo acceder a clases grabadas?', answer: 'Sí, todas las clases se graban y quedan disponibles para los estudiantes.' },
  { question: '¿Hay descuento para grupos?', answer: 'Sí, ofrecemos descuentos especiales para grupos de 3 o más personas.' },
  { question: '¿Qué materiales necesito?', answer: 'Solo necesitas un cuaderno, lápiz y muchas ganas de aprender.' },
  { question: '¿Hay prácticas en taller?', answer: 'Sí, los cursos incluyen prácticas en taller para aprender de manera práctica.' },
  { question: '¿Ofrecen soporte después del curso?', answer: 'Sí, brindamos soporte vía correo o chat para dudas posteriores.' },
];

export default function FAQChat() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [search, setSearch] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(true);
  const [typingText, setTypingText] = useState('');

  const bubbleMessage =
    "Hola, soy tu asistente virtual. Hacé click sobre mí y te mostraré las preguntas frecuentes.";

  useEffect(() => {
    if (!showBubble) return;
    let index = 0;
    const interval = setInterval(() => {
      setTypingText(bubbleMessage.slice(0, index + 1));
      index++;
      if (index === bubbleMessage.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, [showBubble]);

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().replace(/[¿?]/g, '').includes(search.toLowerCase().replace(/[¿?]/g, ''))
  );

  return (
    <>
      {/* ROBOT FLOTANTE */}
      <div className="fixed bottom-20 md:bottom-24 right-4 md:right-6 z-50 flex flex-col items-end gap-2">
        {/* Burbuja de bienvenida */}
        {showBubble && (
          <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-2xl shadow-md max-w-xs text-sm animate-fadeIn">
            {typingText}
            <span className="animate-pulse">|</span>
            <button
              onClick={() => setShowBubble(false)}
              className="ml-2 text-gray-400 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 font-bold focus:outline-none"
            >
              ×
            </button>
          </div>
        )}

        {/* GIF del robot */}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="p-0 border-none bg-transparent focus:outline-none"
        >
          <img
            src="/bot-asistente.gif"
            alt="Asistente"
            className="w-16 h-16 md:w-24 md:h-24 hover:scale-105 transition-transform duration-300"
          />
        </button>
      </div>

      {/* Ventana de chat separada del robot */}
      {isChatOpen && (
        <div className="fixed bottom-20 md:bottom-24 right-2 md:right-36 z-40 w-[90vw] max-w-[380px] h-[60vh] md:h-[400px] rounded-2xl shadow-2xl flex flex-col overflow-hidden bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
          {/* Encabezado fijo */}
          <div className="bg-sky-600 text-white p-4 flex items-center justify-between flex-shrink-0">
            <h2 className="text-lg font-semibold">Asistente de Cursos</h2>
            <button onClick={() => setIsChatOpen(false)} className="hover:text-gray-200 transition">
              <X size={22} />
            </button>
          </div>

          {/* Buscador */}
          <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center gap-2 flex-shrink-0">
            <Search className="text-gray-500 dark:text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Escribí tu pregunta..."
              className="flex-1 border-none outline-none text-sm bg-transparent text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Contenido desplazable */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {filteredFaqs.length === 0 && (
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">No se encontraron resultados</p>
            )}
            {filteredFaqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-800 shadow-sm"
              >
                <button
                  className="w-full flex justify-between items-center p-3 text-left hover:bg-sky-50 dark:hover:bg-sky-900 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-medium">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp size={18} className="text-sky-600" />
                  ) : (
                    <ChevronDown size={18} className="text-gray-500 dark:text-gray-400" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="p-3 text-sm text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 transition-all duration-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
      `}</style>
    </>
  );
}
