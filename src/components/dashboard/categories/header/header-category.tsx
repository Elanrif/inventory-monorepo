import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FileText, LucideIcon, Plus, Upload } from "lucide-react";
import React from "react";

type ButtonVariant = "outline" | "default";

interface HeaderCategoryItem {
  icon: LucideIcon;
  label: string;
  className?: string;
  variant?: ButtonVariant;
}

const HeaderCategoryData: HeaderCategoryItem[] = [
  {
    icon: Upload,
    label: "Import",
  },
  {
    icon: FileText,
    label: "Export",
  },
  {
    icon: Plus,
    label: "Add Category",
    className: "bg-purple-600 text-white hover:bg-purple-700",
    variant: "default",
  },
];

export default function HeaderCategory() {
  return (
    <div className="flex items-center justify-between mb-4 mt-3">
      <h1 className="capitalize text-xl font-bold">categories</h1>
      <div className="flex items-center gap-3">
        {HeaderCategoryData.map((item, index) => (
          <Button
            key={index}
            className={cn("py-5", item.className)}
            variant={item.variant ?? "outline"}
          >
            <item.icon /> {item.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
