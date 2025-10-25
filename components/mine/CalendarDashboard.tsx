"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar"

export function CalendarDashboard() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
       
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="
            rounded-lg
            border
            border-gray-200
            shadow-md
            p-4
            w-full
            text-lg
            focus:outline-none
            focus:ring-2
            focus:ring-blue-400
            transition
            duration-200
            hover:shadow-lg
          "
          captionLayout="dropdown"
        />
  )
}
