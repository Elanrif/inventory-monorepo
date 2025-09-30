import { Table, TableHeader, TableRow } from "@/components/ui/table";
import BodyTableHeader from "./body-table-header";
import BodyTableBody from "./body-table-body";
import BodyTableFooter from "./body-table-footer";
import { TableDataMock } from "@/utils/tableDataMock";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, ArrowRight, ChevronDown, MoreHorizontal } from "lucide-react";

const TableHeadersData = [
  { title: <Checkbox className="border-2 border-gray-400 rounded-xs" /> },
  { title: "Name" },
  { title: "Description" },
  { title: "Status", icon: ChevronDown },
  { title: "Is_featured" },
  { title: "Created_at" },
  { title: "Action" },
];

const buttonData = [
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
  },
];

export function BodyTable() {
  return (
    <Table className="mt-4 mx-5 w-full">
      <TableHeader className="bg-muted">
        <TableRow>
          {TableHeadersData.map((header, index) => {
            return (
              <BodyTableHeader key={index} {...header} />
            );
          })}
        </TableRow>
      </TableHeader>
      {TableDataMock.map((item, index) =>
        item.categoryName.map((cat, id) =>
          item.Status.map((statusItem, i) => (
            <BodyTableBody
              key={`${index}-${id}-${i}`}
              name={cat.title}
              src={cat.image}
              description={item.Description}
              status={statusItem.title}
              statusColors={statusItem.color}
              isFeatured={item.Is_featured}
              created_at={item.Created_at}
            />
          ))
        )
      )}
      <BodyTableFooter buttonData={buttonData} totalResults="Result 1-10 of 45"/>
    </Table>
  );
}
