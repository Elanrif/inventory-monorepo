/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  LucideIcon,
  MoreHorizontal,
} from "lucide-react";
import { TableCell, TableFooter, TableRow } from "@/components/ui/table";


interface buttonProps {
  label?: string;
  size?: any;
  className?: string;
  icon?: LucideIcon;
}

const ButtonData: buttonProps[] = [
  {
    label: "10",
    icon: ChevronDown,
    size: "sm",
  },
  {
    label: "Previous",
    icon: ArrowLeft,
    className: "flex items-center",
  },
  {
    label: "1",
    className: "border border-purple-700",
  },
  {
    label: "2",
  },
  {
    label: "3",
  },
  {
    icon: MoreHorizontal,
  },
  {
    label: "12",
  },
  {
    label: "Next",
    icon: ArrowRight,
  }
];

export default function BodyTableFooter() {
  return (
    <TableFooter className="bg-white ">
      <TableRow>
        <TableCell colSpan={8}>
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-3">
              <p className="font-medium">Result 1-10 of 45</p>
              {ButtonData.slice(0, 1).map((button, id) => (
                <Button
                  variant="outline"
                  size={button.size}
                  key={id}
                >
                  {button.label}
                  {button.icon && <button.icon />}
                </Button>
              ))}
            </div>
            <div className="flex items-center gap-3 me-16">
              {ButtonData.slice(1).map((button, index) => (
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
                  {button.icon && button.label === "Next" && (
                    <button.icon />
                  )}
                </Button>
              ))}
            </div>
          </div>
        </TableCell>
      </TableRow>
    </TableFooter>
  );
}
