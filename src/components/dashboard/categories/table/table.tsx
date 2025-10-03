import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import BodyTableFooter, { FooterTableProps } from "./table-footer";
import { LucideIcon } from "lucide-react";
import BodyTableCategory, {
  ButtonActionProps,
  TableDataProps,
} from "./table-body";
import React, { JSX } from "react";

export type TableHeaderprops = {
  title: string | JSX.Element;
  icon?: LucideIcon;
};

export type TableCategoryProps = {
  tableTitles: TableHeaderprops[];
  tableData: TableDataProps[];
  buttonAction: ButtonActionProps[];
  footerTable: FooterTableProps;
};

export interface TableCategory {
  table: TableCategoryProps;
}

export function TableCategory({
table
}: TableCategory) {
  const { tableTitles, tableData, buttonAction, footerTable } = table;
  return (
    <Table className="mt-4 w-full">
      <TableHeader className="bg-muted">
        <TableRow>
          {tableTitles.map((tableTitle, index) => (
            <TableHead key={index}>
              {tableTitle.title}
              {tableTitle.icon && <tableTitle.icon size={15} className="ml-1 inline" />}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <BodyTableCategory tableData={tableData} action={buttonAction} />
      <BodyTableFooter footerTable={footerTable} />
    </Table>
  );
}
