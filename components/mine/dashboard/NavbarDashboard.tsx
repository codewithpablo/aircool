"use client";

import { Search, Bell, MessageSquare } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function NavbarDashboard() {
  return (
    <nav className="w-full sticky bgThird pr-6 top-0 bg-verde  z-50    h-16 py-3 flex items-center justify-between">
     

      {/* BARRA DE BÚSQUEDA */}
      <div className="flex-1 max-w-md ml-3 relative">
        <Input
          type="text"
          placeholder="Buscar..."
          className="pl-10 bg-gray-100 border-none focus-visible:ring-2 focus-visible:ring-azulLaguna"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
      </div>

      {/* ICONOS + AVATAR */}
      <div className="flex items-center gap-5">
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-gray-100 rounded-full relative"
        >
          <MessageSquare className="h-5 w-5 text-gray-700" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-gray-100 rounded-full relative"
        >
          <Bell className="h-5 w-5 text-gray-700" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-yellow-400 rounded-full"></span>
        </Button>

        <Avatar className="w-9 h-9 cursor-pointer ring-2 ring-azulLaguna ring-offset-1">
          <AvatarImage src="https://randomuser.me/api/portraits/men/32.jpg" />
          <AvatarFallback>PA</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
}
