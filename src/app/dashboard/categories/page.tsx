import { DataTable } from "@/components/data-table"
import InventoryCard from "@/components/InventoryCard";
import { categoryMocks } from "./categoryMocks";
import { InventoryHeader } from "@/components/inventory-header";

const totalAssetValue = 10356788
const totalProducts = 2379
const stock = {
  inStock: 1452,
  lowStock: 355,
  outOfStock: 186,
}

export default function Page() {
  return (
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-20 md:gap-10 md:py-6">
              <InventoryHeader name ="Catégories"/>
              <InventoryCard
                totalAssetValue={totalAssetValue}
                totalProducts={totalProducts}
                stock={stock}
              />
              <DataTable
                data={categoryMocks}
              />
            </div>
          </div>
        </div>
  )
}
