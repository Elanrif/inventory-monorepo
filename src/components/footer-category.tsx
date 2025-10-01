"use client"


import * as React from "react"

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function FooterCategory() {
  return (
    <Pagination className="mt-8">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">12</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

{/* selection dans footer */ }

export function NumberSelector() {
  // valeur par défaut 
  const [value, setValue] = React.useState("10")

  return (
    <div className="flex items-center gap-2 mt-9 px-4">
      <div className="font-medium text-sm">
        Result 1-10 of 45
      </div>
      <Select value={value} onValueChange={(val) => setValue(val)}>
        <SelectTrigger
          className="w-[60px] text-xs !h-7 !py-0 !px-2 opacity-80 font-medium"
        >
          <SelectValue>{value}</SelectValue>
        </SelectTrigger>

        <SelectContent>
          {[...Array(10)].map((_, i) => (
            <SelectItem key={i} value={(i + 1).toString()}>
              {i + 1}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
