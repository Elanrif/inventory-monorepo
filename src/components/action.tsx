"use client"
import { useState } from "react"

export function ActionCell() {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="px-2 py-1 text-xl font-bold"
      >
        ...
      </button>

      {open && (
        <div className="absolute flex flex-col right-0 mt-2 w-32 bg-white border rounded shadow-md text-sm z-10">
          <button className="w-full px-3 py-2 text-left hover:bg-gray-100">
            Éditer
          </button>
          <button className="w-full px-3 py-2 text-left hover:bg-gray-100">
            Supprimer
          </button>
        </div>
      )}
    </div>
  )
}
