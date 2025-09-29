"use client"

import { Button } from "@/components/ui/button"
import { Download, Upload, Plus } from "lucide-react"

export function InventoryHeader() {
  return (
    <div className="flex items-center justify-between bg-gray-50 px-4 py-2 rounded-md -mb-8">
      <h2 className="text-lg font-bold">Categories</h2>
      <div className="flex gap-2">
        <Button variant="outline" size="sm">
          <Upload className="w-4 h-4 mr-1" />
          Import
        </Button>
        <Button variant="outline" size="sm">
          <Download className="w-4 h-4 mr-1" />
          Export
        </Button>
        <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white ">
          <Plus className="w-4 h-4 mr-1" />
          Add Product
        </Button>
      </div>
    </div>
  )
}
