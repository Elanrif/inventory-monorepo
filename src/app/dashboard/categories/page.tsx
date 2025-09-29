import { DataTable } from "@/components/data-table"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

import data from "./data.json"
import InventoryCard from "@/components/InventoryCard";

export default function Page() {

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <SidebarInset>
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-20 md:gap-10 md:py-6">
              <InventoryCard
                totalAssetValue={10356788}
                totalProducts={2379}
                stock={{ inStock: 1452, lowStock: 365, outOfStock: 186 }}
              />
              <DataTable data={data} />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
