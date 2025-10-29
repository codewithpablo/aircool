"use client";

import React, { useEffect, useState } from "react";

type Curso = {
  id: number;
  titulo: string;
  profesor: {
    id: number;
    nombre: string;
    email: string;
    foto?: string; // URL de la foto del profesor opcional
  };
  categoria: {
    id: number;
    nombre: string;
  } | null;
  imagen?: string; // URL de imagen del curso opcional
};

const Courses = () => {
  const [cursos, setCursos] = useState<Curso[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/courses/") // endpoint de Django
      .then((res) => res.json())
      .then((data) => {
        setCursos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <h1 className="text-center mt-8 text-xl">Cargando cursos...</h1>;

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      {cursos.map((curso) => (
        <div
          key={curso.id}
          className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          {/* Imagen del curso */}
          {curso.imagen && (
            <img
              src={curso.imagen}
              alt={curso.titulo}
              className="w-full h-48 object-cover"
            />
          )}
          <div className="p-4 flex flex-col items-start gap-2">
            <h2 className="font-bold text-lg">{curso.titulo}</h2>
            <div className="flex items-center gap-3">
              {/* Foto del profesor */}
              <img
                src={curso.profesor.foto || "/default-avatar.png"}
                alt={curso.profesor.nombre}
                className="w-10 h-10 rounded-full object-cover"
              />
              <p className="text-xs text-gray-500">
                {curso.profesor.nombre} | {curso.categoria?.nombre || "Sin categoría"}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Courses;
