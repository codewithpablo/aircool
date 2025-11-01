"use client";

import { Calendar } from "@/components/ui/calendar";
import { setDate, setMonth, setYear } from "date-fns";
import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, MapPin } from "lucide-react";

export default function EventCalendar() {
  const eventDays = [14, 15, 16, 17];
  const month = 10; // Noviembre (0-indexed)
  const year = new Date().getFullYear();
  const baseMonth = setYear(setMonth(new Date(), month), year);

  const selectedDates = eventDays.map((d) => setDate(baseMonth, d));
  const [dates] = useState(selectedDates);

  return (
    <div className="w-full max-w-md mx-auto p-6 rounded-2xl bg-white/20 text-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-6"
      >
        {/* Contenido de la card */}
        <div className="space-y-3 text-left">
          <h2 className="text-2xl font-bold">Próximo evento</h2>
          
          {/* Ubicación con icono */}
          <div className="flex items-center space-x-2 text-md font-semibold text-gray-700">
            <MapPin size={20} className="text-blue-500" />
            <span>Domo del Centenario - Resistencia, Chaco</span>
          </div>

          {/* Fecha con icono */}
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <CalendarDays size={20} className="text-blue-500" />
            <span>14 al 17 de noviembre</span>
          </div>
        </div>

        {/* Calendario dentro de la card */}
        <div className="mt-4">
          <Calendar
            mode="multiple"
            defaultMonth={baseMonth}
            selected={dates}
          />
        </div>
      </motion.div>
    </div>
  );
}
