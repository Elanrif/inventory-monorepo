import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
} from '@/components/ui/card';
import { Table, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import React, { JSX } from 'react';
import { LucideIcon, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import TableFooterSection, {
  FooterTableProps,
} from './table/table-footer-section';

export type TableColumnProps = {
  label: string | JSX.Element;
  icon?: LucideIcon;
};

export type TableSectionProps = {
  columns: TableColumnProps[];
  footer: FooterTableProps;
};

type CardHeaderProps = {
  icon1?: LucideIcon;
  title: string;
  icon2?: LucideIcon;
};

export type CardSectionProps<R> = {
  actions: CardHeaderProps[];
  data: R;
  table: TableSectionProps;
  render: (xy: R) => React.ReactNode;
};

export function CardSection<R>({
  actions,
  table,
  data,
  render,
}: CardSectionProps<R>) {
  const { columns, footer } = table;
  return (
    <Card className='mt-6'>
      <CardHeader className='flex justify-between p-4'>
        <div className='relative ms-2'>
          <Input placeholder='Search' className='w-[240px]' />
          <Search className='absolute top-2 left-52 size-5 text-stone-400' />
        </div>
        <div className='hidden gap-4 xl:flex'>
          {actions.map((action, id) => (
            <CardAction
              className='flex cursor-pointer flex-row items-center gap-2 px-3 py-2 text-sm'
              key={id}
            >
              {action.icon1 && <action.icon1 size={18} />}
              <p className='capitalize'>{action.title}</p>
              {action.icon2 && <action.icon2 size={18} />}
            </CardAction>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <Table className='mt-4 w-full'>
          <TableHeader className='bg-muted'>
            <TableRow>
              {columns.map((column, index) => (
                <TableHead key={index}>
                  {column.label}
                  {column.icon && (
                    <column.icon size={15} className='ml-1 inline' />
                  )}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          {render(data)}
          <TableFooterSection footerTable={footer} />
        </Table>
      </CardContent>
    </Card>
  );
}
