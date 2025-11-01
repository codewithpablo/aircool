"use client"

import * as React from "react"
import { DayButton, DayPicker } from "react-day-picker"
import { cn } from "@/lib/utils"
import { es } from "date-fns/locale"

function Calendar({
  className,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  return (
    <DayPicker
  locale={es} // Español
  className={cn("bg-transparent text-black", className)}
  components={{
    DayButton: CalendarDayButton,
    CaptionLabel: () => <></>,       // Sin texto de mes
    // @ts-ignore - permitir IconNext aunque no esté en los tipos
    IconNext: () => <></>,   // Sin chevron derecho
    IconPrev: () => <></>,    // Sin chevron izquierdo
    ...components,
  }}
  {...props}
/>
  )
}


// 🔹 Botón de día con borde completamente redondo si está seleccionado
function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const ref = React.useRef<HTMLButtonElement>(null)
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus()
  }, [modifiers.focused])

  return (
    <button
      ref={ref}
      {...props}
      className={cn(
        "flex h-10 w-10 items-center justify-center text-sm font-medium transition-all text-black",
        "bg-transparent hover:bg-muted",
        modifiers.selected && "border-2 border-blue-500 rounded-full text-black",
        className
      )}
    >
      {day.date.getDate()}
    </button>
  )
}

export { Calendar, CalendarDayButton }
