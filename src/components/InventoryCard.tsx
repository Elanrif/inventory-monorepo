"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type StockStatus = {
  inStock: number
  lowStock: number
  outOfStock: number
}

interface InventoryCardProps {
  totalAssetValue: number
  totalProducts: number
  stock: StockStatus
}

export default function InventoryCard({
  totalAssetValue,
  totalProducts,
  stock,
}: InventoryCardProps) {
  const total = stock.inStock + stock.lowStock + stock.outOfStock

  const inStockPercent = (stock.inStock / total) * 100
  const lowStockPercent = (stock.lowStock / total) * 100
  const outOfStockPercent = (stock.outOfStock / total) * 100

  return (
    <Card className="p-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between ">
      <CardHeader className="pb-2 ">
        <CardTitle className="text-sm text-muted-foreground">
          Total Asset Value
        </CardTitle>
        <p className="text-2xl font-bold">${totalAssetValue.toLocaleString()}</p>
      </CardHeader>
       <div className="w-px h-full bg-gray-300 ml-35" />
      <CardContent className="pr-110">
        <div className="mb-2 text-lg font-bold ">
          {totalProducts} <span className="text-base text-muted-foreground font-normal">Product</span>
        </div>
        {/* Barre multi-couleurs */}
        <div className="flex h-3 w-full overflow-hidden rounded-full">
          <div
            className="bg-green-500"
            style={{ width: `${inStockPercent}%` }}
          />
          <div
            className="bg-yellow-400"
            style={{ width: `${lowStockPercent}%` }}
          />
          <div
            className="bg-red-500"
            style={{ width: `${outOfStockPercent}%` }}
          />
        </div>

        {/* Légende */}
        <div className="mt-3 flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-1 text-gray-500">
            <span className="h-3 w-1 rounded-full bg-green-500 " />
            In stock: <span className="text-black">{stock.inStock}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            <span className="h-3 w-1 rounded-full bg-yellow-400" />
            Low stock: <span className="text-black"> {stock.lowStock}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            <span className="h-3 w-1 rounded-full  bg-red-500" />
            Out of stock: <span className="text-black">{stock.outOfStock}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
