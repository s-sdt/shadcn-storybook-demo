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
    // <div className="self-stretch h-80 p-6 inline-flex flex-col justify-start items-start gap-2">
    <Card className="h-80 p-6 inline-flex flex-col gap-2">
      <CardTitle className="py-4 inline-flex flex-col">
        <div className="flex justify-between">
          <p className="text-stone-900 text-xl font-medium tracking-wide">
            {customerName}
          </p>
          <Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">
            {status}
          </Badge>
        </div>
        <div className="inline-flex items-center gap-2">
          {/* <div className="size-3.5 bg-stone-700" /> */}
          <Calendar className="w-3 h-3" />
          <div className="text-stone-700 text-sm tracking-wide">{date}</div>
        </div>
      </CardTitle>

      <CardContent className="inline-flex flex-col gap-0.5">
        <div className="inline-flex gap-1.5 items-center">
          <UtensilsCrossed className="w-3 h-3.5" />
          <div className="text-stone-700">{type}</div>
        </div>
        {/* guest */}

        <div className="inline-flex gap-1.5 items-center">
          <Users className="w-3 h-3.5" />
          <div className="text-stone-700">{guests}</div>
        </div>

        {/* menu */}

        <div className="inline-flex gap-1.5 items-center">
          <BookOpen className="w-3 h-3.5" />
          <div className="text-stone-700">{menu}</div>
        </div>

        {/* price */}
        <div className="inline-flex gap-1.5 items-center">
          <Banknote className="w-3 h-3.5" />
          <span className="text-stone-700">{price}</span>
        </div>
      </CardContent>
      <CardFooter className="pt-4 inline-flex gap-3">
        <Button className="w-36 h-12 rounded-2xl outline-stone-500">
          <Eye className="text-yellow-900" />
          <div className="text-yellow-900 font-semibold">Visa bokning</div>
        </Button>

        <Button className="w-36 h-12 rounded-2xl outline-stone-500">
          <MessageSquare className="text-yellow-900" />
          <div className="text-yellow-800 font-semibold">Chatta</div>
        </Button>
      </CardFooter>
    </Card>
  );
}
