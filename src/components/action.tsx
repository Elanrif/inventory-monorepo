"use client"
import { useState } from "react"

export type ActionCellProps = {
  label: string
  icon: string
}

export function ActionCell() {
  const [open, setOpen] = useState(false)

  const actions: ActionCellProps[] = [
    { label: "Edit", icon: "✏️" },
    { label: "Delete", icon: "🗑️" },
    { label: "Details", icon: "🔍" },
  ]

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="px-2 py-1 text-xl font-bold"
      >
        ...
      </button>
                 {/* A ameliorer*/}
      {open && (
        <div className="flex flex-col absolute right-0 mt-2 w-32 bg-white border rounded shadow-md text-sm z-10">
          {actions.map((item, index) => (
            <button
              key={index}
              className="w-full px-3 py-2 text-left hover:bg-gray-100 flex items-center gap-2"
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
