import { Badge } from "@/components/ui/badge/badge";
import { Button } from "@/components/ui/button/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card/card";
import {
  Calendar,
  MessageSquare,
  Eye,
  UtensilsCrossed,
  Users,
  BookOpen,
  Banknote,
} from "lucide-react";

export type OfferCardProps = {
  customerName: string;
  date: string;
  status: "BOKAD" | "ERBJUDEN";
  type: string;
  guests: string;
  menu: string;
  price: string;
  onVisa?: () => void;
  onChatta?: () => void;
};

export function OfferCard({
  customerName,
  date,
  status,
  type,
  guests,
  menu,
  price,
  onVisa,
  onChatta,
}: OfferCardProps) {
  return (
    <Card className="self-stretch p-6 inline-flex flex-col justify-start items-start gap-2">
      <CardTitle className="w-full h-24 py-4 relative bg-white border-b border-yellow-800 inline-flex flex-col justify-start items-start overflow-hidden">
        {/* name */}
        <div className=" inline-flex justify-start items-start gap-11">
          <p className=" text-stone-900 text-xl font-medium  leading-7 tracking-wide">
            {customerName}
          </p>
        </div>
        {/* date */}
        <div className=" py-1 left-0 top-10.75 absolute inline-flex justify-start items-center gap-2">
          <Calendar className="size-4" />
          <div className=" text-stone-700 text-sm font-normal  leading-4 tracking-wide">
            {date}
          </div>
        </div>

        {/* Background badge */}
        <div className="w-72 h-12 left-[-15.36px] top-[61.68px] absolute origin-top-left rotate-[-10deg] inline-flex  items-center gap-2.5 opacity-70">
          <div
            className={
              status === "BOKAD"
                ? "w-72 self-stretch origin-top-left -rotate-3 opacity-50 text-center  text-green-600 text-4xl font-semibold  uppercase leading-4 tracking-wide"
                : "w-72 self-stretch origin-top-left -rotate-3 opacity-50 text-center  text-blue-600 text-4xl font-semibold  uppercase leading-4 tracking-wide"
            }
          >
            {status}
          </div>
        </div>

        {/* Right-side Badge */}
        <div className=" px-2.5 py-1 left-50 top-12 absolute rounded-xl  flex flex-col justify-start items-start">
          <Badge
            variant={status === "BOKAD" ? "default" : "outline"}
            className={
              status === "BOKAD"
                ? " text-green-800 bg-green-100 border-green-200 text-xs font-bold  uppercase leading-4 tracking-wide"
                : " text-blue-800 bg-blue-100 border-blue-200 text-xs font-bold  uppercase leading-4 tracking-wide"
            }
          >
            {status}
          </Badge>
        </div>
      </CardTitle>

      <CardContent className="self-stretch pt-4 inline-flex flex-col justify-start items-start">
        {/* event Type */}
        <div className="self-stretch h-6 inline-flex justify-start items-center gap-1.5">
          <UtensilsCrossed className="size-4 text-stone-700" />
          <div className=" text-stone-700 text-base font-normal  leading-6">
            {type}
          </div>
        </div>
        {/* guest */}
        <div className="self-stretch h-6 inline-flex justify-start items-center gap-1.5">
          <Users className="size-4  text-stone-700" />
          <div className=" text-stone-700 text-base font-normal  leading-6">
            {guests}
          </div>
        </div>

        {/* menu */}

        <div className="self-stretch h-6 inline-flex justify-start items-center gap-1.5">
          <BookOpen className="size-4  text-stone-700" />
          <div className=" text-stone-700 text-base font-normal  leading-6">
            {menu}
          </div>
        </div>

        {/* price */}

        <div className="self-stretch h-6 inline-flex justify-start items-center gap-1.5">
          <Banknote className="size-4 text-stone-700" />

          <div className=" text-stone-700 text-base font-normal  leading-6">
            {price}
          </div>
        </div>
      </CardContent>

      {/* Card footer */}
      <CardFooter className="self-stretch pt-4 inline-flex justify-center items-start gap-3">
        <Button
          onClick={onVisa}
          variant={"default"}
          className=" h-12 flex-1 rounded-lg"
        >
          <Eye className="size-5  text-yellow-900" />
          Visa bokning
        </Button>

        <Button
          onClick={onChatta}
          variant={"outline"}
          className=" h-12 flex-1 rounded-lg"
        >
          <MessageSquare className="size-5  text-yellow-900" />
          Chatta
        </Button>
      </CardFooter>
    </Card>
  );
}
