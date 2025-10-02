import {LucideIcon} from "lucide-react"
import React from "react"

export type CategoryButtonProps = {
  action: string
  icon: LucideIcon
  variant?: "default" | "primary"
}

export function CategoryButton({label,
  categories,
}: {
  label: string
  categories: CategoryButtonProps[]}) {
  return (
    <div className="flex justify-between items-center">
      <p className="font-medium text-2xl">{label}</p>
      <div className="flex flex-wrap items-center gap-2 md:flex-row text-sm">
        {categories.map((item, index) => (
          <button
            key={index}
            className={`flex items-center gap-2 py-1.5 px-3 rounded-md font-medium ${
              item.variant === "primary"
                ? "bg-blue-700 text-white"
                : "bg-white border border-gray-200"
            }`}
          >
            <item.icon size={15} />
            {item.action}
          </button>
        ))}
      </div>
    </div>
  )
}
