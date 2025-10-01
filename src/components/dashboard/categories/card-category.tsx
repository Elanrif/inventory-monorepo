import { Card } from "@/components/ui/card";
import React from "react";
import { TableCategory, TableHeaderprops } from "./table/table";
import { LucideIcon, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ButtonActionProps, TableDataProps } from "./table/table-body";
import { FooterButtonProps } from "./table/table-footer";

type CardHeaderProps = {
  icon1?: LucideIcon;
  title: string;
  icon2?: LucideIcon;
};

export type CategoryProps = {
  cardHeader: CardHeaderProps[];
  tableHeader: TableHeaderprops[];
  tableData: TableDataProps[];
  buttonAction: ButtonActionProps[];
  footerButtonTable: FooterButtonProps[];
  totalResults: string;
};

export default function CardCategory({
  cardHeader,
  tableHeader,
  tableData,
  buttonAction,
  footerButtonTable,
  totalResults
}: CategoryProps) {
  return (
    <Card className="mt-6">
      <div className="flex justify-between p-4">
        <div className="relative ms-2">
          <Input placeholder="Search" className="w-[240px]" />
          <Search className="absolute top-2 left-52 text-stone-400 size-5" />
        </div>
        <div className="flex gap-4">
          {cardHeader.map((h, id) => (
            <Card
              className="flex flex-row items-center gap-2 px-3 py-2 font-medium text-sm cursor-pointer"
              key={id}
            >
              {h.icon1 && React.createElement(h.icon1, { size: 18 })}
              <p className="capitalize">{h.title}</p>
              {h.icon2 && React.createElement(h.icon2, { size: 18 })}
            </Card>
          ))}
        </div>
      </div>
      <TableCategory
        tableTitle={tableHeader}
        tableData={tableData}
        buttonAction={buttonAction}
        footerButtonTable={footerButtonTable}
        totalResults={totalResults}
      />
    </Card>
  );
}
