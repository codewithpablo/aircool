'use client';
import { useState, useEffect, useRef } from 'react';
import { Search, Book, Award, ToolCase, MessageSquare, ArrowDown, X } from 'lucide-react';
import { motion } from 'framer-motion';
import RobotModel from './RobotModel';

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
  const [search, setSearch] = useState('');
  const [typingText, setTypingText] = useState('');
  const [selectedFaqIndex, setSelectedFaqIndex] = useState<number | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScroll, setCanScroll] = useState(false);

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().replace(/[¿?]/g, '').includes(search.toLowerCase().replace(/[¿?]/g, ''))
  );

  // Función de typing fluido
  const typeAnswer = (text: string) => {
    setTypingText('');
    setIsTyping(true);
    let i = 0;
    const interval = setInterval(() => {
      setTypingText(text.slice(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 25);
  };

  const handleQuestionClick = (index: number) => {
    setSelectedFaqIndex(index);
    setTypingText('Hércules está pensando...');
    setIsTyping(true);
    setTimeout(() => {
      const answer = filteredFaqs[index]?.answer || 'Lo siento, no tengo una respuesta para eso.';
      typeAnswer(answer);
    }, 800);
  };

  // Detectar scroll
  useEffect(() => {
    const div = scrollRef.current;
    if (!div) return;
    const checkScroll = () => setCanScroll(div.scrollHeight > div.clientHeight);
    checkScroll();
    div.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);
    return () => {
      div.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [typingText]);

  return (
    <section className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center p-4 md:p-6 gap-6 md:gap-12">
      {/* Columna izquierda: FAQ */}
      <div className="w-full md:w-1/3 flex flex-col justify-center items-start h-auto md:h-[80vh]">
        <h1 className="text-3xl md:text-xl lg:text-6xl font-bold leading-tight text-white mb-4">
          Preguntas frecuentes
        </h1>
        <p className="text-sm md:text-base text-white mb-4">
          Hacé click sobre una pregunta y nuestro asistente Hércules te responderá.
        </p>

        

        {/* Buscador */}
        <div className="w-full mb-4 flex items-center gap-2 flex-shrink-0">
          <Search className="text-gray-300" size={18} />
          <input
            type="text"
            placeholder="Buscar pregunta..."
            className="flex-1 border-none outline-none text-sm md:text-base bg-transparent text-white placeholder-gray-300"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
{/* Lista de preguntas */}
<div className="w-full flex flex-col gap-3 overflow-y-auto hide-scrollbar max-h-[50vh]">
  {filteredFaqs.length > 0 ? (
    filteredFaqs.map((faq, index) => (
      <button
        key={index}
        onClick={() => handleQuestionClick(index)}
        className={`
          w-full flex items-center justify-between p-4 rounded-xl 
          bg-white/10 hover:bg-white/30 transition-all duration-300
          shadow-sm hover:shadow-md text-white text-left
          focus:outline-none focus:ring-2 focus:ring-blue-400
        `}
      >
        <span className="flex-1">{faq.question}</span>
        <span className="ml-2 text-gray-200">
          {selectedFaqIndex === index ? '▲' : '▼'}
        </span>
      </button>
    ))
  ) : (
    <p className="text-sm text-gray-200 text-center mt-2">No se encontraron resultados</p>
  )}
</div>

      </div>

      {/* Columna centro: Robot + Bubble absoluto */}
      <div className="flex flex-col items-center relative w-full md:w-auto">
        <div className="h-[400px] sm:h-[450px] md:h-[600px] w-full sm:w-[350px] md:w-[400px] lg:w-[500px] relative">
          <RobotModel modelPath="/result.gltf" />

          {/* Bubble absoluto */}
          {typingText && (
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-2xl shadow-md max-w-xs text-sm z-20">
              <div
                className="max-h-40 overflow-y-auto pr-2 hide-scrollbar relative"
                ref={scrollRef}
              >
                {typingText}
                <span className={isTyping ? 'animate-pulse' : ''}>|</span>

                {canScroll && (
                  <motion.div
                    className="absolute bottom-1 right-1 text-gray-400"
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  >
                    <ArrowDown size={16} />
                  </motion.div>
                )}
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setTypingText('');
                  setSelectedFaqIndex(null);
                }}
                className="absolute top-1 right-2 text-gray-400 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 font-bold focus:outline-none"
              >
                ×
              </button>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
      `}</style>
    </section>
  );
}
