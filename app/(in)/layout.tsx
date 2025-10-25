"use client";
import Logo from "@/components/mine/Logo";
import { ReactNode } from "react";
import { Home, BookOpen, User, LogOut, MessageCircle, Calendar, Megaphone, UserPen } from "lucide-react";
import { SidebarLink } from "@/components/mine/SidebarLink";
import NavbarDashboard from "@/components/mine/NavbarDashboard";
import { CalendarDashboard } from "@/components/mine/CalendarDashboard";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen  flex">
      {/* Sidebar */}
      <aside className="w-60 shadow-lg flex flex-col justify-between ">
        <div>
          {/* Logo / título */}
          <div className=" flex items-center flex-col  text-center  justify-center  relative h-16 ">
              <Logo color="black"/>
          </div>

          {/* Navegación */}
          <nav className="flex flex-col justify-center gap-3 h-full w-[90%] mx-auto">
            <SidebarLink href="/admin/dashboard" icon={<Home size={18} />} label="Inicio" />
            <SidebarLink href="/admin/courses" icon={<BookOpen size={18} />} label="Cursos" />
            <SidebarLink href="/admin/profile" icon={<UserPen size={18} />} label="Perfil" />
            <SidebarLink href="/admin/students" icon={<User size={18} />} label="Estudiantes" />
            <SidebarLink href="/admin/teachers" icon={<User size={18} />} label="Profesores" />
            <SidebarLink href="/admin/messages" icon={<MessageCircle size={18} />} label="Mensajes" />
            <SidebarLink href="/admin/events" icon={<Calendar size={18} />} label="Eventos" />
            <SidebarLink href="/admin/announcements" icon={<Megaphone size={18} />} label="Avisos" />
          </nav>
        </div>

        {/* Footer del sidebar */}
        <div className="p-4 border-t">
          <button className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-red-600 hover:bg-red-50 transition">
            <LogOut size={16} />
            Cerrar sesión
          </button>
        </div>
      </aside>

      {/* Contenido principal */}
      <main className="flex-1 max-h-screen  overflow-hidden ">
          <NavbarDashboard />
        {children}
         
        </main>
        
    </div>
  );
}



