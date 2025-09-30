import { Card } from "@/components/ui/card";
import React from "react";
import HeaderCardBody from "./header-card-body";
import { BodyTable } from "./table/table";
import { Calendar, ChevronDown, ListFilter } from "lucide-react";

const HeaderCardBodyData = [
  {
    icon1: Calendar,
    title: "12 sep-28 oct 2024",
    icon2: ChevronDown,
  },
  {
    title: "amount status",
    icon2: ChevronDown,
  },
  {
    title: "status",
    icon2: ChevronDown,
  },
  {
    icon1: ListFilter,
    title: " filter",
  },
];

export default function CardBody() {
  return (
    <Card className="mt-6">
      <HeaderCardBody header={HeaderCardBodyData} />
      <BodyTable />
    </Card>
  );
}
