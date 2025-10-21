/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';
import { TableCell, TableFooter, TableRow } from '@/components/ui/table';

export interface FooterTableProps {
  buttonResults: {
    totalResults: string;
    label: string;
    size: any;
    icon: LucideIcon;
  };
  buttonPagination: {
    label?: string;
    size?: any;
    className?: string;
    icon?: LucideIcon;
  }[];
}
export interface FooterTable {
  footerTable: FooterTableProps;
}

export default function TableFooterSection({ footerTable }: FooterTable) {
  const { buttonPagination, buttonResults } = footerTable;
  return (
    <TableFooter className='bg-white'>
      <TableRow>
        <TableCell colSpan={8}>
          <div className='flex items-center justify-between py-2'>
            <div className='flex items-center gap-3'>
              <p className='font-medium'>{buttonResults.totalResults}</p>

              <Button variant='outline' size={buttonResults.size}>
                {buttonResults.label}
                {buttonResults.icon && <buttonResults.icon />}
              </Button>
            </div>
            <div className='me-28 flex items-center gap-3'>
              {buttonPagination.map((button, index) => (
                <Button
                  key={index}
                  variant='outline'
                  className={button.className}
                >
                  {button.icon && button.label === 'Previous' && (
                    <button.icon />
                  )}
                  {button.label}
                  {button.icon && !button.label && <button.icon />}
                  {button.icon && button.label === 'Next' && <button.icon />}
                </Button>
              ))}
            </div>
          </div>
        </TableCell>
      </TableRow>
    </TableFooter>
  );
}
