"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { Users } from "lucide-react";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function StudentsCard() {
  const boys = 207;
  const girls = 253;
  const total = boys + girls;

  // 🎨 Accedemos a los colores CSS definidos en :root
  const firstColor =
    typeof window !== "undefined"
      ? getComputedStyle(document.documentElement).getPropertyValue("--first") ||
        "#ffd5cf"
      : "#ffd5cf";
  const secondColor =
    typeof window !== "undefined"
      ? getComputedStyle(document.documentElement).getPropertyValue("--second") ||
        "#cdebff"
      : "#cdebff";

  const data = {
    labels: ["Boys", "Girls"],
    datasets: [
      {
        label: "Boys",
        data: [boys, total - boys],
        backgroundColor: [secondColor.trim(), "#E5E7EB"], // usa --second 💙
        borderWidth: 0,
        cutout: "70%",
        radius: "100%",
      },
      {
        label: "Girls",
        data: [girls, total - girls],
        backgroundColor: [firstColor.trim(), "#D1D5DB"], // usa --first 🩷
        borderWidth: 0,
        cutout: "70%",
        radius: "100%",
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    rotation: -90,
    circumference: 360,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
  };

  return (
    <Card className="p-4 h-full w-[280px] shadow-md rounded-2xl">
      <h2 className="text-sm font-semibold text-gray-700 mb-2">Students</h2>
      <CardContent className="flex flex-col items-center relative">
        {/* Gráfico doble anillo */}
        <div className="relative w-[180px] h-[180px]">
          <Doughnut data={data} options={options} />
          {/* Ícono centrado */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Users className="w-6 h-6 text-gray-500" />
          </div>
        </div>

        {/* Leyenda */}
        <div className="flex justify-center gap-8 mt-3">
          <div className="flex flex-col items-center">
            <span
              className="w-3 h-3 rounded-full mb-1"
              style={{ backgroundColor: secondColor.trim() }}
            ></span>
            <p className="text-sm font-semibold">{boys}</p>
            <p className="text-xs text-gray-500">
              Boys ({Math.round((boys / total) * 100)}%)
            </p>
          </div>
          <div className="flex flex-col items-center">
            <span
              className="w-3 h-3 rounded-full mb-1"
              style={{ backgroundColor: firstColor.trim() }}
            ></span>
            <p className="text-sm font-semibold">{girls}</p>
            <p className="text-xs text-gray-500">
              Girls ({Math.round((girls / total) * 100)}%)
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
