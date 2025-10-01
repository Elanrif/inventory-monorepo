import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LucideIcon, } from "lucide-react";
import React from "react";

export type ButtonVariant = "outline" | "default";

interface HeaderButtonsType {
  icon: LucideIcon;
  label: string;
  className?: string;
  variant?: ButtonVariant;
}

interface HeaderButtonsProps {
  title:string,
  headerButtons: HeaderButtonsType[];
}

export default function HeaderCategory({title, headerButtons }: HeaderButtonsProps) {
  return (
    <div className="flex items-center justify-between mb-4 mt-3">
      <h1 className="capitalize text-xl font-bold">{title}</h1>
      <div className="flex items-center gap-3">
        {headerButtons.map((headerButton, index) => (
          <Button
            key={index}
            className={cn("py-5", headerButton.className)}
            variant={headerButton.variant ?? "outline"}
          >
            <headerButton.icon /> {headerButton.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
