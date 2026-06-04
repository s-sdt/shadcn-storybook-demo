import {
  BookOpen,
  Cake,
  Calendar,
  CircleCheck,
  CircleUserRound,
  CircleX,
  Clock3,
  EyeOff,
  MapPin,
  Users,
} from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../card/card";
import { Button } from "../button/button";
import { Badge } from "../badge/badge";

export type requestCardprops = {
  id: string; // visa Detaljer
  uid: string; // customer
  type: string; // lunch
  date: string;
  status: "BOKAD" | "SKICKAD" | "INAKTIV";
  occasion: string;
  number_of_guests: string;
  foodType: string[]; // local
  variant: string; //multiple
  municipality: string;
  distance: number;
  address: string;
  onHide?: () => void;
};

export function RequestCard({
  id,
  uid,
  type,
  date,
  status,
  occasion,
  number_of_guests,
  foodType,
  variant,
  distance,
  municipality,
  address,
  onHide,
}: requestCardprops) {
  return (
    <Card className="w-96 p-6 inline-flex flex-col">
      <CardHeader className="border-b border-stone-300/50 flex flex-col justify-start items-start gap-2 pb-3">
        <div className="self-stretch flex justify-between items-start gap-4">
          <div className="inline-flex flex-col justify-start items-start gap-2">
            <CardTitle className="text-stone-900 text-xl font-semibold tracking-wide">
              {type}
            </CardTitle>
            <div className="flex flex-col gap-1">
              <div className="inline-flex">
                <CircleUserRound className="w-3.5 h-4" />
                <Button
                  variant="link"
                  className="h-4 text-zinc-600 text-sm"
                  >
                  {uid}
                </Button>
              </div>
              <div className="inline-flex gap-1.5">
                <Calendar className="w-3.5 h-4" />
                <div className="text-stone-700 text-sm font-normal">
                  {date}
                </div>
              </div>
            </div>
          </div>
          <div className="inline-flex justify-start items-start gap-2">
            <div
              data-status={status}
              className="h-11 p-2.5 inline-flex justify-start items-center overflow-hidden"
            >
              {status === "BOKAD" ? (
                <CircleCheck className="size-5  text-emerald-500" />
              ) : status === "SKICKAD" ? (
                <Clock3 className="size-5  text-yellow-500" />
              ) : (
                <CircleX className="size-5  text-red-500" />
              )}

              <Badge
                variant="outline"
                className={
                  status === "BOKAD"
                    ? "text-green-800 bg-green-100 border-green-500 text-[10px] font-bold uppercase tracking-wide"
                    : status === "SKICKAD"
                      ? "text-red-500 bg-yellow-100 border-yellow-500 text-[10px] font-bold uppercase tracking-wide"
                      : "text-red-500 bg-red-100 border-red-500 text-[10px]  uppercase tracking-wide"
                }
              >
                {status}
              </Badge>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex flex-col gap-1">
        {/* Guest */}
        <div className="flex items-center gap-3">
          <Users className="w-4 h-3" />
          <div className="flex flex-col">
            <div className="text-stone-900 text-xs font-semibold tracking-wide">
              {number_of_guests}
            </div>
          </div>
        </div>
        {/* Meny */}
        <div className="flex items-center gap-3">
          <BookOpen className="w-4 h-3" />
          <div className="flex flex-col">
            <div className="text-stone-900 text-xs font-semibold tracking-wide">
              {/* {menu} */}
              {variant}
            </div>
            <div className="text-stone-900 text-xs font-semibold tracking-wide">
              {/* {menu} */}
              {foodType.join(", ")}
            </div>
          </div>
        </div>
        {/* Tillfälle */}
        <div className="flex items-center gap-3">
          <Cake className="w-4 h-3" />
          <div className="text-stone-900 text-xs font-semibold tracking-wide">
            {occasion}
          </div>
        </div>
        {/* Location */}
        <div className="flex items-center gap-3">
          <MapPin className="w-4 h-3" />
          <div className="flex flex-col">
            <div className="justify-center text-stone-900 text-xs font-semibold capitalize tracking-wide">
              {municipality} ({distance.toFixed(1)} km)
            </div>
            <div className="justify-center text-stone-900 text-xs font-semibold tracking-wide">
              {address}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" asChild>
          <a href={`/workspace/chef/requests/${id}`}>Visa Detaljer</a>
        </Button>
        <Button variant="ghost" onClick={onHide}>
          <EyeOff className="w-6 h-5 opacity-50" />
        </Button>
      </CardFooter>
    </Card>
  );
}
