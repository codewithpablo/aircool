"use client";

import * as React from "react";
import { DayPicker } from "react-day-picker";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { format } from "date-fns";

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time?: string;
  location?: string;
}

const events: Event[] = [
  { id: 1, title: "Reunión de equipo", description: "Revisión de objetivos del mes", date: "2025-10-28", time: "10:00 AM", location: "Sala 1" },
  { id: 2, title: "Entrega proyecto X", description: "Deadline final para el proyecto X", date: "2025-10-30", time: "5:00 PM" },
  { id: 3, title: "Capacitación interna", description: "Curso sobre nuevas herramientas", date: "2025-11-01", time: "2:00 PM", location: "Auditorio" },
  { id: 4, title: "Reunión con clientes", description: "Presentación de propuesta", date: "2025-10-25", time: "11:00 AM" },
  { id: 5, title: "Workshop de marketing", description: "Taller de estrategias digitales", date: "2025-10-27", time: "3:00 PM", location: "Sala 3" },
  { id: 6, title: "Entrega informe Q3", description: "Informe financiero del tercer trimestre", date: "2025-10-29", time: "12:00 PM" },
  { id: 7, title: "Capacitación seguridad", description: "Taller de seguridad laboral", date: "2025-10-31", time: "9:00 AM" },
  { id: 8, title: "Reunión equipo diseño", description: "Revisión de prototipos", date: "2025-11-02", time: "4:00 PM" },
  { id: 9, title: "Evento social empresa", description: "Cena anual de la compañía", date: "2025-11-03", time: "8:00 PM", location: "Salón principal" },
  { id: 10, title: "Reunión HR", description: "Evaluación de desempeño", date: "2025-11-04", time: "10:00 AM" },
];

export default function EventsSection() {
  const [selectedDate, setSelectedDate] = React.useState<Date>(new Date());

  // Eventos del día seleccionado
  const eventsByDate = events.filter(
    (event) =>
      format(new Date(event.date), "yyyy-MM-dd") ===
      format(selectedDate, "yyyy-MM-dd")
  );

  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Calendario */}
        <Card className="shadow-2xl border border-gray-100 rounded-3xl">
          <CardHeader className="text-center py-6">
            <CardTitle className="text-3xl font-bold text-gray-900">
              Calendario
            </CardTitle>
            <CardDescription className="text-gray-500 mt-1">
              Selecciona una fecha para ver los eventos.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center pb-6">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              required
              modifiers={{
                eventDay: (day) =>
                  events.some(
                    (event) =>
                      format(new Date(event.date), "yyyy-MM-dd") ===
                      format(day, "yyyy-MM-dd")
                  ),
                distantEvent: (day) => {
                  const dayDate = new Date(day);
                  const diffDays = Math.abs(
                    (dayDate.getTime() - selectedDate.getTime()) /
                      (1000 * 60 * 60 * 24)
                  );
                  return (
                    events.some(
                      (event) =>
                        format(new Date(event.date), "yyyy-MM-dd") ===
                        format(day, "yyyy-MM-dd")
                    ) && diffDays > 3 // Días lejanos
                  );
                },
              }}
              modifiersClassNames={{
                eventDay:
                  "relative text-gray-900 hover:text-white hover:bg-red-600 transition-all",
                distantEvent:
                  "relative bg-yellow-300 text-gray-900 font-semibold rounded-full",
                selected:
                  "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg rounded-full border-0",
                outside: "opacity-40",
              }}
              className="text-center rounded-lg"
              showOutsideDays
            />
            <style jsx>{`
              .rdp-day.eventDay::after {
                content: "";
                display: block;
                margin: 0 auto;
                width: 8px;
                height: 8px;
                border-radius: 9999px;
                background-color: #ef4444;
                margin-top: 4px;
              }
              .rdp-day:hover {
                background-color: #f3f4f6;
                color: #111827;
                cursor: pointer;
                transition: all 0.2s;
              }
              .rdp-day.outside {
                opacity: 0.3;
              }
              .rdp-day.selected {
                box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
              }
            `}</style>
          </CardContent>
        </Card>

        {/* Eventos del día */}
        <Card className="shadow-2xl border border-gray-100 rounded-3xl">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-semibold text-gray-900">
              Eventos del {format(selectedDate, "dd/MM/yyyy")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 max-h-[520px] overflow-y-auto pr-3">
            {eventsByDate.length > 0 ? (
              eventsByDate
                .sort(
                  (a, b) =>
                    new Date(a.date).getTime() - new Date(b.date).getTime()
                )
                .map((event, idx, arr) => {
                  const prevDate =
                    idx > 0 ? new Date(arr[idx - 1].date) : null;
                  const currentDate = new Date(event.date);
                  const gapDays = prevDate
                    ? Math.ceil(
                        (currentDate.getTime() - prevDate.getTime()) /
                          (1000 * 60 * 60 * 24)
                      )
                    : 0;

                  return (
                    <div
                      key={event.id}
                      className={`p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow  from-white to-gray-50 border border-gray-100 min-h-[100px] flex flex-col justify-between ${
                        gapDays > 3 ? "mt-8" : "mt-4"
                      }`}
                    >
                      <h3 className="font-bold text-gray-900 text-lg">
                        {event.title}
                      </h3>
                      <div className="mt-2 text-sm text-gray-500 space-y-1">
                        {event.time && <p>🕒 {event.time}</p>}
                        {event.location && <p>📍 {event.location}</p>}
                      </div>
                      <p className="mt-3 text-gray-700">{event.description}</p>
                    </div>
                  );
                })
            ) : (
              <p className="text-gray-400 italic text-center mt-10">
                No hay eventos para este día.
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
