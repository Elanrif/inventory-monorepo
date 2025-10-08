import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FooterTableProps } from "./table-footer-section";
import { LucideIcon } from "lucide-react";
import TableBodyCategories, {
  ButtonActionProps,
  CategoryDto,
} from "./table-body-categories";
import React, { JSX } from "react";
import TableFooterSection from "./table-footer-section";
import { UserDto } from "@/lib/user/models/user.model";
import TableBodyUsers from "./table-body-users";

export type TableColumnProps = {
  label: string | JSX.Element;
  icon?: LucideIcon;
};

export type CategoryTableProps = {
  columns: TableColumnProps[];
  actions: ButtonActionProps[];
  footer: FooterTableProps;
};

export function TableCategory({
  table,
  categories,
}: {
  table: CategoryTableProps;
  categories: CategoryDto[];
}) {
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
      <TableBodyCategories categories={categories} action={actions} />
      <TableFooterSection footerTable={footer} />
    </Table>
  );
}

export function TableUsers({
  table,
  users,
}: {
  table: CategoryTableProps;
  users: UserDto[];
}) {
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
      <TableBodyUsers users={users} action={actions} />
      <TableFooterSection footerTable={footer} />
    </Table>
  );
}
