"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Shield, User2, GraduationCap } from "lucide-react";
import Link from "next/link";

const roles = [
  { id: "admin", label: "Administrador", icon: <Shield size={40} /> },
  { id: "teacher", label: "Profesor", icon: <User2 size={40} /> },
  { id: "student", label: "Estudiante", icon: <GraduationCap size={40} /> },
];

const AnimatedCard = ({ role, selected, setSelected }: any) => {
  const cardWidth = 160;
  const cardHeight = 176;
  const borderRadius = 16;

  // Estado para detectar hover
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      onClick={() => setSelected(role.id)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="relative cursor-pointer flex flex-col items-center justify-center w-40 h-44 bg-blue-100 text-blue-600 rounded-2xl shadow-md"
    >
      {/* Solo renderizar SVG cuando está hover */}
      {isHover && (
        <motion.svg
          className="absolute inset-0 pointer-events-none"
          width={cardWidth}
          height={cardHeight}
          viewBox={`0 0 ${cardWidth} ${cardHeight}`}
        >
          <motion.rect
            x="1"
            y="1"
            width={cardWidth - 2}
            height={cardHeight - 2}
            rx={borderRadius}
            ry={borderRadius}
            fill="transparent"
            stroke="#3B82F6"
            strokeWidth="2"
            strokeDasharray={2 * (cardWidth + cardHeight - 4)}
            strokeDashoffset={2 * (cardWidth + cardHeight - 4)}
            initial={{ strokeDashoffset: 2 * (cardWidth + cardHeight - 4) }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1.5, ease: "linear" }}
          />
        </motion.svg>
      )}

      {/* Contenido de la card */}
      <div className="mb-3 z-10">{role.icon}</div>
      <p className="font-medium z-10">{role.label}</p>
    </div>
  );
};

export default function ChooseUser() {
  const [selected, setSelected] = useState("student");

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-center bg-gradient-to-br from-blue-100 via-white to-blue-200">
      
      {/* Fondos animados */}
      <motion.div
        className="absolute -top-40 -left-40 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{ x: [0, 30, -30, 0], y: [0, 20, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{ x: [0, -30, 30, 0], y: [0, -20, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
      />

      {/* Título */}
      <h2 className="text-2xl font-bold text-blue-600 mb-10 z-10">
        SELECCIONAR TIPO DE USUARIO
      </h2>

      {/* Cards */}
      <div className="flex gap-6 mb-10 z-10">
        {roles.map((role) => (
          <AnimatedCard
            key={role.id}
            role={role}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </div>

      {/* Botones */}
      <div className="flex items-center gap-4 z-10">
        <button className="flex items-center justify-center w-10 h-10 border border-blue-400 rounded-full text-blue-500 hover:bg-blue-100 transition">
          <Link href="/">
          <ArrowLeft size={18} />
          </Link>
        </button>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition">
          Continuar
        </button>
      </div>
    </div>
  );
}
