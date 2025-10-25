"use client";
import { LucideIcon } from "lucide-react";

interface DashboardCardProps {
  title: string;
  value: string | number;
  Icon: LucideIcon;
  iconColor?: string; // Ej: "text-blue-600"
  bgColor?: string;   // Ej: "bg-blue-100"
}

export default function DashboardCard({
  title,
  value,
  Icon,
  iconColor ,
  bgColor ,
}: DashboardCardProps) {
  return (
    <div className={`flex items-center justify-between rounded-2xl ${bgColor} shadow-sm p-5 w-full max-w-[260px] transition hover:shadow-md`}>
      <div className="flex flex-col">
        <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
        <p className="text-3xl font-semibold text-gray-800 mt-1">{value}</p>
      </div>

      <div className={`flex items-center justify-center ${bgColor} ${iconColor} rounded-full w-8 h-8`}>
        <Icon size={18} strokeWidth={2.5} />
      </div>
    </div>
  );
}
