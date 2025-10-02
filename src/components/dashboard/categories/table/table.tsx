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
  tableTitle: TableHeaderprops[];
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
  const { tableTitle, tableData, buttonAction, footerTable } = table;
  return (
    <Table className="mt-4 w-full">
      <TableHeader className="bg-muted">
        <TableRow>
          {tableTitle.map((h, i) => (
            <TableHead key={i}>
              {h.title}
              {h.icon &&
                React.createElement(h.icon, {
                  size: 15,
                  className: "ml-1 inline",
                })}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <BodyTableCategory tableData={tableData} action={buttonAction} />
      <BodyTableFooter footerTable={footerTable} />
    </Table>
  );
}
