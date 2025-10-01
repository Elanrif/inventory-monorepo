/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import { TableCell, TableFooter, TableRow } from "@/components/ui/table";

export interface FooterButtonProps {
  label?: string;
  size?: any;
  className?: string;
  icon?: LucideIcon;
}



export interface FooterTableProps {
  buttonData: FooterButtonProps[];
  totalResults: string;
}

export default function BodyTableFooter({
  buttonData,
  totalResults,
}: FooterTableProps) {
  return (
    <TableFooter className="bg-white">
      <TableRow>
        <TableCell colSpan={8}>
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-3">
              <p className="font-medium">{totalResults}</p>
              {buttonData.slice(0, 1).map((button, id) => (
                <Button variant="outline" size={button.size} key={id}>
                  {button.label}
                  {button.icon && <button.icon />}
                </Button>
              ))}
            </div>
            <div className="flex items-center gap-3 me-16">
              {buttonData.slice(1).map((button, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className={button.className}
                >
                  {button.icon && button.label === "Previous" && (
                    <button.icon />
                  )}
                  {button.label}
                  {button.icon && !button.label && <button.icon />}
                  {button.icon && button.label === "Next" && <button.icon />}
                </Button>
              ))}
            </div>
          </div>
        </TableCell>
      </TableRow>
    </TableFooter>
  );
}
