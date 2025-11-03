// components/Navbar.tsx

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
        <nav className="hidden md:block bg-blue-400 rounded-full w-full mt-3 px-6 py-3 z-20">
          <div className="flex justify-center items-center">
            <NavigationMenu className="bg-transparent">
              <NavigationMenuList className="flex space-x-6 items-center">

                {/* Getting Started */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="hover:text-gray-800">Getting started</NavigationMenuTrigger>
                  <NavigationMenuContent className="mt-2">
                    <ul className="grid gap-3 p-2 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] grid-cols-1 md:grid-cols-2 lg:grid-cols-[.75fr_1fr] bg-white rounded-lg shadow-lg">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link href="/" passHref legacyBehavior>
                            <a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-linear-to-b from-muted/50 to-muted p-4 no-underline outline-none focus:shadow-md">
                              <div className="mb-2 mt-4 text-lg font-medium text-gray-900">Shadcn UI Blocks</div>
                              <p className="text-sm leading-tight text-gray-700">
                                Collection of customized Shadcn UI blocks and components
                              </p>
                            </a>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/docs" title="Introduction">Re‑usable components built using Radix UI and Tailwind CSS.</ListItem>
                      <ListItem href="/docs/installation" title="Installation">How to install dependencies and structure your app.</ListItem>
                      <ListItem href="/docs/primitives/typography" title="Typography">Styles for headings, paragraphs, lists… etc</ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Components */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="hover:text-gray-800">Components</NavigationMenuTrigger>
                  <NavigationMenuContent className="mt-2">
                    <ul className="grid gap-3 p-2 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 bg-white rounded-lg shadow-lg">
                      {components.map((component) => (
                        <ListItem key={component.title} title={component.title} href={component.href}>
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Documentation */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/docs" passHref>
                      <div className={cn(navigationMenuTriggerStyle(), "hover:text-gray-800")}>Documentation</div>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </nav>

        {/* --- Navbar Mobile --- */}
        <nav className="md:hidden bg-blue-400 rounded-full px-6 py-3 z-20 relative mt-3">
          <div className="flex justify-between items-center">
            <span className="text-white font-bold text-xl">My App</span> 
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-white focus:outline-none p-1"
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
            className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-blue-600 z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto
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

// --- ListItem Desktop ---
const ListItem = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & { title: string; children: React.ReactNode }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link href={props.href!} passHref legacyBehavior>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

// --- Disclosure Mobile ---
function DisclosureItem({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  
  return (
    <div className="bg-blue-500 rounded-lg mb-2 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-3 text-white font-semibold hover:bg-blue-700 transition-colors"
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
        <div className="overflow-hidden p-2 bg-blue-400">
          {children}
        </div>
      </div>
    </div>
  );
}

// --- MobileLink ---
function MobileLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void; }) {
  return (
    <Link href={href} passHref >
      <div
        onClick={onClick} 
        className="block text-white text-sm hover:bg-blue-500 p-2 rounded transition-colors"
      >
        {children}
      </div>
    </Link>
  );
}
