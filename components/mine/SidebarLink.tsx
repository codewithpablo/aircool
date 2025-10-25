/* 🔹 Enlace con estado activo */
import { usePathname } from "next/navigation";
import Link from "next/link";

export function SidebarLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  const pathname = usePathname();
  const isActive = pathname === href; // detecta si estás en esta ruta

  return (
    <Link
      href={href}
      className={`flex items-center gap-3  py-2 rounded-lg text-sm font-medium transition
        ${
          isActive
            ? "bg-red-400 text-white font-semibold"
            : "text-gray-700 hover:bg-azulLaguna/10 hover:text-azulNoche"
        }`}
    >
     <div className="flex gap-2   w-[50%]  mx-auto">
            {icon}
            <span>{label}</span>
     </div>
    </Link>
  )

}