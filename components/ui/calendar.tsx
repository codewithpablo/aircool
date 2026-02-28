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
      classNames={{
        caption: "flex justify-between items-center px-2",
        navbar: "flex justify-between items-center",
      }}
      components={{
        DayButton: CalendarDayButton,
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
