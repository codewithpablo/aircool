'use client';

import Logo from "../other/Logo";
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
import Link from "next/link";
import * as React from "react";
import Image from "next/image";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Refrigeración",
    href: "/cursos/refrigeracion",
    description:
      "Aprendé a instalar, mantener y reparar sistemas de refrigeración comercial, industrial y automotriz.",
  },
  {
    title: "Electricidad",
    href: "/cursos/electricidad",
    description:
      "Conocé la electricidad aplicada a la refrigeración, tableros, protecciones y normas de seguridad.",
  },
  {
    title: "Electrónica",
    href: "/cursos/electronica",
    description:
      "Estudia placas, controladores y sensores de equipos, aplicando electrónica básica y avanzada.",
  },
  {
    title: "Climatización",
    href: "/cursos/climatizacion",
    description:
      "Aprendé a diseñar, instalar y mantener sistemas de aire acondicionado y HVAC.",
  },
  {
    title: "Ventilación",
    href: "/cursos/ventilacion",
    description:
      "Conocé técnicas de ventilación mecánica, torres de enfriamiento y circulación de aire eficiente.",
  },
  {
    title: "Automatización",
    href: "/cursos/automatizacion",
    description:
      "Implementá controles digitales, PLCs y sistemas inteligentes para optimizar equipos de refrigeración.",
  },
  {
    title: "Energías renovables",
    href: "/cursos/energias-renovables",
    description:
      "Aprendé sobre energía solar, bombas de calor y eficiencia energética aplicada a refrigeración.",
  },
  {
    title: "Seguridad industrial",
    href: "/cursos/seguridad-industrial",
    description:
      "Conocé las normas de seguridad, uso de gases refrigerantes y prácticas seguras en talleres y obras.",
  },
  {
    title: "Emprendimientos",
    href: "/cursos/emprendimientos",
    description:
      "Aprendé a gestionar tu propio servicio técnico, atención al cliente y herramientas para emprender.",
  },
];

export default function NavigationMenuWithDropdown() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative flex justify-center z-20 bg-blue-400 shadow-xl py-3 px-4 md:px-6 w-full max-w-[95%] mt-2 rounded-full mx-auto">
      <NavigationMenu>
        <NavigationMenuList className="flex flex-wrap justify-center gap-2 md:gap-4">
          {/* Nosotros */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Nosotros</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[.75fr_1fr] gap-3 p-2 sm:p-4 md:p-6 w-full max-w-full">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      href="/"
                      className="relative flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b from-muted/50 to-muted p-2 sm:p-4 md:p-6 no-underline focus:shadow-md"
                    >
                      <div className="relative w-full aspect-video rounded-md overflow-hidden">
                        <Image src="/4.png" alt="Air Cool" fill className="object-cover" />
                      </div>
                      <div className="mt-2 text-lg sm:text-xl md:text-2xl font-medium text-white">
                        AIR COOL
                      </div>
                      <p className="text-sm sm:text-base md:text-lg leading-tight text-white/80">
                        Nueva propuesta educativa
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>

                <ListItem href="/docs" title="Equipo de profesores">
                  Disponemos de profesores titulados y experimentados
                </ListItem>
                <ListItem href="/docs/installation" title="Misión y valores">
                  Nuestro objetivo es formar técnicos especializados y competentes
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Por qué Air Cool">
                  Aprendés no solo teoría, sino también a aplicar los conocimientos
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Cursos */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Cursos</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-2 sm:p-3 md:p-4 lg:p-6 w-full max-w-full">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Contacto */}
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/docs" className={navigationMenuTriggerStyle()}>
                Contacto
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href ?? "#"}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-2 sm:p-3 md:p-4 leading-none no-underline outline-hidden transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm sm:text-base font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm sm:text-sm md:text-base leading-snug text-muted-foreground">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
