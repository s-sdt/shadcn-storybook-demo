import { ArrowDownNarrowWide, ArrowUpNarrowWide, List } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../accordion";
import { Button } from "../button";

type SortPros = {
  onSort?: (sortBy: string, order: "asc" | "desc") => void;
};

export default function Sort({ onSort }: SortPros) {
  const items = [
    {
      value: "item-1",
      trigger: "Datum ",
      content: (
        <div className="flex gap-2 ">
          <Button variant={"secondary"} onClick={() => onSort?.("date", "asc")}>
            <ArrowDownNarrowWide />
          </Button>
          <Button
            variant={"secondary"}
            onClick={() => onSort?.("date", "desc")}
          >
            <ArrowUpNarrowWide />
          </Button>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full sm:max-w-2xl mx-auto p-4 border-orange-50 rounded-xl bg-orange-50 flex flex-col">
      <div className=" flex gap-4 items-center bg-stone-50 p-4">
        <List className="size-4" />
        <span className="capitalize text-xl">sortera efter</span>
      </div>
      {/* Datum */}
      <div className="bg-stone-50 px-4 mt-2 ">
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="max-w-lg "
        >
          {items.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger>{item.trigger}</AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
