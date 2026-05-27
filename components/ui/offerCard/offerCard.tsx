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
};

export function OfferCard({
  customerName,
  date,
  status,
  type,
  guests,
  menu,
  price,
}: OfferCardProps) {
  return (
    // <div className="self-stretch h-80 p-6 inline-flex flex-col justify-start items-start gap-2">
    <Card className="self-stretch h-80 p-6 inline-flex flex-col justify-start items-start gap-2">
      <CardTitle className="w-72 h-24 py-4 relative bg-white border-b border-yellow-800 inline-flex flex-col justify-start items-start overflow-hidden">
        <div className="size- inline-flex justify-start items-start gap-11">
          <p className="justify-center text-stone-900 text-xl font-medium font-['Inter'] leading-7 tracking-wide">
            {customerName}
          </p>
        </div>
        <div className="size- py-1 left-0 top-10.75 absolute inline-flex justify-start items-center gap-2">
          {/* <div className="size-3.5 bg-stone-700" /> */}
          <Calendar className="w-3 h-3" />
          <div className="justify-center text-stone-700 text-sm font-normal font-['Inter'] leading-4 tracking-wide">
            {date}
          </div>
        </div>
        <div className="w-72 h-12 left-[-15.36px] top-[61.68px] absolute origin-top-left rotate-[-10deg] inline-flex justify-center items-center gap-2.5 opacity-70">
          <div
            className={
              status === "BOKAD"
                ? "w-72 self-stretch origin-top-left -rotate-3 opacity-50 text-center justify-center text-green-600 text-4xl font-semibold font-['Inter'] uppercase leading-4 tracking-wide"
                : "w-72 self-stretch origin-top-left -rotate-3 opacity-50 text-center justify-center text-blue-600 text-4xl font-semibold font-['Inter'] uppercase leading-4 tracking-wide"
            }
          >
            {status}
          </div>
        </div>
        <div className="size- px-2.5 py-1 left-50 top-12.25 absolute rounded-xl  flex flex-col justify-start items-start">
          <Badge
            // variant={status === "BOKAD" ? "default" : "outline"}
            // className="justify-center text-green-800 text-[10px] font-bold font-['Inter'] uppercase leading-4 tracking-wide"
            variant={status === "BOKAD" ? "default" : "outline"}
            className={
              status === "BOKAD"
                ? "justify-center text-green-800 bg-green-100 border-green-200 text-[10px] font-bold font-['Inter'] uppercase leading-4 tracking-wide"
                : "justify-center text-blue-800 bg-blue-100 border-blue-200 text-[10px] font-bold font-['Inter'] uppercase leading-4 tracking-wide"
            }
          >
            {status}
          </Badge>
        </div>
      </CardTitle>

      <CardContent className="self-stretch pt-4 inline-flex flex-col justify-start items-start">
        <div className="self-stretch h-6 inline-flex justify-start items-center gap-1.5">
          <UtensilsCrossed className="w-3 h-3.5" />
          <div className="justify-center text-stone-700 text-base font-normal font-['Inter'] leading-6">
            {type}
          </div>
        </div>
        {/* guest */}

        <div className="self-stretch h-6 inline-flex justify-start items-center gap-1.5">
          <Users className="w-3 h-3.5" />
          <div className="justify-center text-stone-700 text-base font-normal font-['Inter'] leading-6">
            {guests}
          </div>
        </div>

        {/* menu */}

        <div className="self-stretch h-6 inline-flex justify-start items-center gap-1.5">
          <BookOpen className="w-3 h-3.5" />
          <div className="justify-center text-stone-700 text-base font-normal font-['Inter'] leading-6">
            {menu}
          </div>
        </div>

        {/* price */}

        <div className="self-stretch h-6 inline-flex justify-start items-center gap-1.5">
          <div className="size-4 relative overflow-hidden">
            <Banknote className="w-3 h-3.5 left-[0.50px] top-[2.50px] absolute" />
          </div>
          <div className="justify-center text-stone-700 text-base font-normal font-['Inter'] leading-6">
            {price}
          </div>
        </div>
        {/* </div> */}
      </CardContent>
      <CardFooter className="self-stretch pt-4 inline-flex justify-center items-start gap-3">
        <Button
          variant={"default"}
          className="w-36 h-12 relative bg-yellow-500 rounded-2xl"
        >
          <Eye className="w-5 h-3 left-[9.52px] top-[19.55px] absolute  text-yellow-900" />
          <div className="left: 34.69px top-3 absolute text-center justify-center text-yellow-900 text-base font-semibold font-['Inter'] leading-6">
            Visa bokning
          </div>
        </Button>

        <Button className="w-36 h-12 relative rounded-2xl outline outline-offset: -1px outline-stone-500">
          <MessageSquare className="size-4 left-[35.33px] top-[17.47px] absolute  text-yellow-900" />
          <div className="left-[59.66px] top: 12px absolute text-center justify-center text-yellow-800 text-base font-semibold font-['Inter'] leading-6">
            Chatta
          </div>
        </Button>
      </CardFooter>
    </Card>
    // </div>
  );
}
