 "use client"
import DashboardCard from '@/components/mine/DashboardCard'
import { ArrowUp, Users, DollarSign } from "lucide-react";
import StudentsCard from '@/components/mine/StudentsCard';
import AttendanceChart from '@/components/mine/AttendanceChart';
import { CalendarDashboard } from '@/components/mine/CalendarDashboard';

const Dashboard = () => {
  return (
    <div className='flex h-screen overflow-hidden'>
          <div className='h-screen overflow-y-hiddenflex-1'>
              <div className='h-32  grid grid-cols-4 gap-2 p-2 '>
                  <DashboardCard title="Administradores" value="2" Icon={Users} bgColor="bg-red-100" iconColor="text-orange-600" />
                    <DashboardCard title="Estudiantes" value="1260" Icon={ArrowUp}bgColor='bg-blue-100' />
                  <DashboardCard title="Profesores" value="10" Icon={Users} bgColor="bg-red-100" iconColor="text-orange-600" />
                    <DashboardCard title="Cursos" value="100" Icon={ArrowUp} bgColor='bg-blue-100'/>
              </div>

              <div className='flex gap-2 px-2'>
                <StudentsCard />
              <AttendanceChart />
              </div>
          </div>

         <div className=' w-full h-screen overflow-y-scroll  hideScrollbar  mr-2 mt-2 '>
              <CalendarDashboard />
          </div>
    </div>
  )
}

export default Dashboard