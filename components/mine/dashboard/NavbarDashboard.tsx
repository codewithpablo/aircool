"use client";

import { useState, useEffect } from "react";
import { Search, Bell, MessageSquare, Moon, Sun } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export default function NavbarDashboard() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
    <nav className="w-full sticky top-0 z-50 h-16 py-3 px-6 flex items-center justify-between bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
      {/* BARRA DE BÚSQUEDA */}
      <div className="flex-1 max-w-md ml-3 relative">
        <Input
          type="text"
          placeholder="Buscar..."
          className="pl-10 bg-gray-100 border-none focus-visible:ring-2 focus-visible:ring-azulLaguna"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
      </div>

      {/* ICONOS + AVATAR + THEME */}
      <div className="flex items-center gap-5">
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full relative"
        >
          <MessageSquare className="h-5 w-5 text-gray-700 dark:text-gray-100" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full relative"
        >
          <Bell className="h-5 w-5 text-gray-700 dark:text-gray-100" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-yellow-400 rounded-full" />
        </Button>

        {theme && (
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
            aria-label="Alternar modo oscuro/claro"
            onClick={() => setTheme(isDark ? "light" : "dark")}
          >
            {isDark ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-gray-700 dark:text-gray-100" />
            )}
          </Button>
        )}

        <Avatar className="w-9 h-9 cursor-pointer ring-2 ring-azulLaguna ring-offset-1">
          <AvatarImage src="https://randomuser.me/api/portraits/men/32.jpg" />
          <AvatarFallback>PA</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
}
