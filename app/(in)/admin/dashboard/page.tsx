"use client"

import DashboardCard from '@/components/mine/dashboard/DashboardCard'
import { ArrowUp, Users } from "lucide-react";
import StudentsCard from '@/components/mine/dashboard/StudentsCard';
import AttendanceChart from '@/components/mine/dashboard/AttendanceChart';
import { CalendarDashboard } from '@/components/mine/dashboard/CalendarDashboard';

const Dashboard = () => {
  return (
    <div className="flex gap-2 max-h-[89.5dvh] p-2  overflow-hidden">
      {/* Contenido principal con scroll independiente */}
      <div className="flex-1 flex flex-col gap-2 overflow-y-auto hideScrollbar">
        {/* Cards superiores */}
        <div className="grid grid-cols-4 gap-2 h-32">
          <DashboardCard title="Administradores" value="2" Icon={Users} bgColor="bgFirst" iconColor="text-orange-600" />
          <DashboardCard title="Estudiantes" value="1260" Icon={ArrowUp} bgColor="bgSecond" />
          <DashboardCard title="Profesores" value="10" Icon={Users} bgColor="bgFirst" iconColor="text-orange-600" />
          <DashboardCard title="Cursos" value="100" Icon={ArrowUp} bgColor="bgSecond" />
        </div>

        {/* Secciones con gráficos */}
        <div className="flex gap-2">
          <StudentsCard />
          <AttendanceChart />
        </div>
        <div className="flex gap-2">
          <StudentsCard />
          <AttendanceChart />
        </div>
        <div className="flex gap-2 mb-4">
          <StudentsCard />
          <AttendanceChart />
        </div>
      </div>

      {/* Panel lateral derecho con su propio scroll */}
      <div className="w-[350px] h-full overflow-y-auto hideScrollbar">
        <CalendarDashboard />
      </div>
    </div>
  );
};

export default Dashboard;
