"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export default function ProfileEditCard() {
  const [user, setUser] = useState({
    name: "Rolando Micheli",
    username: "rolando123",
    email: "rolandomicheli@gmail.com",
    mobile: "+54 9 11 1234 5678",
    location: "ARG",
    birthday: "1990-01-01",
    gender: "Masculino",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos actualizados:", user);
  };

  return (
    <div className="max-w-6xl mx-auto relative p-6">
      {/* Botón de cerrar */}
      <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition">
        <X size={20} />
      </button>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Card izquierda: Perfil real */}
        <div className="w-full md:w-1/3 bg-white rounded-3xl shadow-lg shadow-gray-300/20 p-8 space-y-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-gray-200">
              <Image
                src="/profile-picture.png"
                alt="Foto de perfil"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">{user.name}</h2>
            <p className="text-gray-500">{user.username}</p>
            <p className="text-gray-500">{user.email}</p>
          </div>

          <div className="space-y-3 mt-4 text-gray-700">
            <p><span className="font-semibold">Celular:</span> {user.mobile}</p>
            <p><span className="font-semibold">Localidad:</span> {user.location}</p>
            <p><span className="font-semibold">Fecha de nacimiento:</span> {user.birthday}</p>
            <p><span className="font-semibold">Género:</span> {user.gender}</p>
          </div>
        </div>

        {/* Card derecha: Edición */}
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-2/3 bg-white rounded-3xl shadow-lg shadow-gray-300/20 p-8 space-y-6 hover:shadow-xl transition"
        >
          {/** Campos del formulario */}
          {[
            { label: "Nombre completo", name: "name", type: "text" },
            { label: "Usuario", name: "username", type: "text" },
            { label: "Correo", name: "email", type: "email" },
            { label: "Celular", name: "mobile", type: "text" },
            { label: "Localidad", name: "location", type: "text" },
            { label: "Fecha de nacimiento", name: "birthday", type: "date" },
            { label: "Género", name: "gender", type: "text" },
          ].map((field) => (
            <div key={field.name} className="flex flex-col">
              <label className="text-gray-500 font-medium mb-1">{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                value={user[field.name as keyof typeof user]}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>
          ))}

          {/* Botón Guardar */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Guardar cambios
          </button>
        </form>
      </div>
    </div>
  );
}
