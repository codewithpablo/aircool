"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function AttendanceChart() {
  const data = {
    labels: [
      "Ene", "Feb", "Mar", "Abr", "May", "Jun",
      "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"
    ],
    datasets: [
      {
        label: "Hombres",
        data: [45, 38, 40, 50, 42, 48, 43, 47, 44, 49, 46, 50],
        backgroundColor: "#A7C7E7", // 🩵 azul laguna suave
        borderRadius: 12,
        barThickness: 9,
      },
      {
        label: "Mujeres",
        data: [42, 35, 38, 48, 40, 45, 41, 46, 43, 47, 44, 49],
        backgroundColor: "#F7B7A3", // 🧡 salmón pastel cálido
        borderRadius: 12,
        barThickness: 9,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          color: "#6B7280",
          font: { size: 12, weight: "500" },
          usePointStyle: true,
          padding: 20,
        },
      },
      tooltip: {
        backgroundColor: "#FFFFFF",
        titleColor: "#374151",
        bodyColor: "#4B5563",
        borderColor: "#E5E7EB",
        borderWidth: 1,
        titleFont: { size: 13, weight: "600" },
        bodyFont: { size: 12 },
        cornerRadius: 8,
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          color: "#9CA3AF",
          font: { size: 12 },
        },
      },
      y: {
        grid: { color: "#F3F4F6" },
        ticks: {
          color: "#9CA3AF",
          font: { size: 12 },
          stepSize: 10,
        },
        // 🔹 Agregamos un espacio visual arriba de las barras
        suggestedMax: 60,
      },
    },
    layout: {
      padding: {
        top: 20, // 🔹 espacio adicional superior
      },
    },
    animation: {
      duration: 1400,
      easing: "easeOutCubic",
    },
  };

  return (
    <Card className="flex-1 bg-white border border-gray-100 shadow-sm rounded-2xl">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-5">
          <div>
            <h2 className="text-lg font-semibold text-gray-800 tracking-tight">
              Asistencia
            </h2>
            <p className="text-sm text-gray-500">Promedio anual 2025</p>
          </div>
          <span className="text-gray-400 text-sm">📅</span>
        </div>

        {/* Más alto y con espacio entre la barra y el borde */}
        <div className="h-60">
          <Bar data={data} options={options} />
        </div>
      </CardContent>
    </Card>
  );
}
