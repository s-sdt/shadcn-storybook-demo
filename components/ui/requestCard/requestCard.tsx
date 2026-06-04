import {
  BookOpen,
  Cake,
  Calendar,
  CircleCheck,
  CircleUserRound,
  CircleX,
  Clock3,
  Eye,
  MapPin,
  Users,
} from "lucide-react";
import { Card, CardContent, CardFooter, CardTitle } from "../card/card";
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
    <Card className="self-stretch p-6 inline-flex flex-col justify-start items-start gap-2">
      <CardTitle className="w-full  relative  border-b border-stone-300/50 inline-flex flex-col justify-start items-start overflow-hidden ">
        <div className="flex flex-col ">
          {/* event */}
          <div className=" inline-flex justify-start items-start">
            <p className=" text-stone-900 text-xl font-semibold  leading-7 tracking-wide">
              {type}
            </p>
          </div>

          {/* name */}
          <div className=" inline-flex justify-start items-center gap-2">
            <CircleUserRound className="size-4 opacity-50" />

            <Button
              variant={"link"}
              className="text-center justify-center text-zinc-600 text-sm font-semibold  underline leading-5"
            >
              {uid}
            </Button>
          </div>
          {/* date */}
          <div className=" inline-flex justify-start items-center gap-2">
            <Calendar className="size-4" />
            <div className=" text-stone-700 text-sm font-normal  leading-4 tracking-wide">
              {date}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          {/* Badge */}
          <div className=" p-2.5 left-[202.70px] top-0 absolute flex justify-start items-center overflow-hidden">
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
                  ? "text-green-800 bg-green-100 border-green-200 text-xs font-bold  uppercase leading-4 tracking-wide"
                  : status === "SKICKAD"
                    ? "text-red-800 bg-yellow-100 border-yellow-200 text-xs font-bold  uppercase leading-4 tracking-wide"
                    : "text-red-800 bg-red-100 border-red-200 text-xs font-bold  uppercase leading-4 tracking-wide"
              }
            >
              {status}
            </Badge>
          </div>

          {/* hide/unhide button */}
          <Button variant={"ghost"} onClick={onHide}>
            <Eye className="size-4 left-[262.99px] top-[55.09px] absolute opacity-50" />
          </Button>
          {/* Background badge */}
          <div className="w-full h-12 right-[17%] top-[61.68px] absolute origin-top-left rotate-[-10deg] inline-flex justify-center items-center gap-2.5 opacity-70">
            <div
              className={
                status === "BOKAD"
                  ? "self-stretch origin-top-left -rotate-3 opacity-30 text-center justify-center  text-4xl font-semibold  uppercase leading-4 tracking-wide  text-green-600"
                  : status === "SKICKAD"
                    ? " self-stretch origin-top-left -rotate-3 opacity-30 text-center justify-center  text-4xl font-semibold  uppercase leading-4 tracking-wide  text-yellow-600"
                    : "self-stretch origin-top-left -rotate-3 opacity-30 text-center justify-center  text-4xl font-semibold  uppercase leading-4 tracking-wide  text-red-600"
              }
            >
              {status}
            </div>
          </div>
        </div>
      </CardTitle>

      <CardContent className="self-stretch pt-4 inline-flex flex-col justify-start items-start">
        {/* Guest */}
        <div className="self-stretch inline-flex justify-start items-center gap-3">
          <Users className="size-4" />
          <div className="flex-1 flex flex-col ">
            <span className="text-stone-700 text-xs font-normal uppercase leading-4 tracking-wide">
              Gäst
            </span>
            <span className="text-stone-900 text-sm font-semibold leading-4 tracking-wide">
              {number_of_guests}
            </span>
          </div>
        </div>
        {/* Meny */}

        <div className="self-stretch inline-flex justify-start items-center mt-2 gap-3">
          <BookOpen className="size-4" />
          <div className="flex-1 flex flex-col ">
            <span className="text-stone-700 text-xs font-normal uppercase leading-4 tracking-wide">
              Meny
            </span>
            <span className="text-stone-900 text-sm font-semibold leading-4 tracking-wide">
              {variant},{""}
              {foodType.join(", ")}
            </span>
          </div>
        </div>

        {/* Tillfälle */}

        <div className="self-stretch inline-flex justify-start items-center mt-2 gap-3">
          <Cake className="size-4" />
          <div className="flex-1 flex flex-col ">
            <span className="text-stone-700 text-xs font-normal uppercase leading-4 tracking-wide">
              Tillfälle
            </span>
            <span className="text-stone-900 text-sm font-semibold leading-4 tracking-wide">
              {occasion}
            </span>
          </div>
        </div>

        {/* Location */}
        <div className=" w-full mt-4 rounded-sm outline outline-offset-[-1.04px] outline-yellow-800 overflow-hidden inline-flex flex-col justify-start items-start">
          <div className="w-full p-2.5 inline-flex items-center gap-2">
            <MapPin className="size-4 " />
            <div className="inline-flex flex-col justify-start items-start">
              <div className="justify-center text-stone-900 text-xs font-bold  capitalize leading-4 tracking-wide">
                {municipality} ({distance.toFixed(1)} km)
              </div>
              <div className="justify-center text-stone-900 text-[10.40px] font-semibold  leading-4 tracking-wide">
                {address}
              </div>
            </div>
          </div>
          <img
            className="w-full object-cover"
            src="https://placehold.co/304x122"
          />
        </div>
      </CardContent>
      <CardFooter className="self-stretch pt-4 inline-flex justify-center items-start gap-2">
        <Button variant={"default"} className="flex-1 rounded-lg" asChild>
          <a href={`/workspace/chef/requests/${id}`}>Visa Detaljer</a>
        </Button>
      </CardFooter>
    </Card>
  );
}
