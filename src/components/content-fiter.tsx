"use client"

import React from "react"
import { Input } from "@/components/ui/input"
import { Calendar, ChevronDown, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContentFilter() {
    return (
        <div className="flex justify-between items-center bg-white h-18 px-2 rounded-lg">
            {/* Search */}
                <div className="relative w-64">
                    <Input
                        type="text"
                        placeholder="Search"
                        className="pr-9 border-gray-300 focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none"
                    />
                    <Search
                        size={16}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                    />
                </div>
            {/* Filters */}
            <div className="flex space-x-2">
                <Button
                    variant="outline"
                    className="font-medium px-4 py-1 rounded-lg flex items-center gap-2 text-xs"
                     onClick={() => {}}
                >
                    <Calendar size={20} className="text-gray-500" />
                    12 Sept - 18 Oct 2024
                </Button>
                <Button
                    variant="outline"
                    className="font-medium px-4 py-1 rounded-lg flex items-center gap-2 text-xs"
                    onClick={() => {}}
                >
                    <ChevronDown size={20} />
                    Amount Status
                </Button>

                <Button
                    variant="outline"
                    className="font-medium px-4 py-1 rounded-lg flex items-center gap-2 text-xs"
                    onClick={() => {}}
                >
                    <ChevronDown size={20} />
                    Status
                </Button>
            </div>
        </div>
    )
}
