"use client";

import Logo from "./Logo";
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
  return (
    <div className="relative flex justify-center z-20 bg-red-400 shadow-lg py-3 px-9 w-[90%] mx-auto mt-3 rounded-full">
      <div className="absolute left-9 top-4">
        <Logo color="white"/>
      </div>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Nosotros</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-1 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] ">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      href="/"
                      className="relative flex h-full w-full select-none flex-col justify-end rounded-md bg-linear-to-b from-muted/50 to-muted p-4 no-underline outline-hidden focus:shadow-md"
                    >
                        <Image src="/4.png" alt="" fill objectFit="cover"/>
                      <div className="mb-2 mt-4 text-lg font-medium">
                        AIR COOL
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Nueva propuesta educativa
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>

                <ListItem href="/docs" title="Equipo de profesores">
                  Disponemos de profesores titulados y experimentados
                </ListItem>
                <ListItem href="/docs/installation" title="Mision y valores">
                  Nuestro objetivo es formar técnicos especializados y competentes 
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Por que Air Cool">
                  Aprendés no solo teoría, sinotambien a aplicar los conocimientos
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger> Cursos</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-1 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
