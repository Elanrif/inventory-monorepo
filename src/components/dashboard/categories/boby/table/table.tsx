import { Table } from "@/components/ui/table";
import BodyTableHeader from "./body-table-header";
import BodyTableBody from "./body-table-body";
import BodyTableFooter from "./body-table-footer";


export function BodyTable() {
  return (
    <Table className="mt-4 mx-5 w-[940px]">
      <BodyTableHeader />
      <BodyTableBody />
      <BodyTableFooter />
    </Table>
  );
}
