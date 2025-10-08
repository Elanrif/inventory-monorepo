import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import BodyTableFooter, { FooterTableProps } from "./table-footer-section";
import { LucideIcon } from "lucide-react";
import BodyTable, {
  ButtonActionProps,
  CategoryDto,
} from "./table-body-section";
import React, { JSX } from "react";

export type TableColumnProps = {
  label: string | JSX.Element;
  icon?: LucideIcon;
};

export type CategoryTableProps = {
  columns: TableColumnProps[];
  actions: ButtonActionProps[];
  footer: FooterTableProps;
};

export function TableSection({ table, rows }: { table: CategoryTableProps, rows: CategoryDto[] }) {
  const { columns, actions, footer } = table;
  return (
    <Table className="mt-4 w-full">
      <TableHeader className="bg-muted">
        <TableRow>
          {columns.map((column, index) => (
            <TableHead key={index}>
              {column.label}
              {column.icon && <column.icon size={15} className="ml-1 inline" />}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <BodyTable tableData={rows} action={actions} />
      <BodyTableFooter footerTable={footer} />
    </Table>
  );
}
