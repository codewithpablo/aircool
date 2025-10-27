"use client";

import { useState, useEffect, useRef } from "react";

interface Message {
  fromMe: boolean;
  text: string;
}

interface Chat {
  id: number;
  name: string;
  avatar: string;
  lastSeen: string;
  messages: Message[];
}

const nombres = ["Martín", "Sofía", "Lucas", "Valentina", "Mateo", "Camila", "Facundo", "Agustina", "Bruno", "Micaela"];
const apellidos = ["Gómez", "Rodríguez", "Fernández", "López", "Martínez", "García", "Pérez", "Sánchez", "Romero", "Torres"];

export default function WhatsAppClone() {
  const [chats, setChats] = useState<Chat[]>([]);
  const [selectedChatId, setSelectedChatId] = useState<number | null>(null);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchedChats: Chat[] = Array.from({ length: 10 }).map((_, index) => {
      const nombre = nombres[index % nombres.length];
      const apellido = apellidos[index % apellidos.length];
      const avatar = `https://i.pravatar.cc/150?img=${index + 1}`;
      const lastSeen = `${Math.floor(Math.random() * 59) + 1} min atrás`;

      // Preguntas y respuestas coherentes sobre cursos
      const courseTopics = [
        "Fundamentos de Refrigeración",
        "Instalación de Aire Acondicionado",
        "Mantenimiento de Equipos de Refrigeración",
        "Refrigeración Comercial"
      ];

      const topic = courseTopics[index % courseTopics.length];

      const conversation: Message[] = [
        { fromMe: false, text: `Hola Rolando, quiero información sobre el curso de ${topic}.` },
        { fromMe: true, text: `Hola! Claro, el curso de ${topic} cubre todos los conceptos esenciales y prácticos.` },
        { fromMe: false, text: `¿Incluye prácticas o solo teoría?` },
        { fromMe: true, text: `Incluye prácticas con equipos reales y ejemplos paso a paso.` },
        { fromMe: false, text: `Perfecto, ¿cuánto dura el curso y hay certificado?` },
        { fromMe: true, text: `El curso dura 8 semanas aproximadamente y al finalizar recibirás un certificado oficial.` },
        { fromMe: false, text: `Excelente, ¿hay material adicional para estudiar en casa?` },
        { fromMe: true, text: `Sí, te enviamos PDFs y videos complementarios para reforzar los contenidos.` },
        { fromMe: false, text: `Muchas gracias Rolando!` },
        { fromMe: true, text: `A vos! Cualquier otra duda me escribís.` },
      ];

      return { id: index + 1, name: `${nombre} ${apellido}`, avatar, lastSeen, messages: conversation };
    });

    setChats(fetchedChats);
    if (fetchedChats.length > 0) setSelectedChatId(fetchedChats[0].id);
  }, []);

  const selectedChat = chats.find((chat) => chat.id === selectedChatId);

  const handleSend = () => {
    if (!newMessage.trim() || !selectedChat) return;

    const updatedChats = chats.map((chat) =>
      chat.id === selectedChatId
        ? {
            ...chat,
            messages: [...chat.messages, { fromMe: true, text: newMessage }],
          }
        : chat
    );

    setChats(updatedChats);
    setNewMessage("");

    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  if (!selectedChat) return <div className="flex items-center justify-center h-screen w-full text-gray-500">Cargando chats...</div>;

  return (
    <div className="flex h-screen w-full bg-gray-100">
      <div className="w-1/3 bg-white border-r border-gray-300 flex flex-col max-h-screen overflow-y-scroll hideScrollbar">
        <div className="p-4 font-bold text-xl border-b border-gray-300">Chats</div>
        <div className="flex-1">
          {chats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => setSelectedChatId(chat.id)}
              className={`flex items-center gap-4 p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-100 ${
                selectedChatId === chat.id ? "bg-gray-200" : ""
              }`}
            >
              <img src={chat.avatar} alt={chat.name} className="w-12 h-12 rounded-full object-cover" />
              <div className="flex-1">
                <div className="flex justify-between font-semibold">
                  <span>{chat.name}</span>
                  <span className="text-xs text-gray-500">{chat.lastSeen}</span>
                </div>
                <div className="text-sm text-gray-600 ">
                  {chat.messages.slice(-1)[0]?.text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 flex flex-col max-h-screen overflow-y-scroll hideScrollbar">
        <div className="p-4 font-bold text-xl border-b border-gray-300 flex items-center gap-4">
          <img src={selectedChat.avatar} alt={selectedChat.name} className="w-10 h-10 rounded-full object-cover" />
          <div>
            <div>{selectedChat.name}</div>
            <div className="text-xs text-gray-500">Última vez: {selectedChat.lastSeen}</div>
          </div>
        </div>

        <div className="flex-1 p-4 flex flex-col gap-2">
          {selectedChat.messages.map((msg, idx) => (
            <div key={idx} className={`max-w-xs p-2 rounded-lg ${msg.fromMe ? "self-end bg-blue-500 text-white" : "self-start bg-gray-200 text-gray-800"}`}>
              {msg.text}
            </div>
          ))}
          <div ref={messagesEndRef}></div>
        </div>

        <div className="p-4 border-t border-gray-300 flex gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Escribe un mensaje..."
          />
          <button onClick={handleSend} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full">
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}
