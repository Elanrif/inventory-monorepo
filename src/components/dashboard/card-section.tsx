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
import AlertEmptyData from '../alert-empty-data';

export type TableColumnProps = {
  label: string | JSX.Element;
  icon?: LucideIcon;
};

export type TableSectionProps = {
  columns: TableColumnProps[];
  footer: FooterTableProps;
};

type CardHeaderProps = {
  leftIcon?: LucideIcon;
  title: string;
  rightIcon?: LucideIcon;
};

type EmptyAction = { label: string; href?: string };

export type CardSectionProps<T> = {
  actions: CardHeaderProps[];
  data: T[];
  table: TableSectionProps;
  render: (xy: T[]) => React.ReactNode;
  emptyMessage?: string;
  emptyAction?: EmptyAction;
};

export function CardSection<T>({
  actions,
  table,
  data,
  render,
  emptyMessage,
  emptyAction,
}: CardSectionProps<T>) {
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
              {action.leftIcon && <action.leftIcon size={18} />}
              <p className='capitalize'>{action.title}</p>
              {action.rightIcon && <action.rightIcon size={18} />}
            </CardAction>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        {data.length > 0 ? (
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
        ) : (
          <AlertEmptyData
            className='mx-auto max-w-3xl'
            message={emptyMessage}
            action={emptyAction}
          />
        )}
      </CardContent>
    </Card>
  );
}
