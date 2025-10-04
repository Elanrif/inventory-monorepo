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


export type LinkProps = {
  href: string
  number: number
  isActive?: boolean
}

export function FooterCategory({ numbers }: { numbers: LinkProps[] }) {
  return (
    <Pagination className="mt-8">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        {numbers.map((link, index) => (
          <PaginationItem key={index}>
            <PaginationLink href={link.href}>{link.number}</PaginationLink>
          </PaginationItem>
        ))}
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

// Selecteur dans le footer de la table
export type NumberSelectorProps = {
  labelresult: string
}

export function NumberSelector({ categories }: { categories: NumberSelectorProps[] }) {
  const [value, setValue] = React.useState("10")

  return (
    <>
      <div className="mt-9 px-4">
        {categories.map((item, index) => (
          <div key={index} className="flex items-center gap-2 font-medium text-sm">
            {item.labelresult}
            <Select value={value} onValueChange={(val) => setValue(val)}>
              <SelectTrigger className="w-[60px] text-xs !h-7 !py-0 !px-2 opacity-80 font-medium">
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
        ))}
      </div>
    </>
  )
}