// components/Navbar.tsx
import { ThemeToggle } from "../other/ThemeToggle";
import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Menu as MenuIcon, X as XIcon, ChevronDown } from "lucide-react";
import Link from "next/link";

// --- Data para Componentes ---
const components = [
  { title: "Alert Dialog", href: "/docs/primitives/alert-dialog", description: "A modal dialog that interrupts the user with important content and expects a response." },
  { title: "Hover Card", href: "/docs/primitives/hover-card", description: "For sighted users to preview content available behind a link." },
  { title: "Progress", href: "/docs/primitives/progress", description: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar." },
  { title: "Scroll-area", href: "/docs/primitives/scroll-area", description: "Visually or semantically separates content." },
  { title: "Tabs", href: "/docs/primitives/tabs", description: "A set of layered sections of content—known as tab panels—that are displayed one at a time." },
  { title: "Tooltip", href: "/docs/primitives/tooltip", description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it." },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <header className="w-full flex justify-center z-50">
      <div className="w-[95%]">

        {/* --- Navbar Desktop --- */}
        {/* CAMBIO: Fondo a blue-300 en light mode y gris oscuro en dark mode */}
        <nav className="hidden md:block bg-blue-400 rounded-full w-full mt-3 py-1 z-20 dark:bg-gray-900">
          <div className="flex justify-center items-center">
            <NavigationMenu className="bg-transparent">
              <NavigationMenuList className="flex space-x-6 items-center">
                <ThemeToggle />
                {/* Getting Started */}
                
                {/* Components */}
                

                {/* Documentation */}
                

              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </nav>

        {/* --- Navbar Mobile --- */}
        {/* CAMBIO: Fondo a blue-300 en light mode y gris oscuro en dark mode */}
        <nav className="md:hidden bg-blue-300 rounded-full px-6 py-3 z-20 relative mt-3 dark:bg-gray-900">
          <div className="flex justify-between items-center">
            {/* CAMBIO: Texto a oscuro en light mode */}
            <span className="text-gray-800 font-bold text-xl dark:text-white">My App</span> 
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              // CAMBIO: Icono a oscuro en light mode
              className="text-gray-800 focus:outline-none p-1 dark:text-white"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>

          {/* Overlay */}
          {mobileOpen && (
            <div 
              className="fixed inset-0 z-40 bg-black/40" 
              onClick={closeMobileMenu}
              role="button"
              tabIndex={0}
              aria-label="Close menu by clicking outside"
            />
          )}

          {/* Sidebar */}
          <div
            // FONDO MOBILE: Azul oscuro en dark mode (el sidebar se mantiene azul oscuro para buen contraste con el contenido del sidebar)
            className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-blue-600 dark:bg-blue-900 z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto
              ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
          >
            <div className="flex flex-col pt-6 px-4 h-full">
              <div className="flex justify-end items-center mb-6">
                <button onClick={closeMobileMenu} className="text-white focus:outline-none p-1" aria-label="Close menu">
                  <XIcon size={24} />
                </button>
              </div>

              {/* Menús Mobile */}
              <DisclosureItem title="Getting started">
                <ul className="pl-2 mt-2 space-y-1">
                  <li><MobileLink href="/docs" onClick={closeMobileMenu}>Introduction</MobileLink></li>
                  <li><MobileLink href="/docs/installation" onClick={closeMobileMenu}>Installation</MobileLink></li>
                  <li><MobileLink href="/docs/primitives/typography" onClick={closeMobileMenu}>Typography</MobileLink></li>
                </ul>
              </DisclosureItem>

              <DisclosureItem title="Components">
                <ul className="pl-2 mt-2 space-y-1">
                  {components.map((c) => (
                    <li key={c.title}>
                      <MobileLink href={c.href} onClick={closeMobileMenu}>{c.title}</MobileLink>
                    </li>
                  ))}
                </ul>
              </DisclosureItem>

              <MobileLink href="/docs" onClick={closeMobileMenu}>
                Documentation
              </MobileLink>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

// --- ListItem Desktop (Componente interno) ---
const ListItem = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & { title: string; children: React.ReactNode }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
        <Link
  href={props.href!}
  ref={ref}
  className={cn(
    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
    "dark:hover:bg-gray-700 dark:focus:bg-gray-700 dark:text-gray-100",
    className
  )}
  {...props}
>
  {/* TÍTULO: Blanco en dark mode */}
  <div className="text-sm font-medium leading-none dark:text-white">{title}</div>

  {/* DESCRIPCIÓN: Gris claro en dark mode */}
  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground dark:text-gray-300">
    {children}
  </p>
</Link>
    </li>
  );
});
ListItem.displayName = "ListItem";

// --- Disclosure Mobile (Componente interno) ---
function DisclosureItem({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  
  return (
    // CONTENEDOR: Azul oscuro en dark mode
    <div className="bg-blue-500 rounded-lg mb-2 overflow-hidden dark:bg-blue-800">
      <button
        // HOVER: Sigue oscuro
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-3 text-white font-semibold hover:bg-blue-700 dark:hover:bg-blue-700 transition-colors"
        aria-expanded={open}
        aria-controls={`disclosure-content-${title.replace(/\s/g, '-')}`}
      >
        {title}
        <ChevronDown size={20} className={`transform transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      
      <div 
        id={`disclosure-content-${title.replace(/\s/g, '-')}`}
        className={`grid transition-all duration-300 ease-in-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        {/* CONTENIDO DESPLEGADO: Azul oscuro en dark mode */}
        <div className="overflow-hidden p-2 bg-blue-400 dark:bg-blue-700">
          {children}
        </div>
      </div>
    </div>
  );
}

// --- MobileLink (Componente interno) ---
function MobileLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void; }) {
  return (
    <Link href={href} passHref >
      <div
        onClick={onClick} 
        // HOVER: Sigue oscuro en dark mode
        className="block text-white text-sm hover:bg-blue-500 p-2 rounded transition-colors dark:hover:bg-blue-800"
      >
        {children}
      </div>
    </Link>
  );
}
