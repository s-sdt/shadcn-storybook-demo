import {
  BookOpen,
  Cake,
  Calendar,
  CircleCheck,
  CircleUserRound,
  CircleX,
  Clock,
  Clock3,
  Eye,
  EyeOff,
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
    <Card className="w-96  p-6 relative bg-white rounded-lg outline outline-offset-[-1.04px] outline-stone-300 inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
      <CardTitle className="self-stretch h-24 relative rounded-sm border-b border-stone-300/50 inline-flex justify-between items-start">
        <div
          data-status={status}
          className="w-28 h-11 p-2.5 left-[202.70px] top-0 absolute flex justify-start items-center overflow-hidden"
        >
          {status === "BOKAD" ? (
            <CircleCheck className="size-5  text-emerald-500" />
          ) : status === "SKICKAD" ? (
            <Clock3 className="size-5  text-yellow-500" />
          ) : (
            <CircleX className="size-5  text-red-500" />
          )}

          <Badge
            // variant={status === "BOKAD" ? "default" : "outline"}
            // className="justify-center text-green-800 text-[10px] font-bold font-['Inter'] uppercase leading-4 tracking-wide"
            // variant={status === "BOKAD" ? "default" : "outline"}
            // className={
            //   status === "BOKAD"
            //     ? "justify-center text-green-800 bg-green-100 border-green-200 text-[10px] font-bold font-['Inter'] uppercase leading-4 tracking-wide"
            //     : "justify-center text-blue-800 bg-blue-100 border-blue-200 text-[10px] font-bold font-['Inter'] uppercase leading-4 tracking-wide"
            // }
            variant="outline"
            className={
              status === "BOKAD"
                ? "text-green-800 bg-green-100 border-green-500 text-[10px] font-bold font-['Inter'] uppercase leading-4 tracking-wide"
                : status === "SKICKAD"
                  ? "text-red-500 bg-yellow-100 border-yellow-500 text-[10px] font-bold font-['Inter'] uppercase leading-4 tracking-wide"
                  : "text-red-500 bg-red-100 border-red-500 text-[10px] font-bold font-['Inter'] uppercase leading-4 tracking-wide"
            }
          >
            {status}
          </Badge>
          {/* //////////// */}
          {/* <div className="size- px-3 py-1 relative bg-green-100 rounded-xl inline-flex flex-col justify-start items-start overflow-hidden">
            <div className="left-[23.39px] top-[2.08px] absolute text-center justify-center text-emerald-800 text-xs font-semibold font-['Inter'] leading-5">
              {status} badge
            </div>
          </div> */}
          {/* ////////////// */}
        </div>
        <div className="h-24 left-0 top-0 absolute inline-flex flex-col justify-start items-start gap-1">
          <div className="self-stretch justify-center text-stone-900 text-xl font-semibold font-['Inter'] leading-7 tracking-wide">
            {type}
          </div>
          <div className="self-stretch inline-flex justify-start items-center overflow-hidden">
            <CircleUserRound className="w-3.5 h-4 opacity-50" />
            <div className="size- px-1 bg-white rounded-xl inline-flex flex-col justify-start items-start overflow-hidden">
              <Button
                variant={"link"}
                className="text-center justify-center text-zinc-600 text-sm font-semibold font-['Inter'] underline leading-5"
              >
                {uid}
              </Button>
            </div>
          </div>
          <div className="self-stretch h-7 inline-flex justify-start items-center gap-1.5">
            <Calendar className="w-3.5 h-4" />
            <div className="justify-center text-stone-700 text-sm font-normal font-['Inter'] leading-4 tracking-wide">
              {date}
            </div>
          </div>
        </div>
        <Button variant={"ghost"} onClick={onHide}>
          <EyeOff className="w-6 h-5 left-[262.99px] top-[55.09px] absolute opacity-50" />
        </Button>

        <div className="w-72 h-12 left-[-15.36px] top-[61.68px] absolute origin-top-left rotate-[-10deg] inline-flex justify-center items-center gap-2.5 opacity-70">
          <div
            className={
              status === "BOKAD"
                ? "w-80 self-stretch origin-top-left -rotate-3 opacity-30 text-center justify-center text-Accents-Green text-4xl font-semibold font-['Inter'] uppercase leading-4 tracking-wide  text-green-600"
                : status === "SKICKAD"
                  ? "w-80 self-stretch origin-top-left -rotate-3 opacity-30 text-center justify-center text-Accents-Green text-4xl font-semibold font-['Inter'] uppercase leading-4 tracking-wide  text-yellow-600"
                  : "w-80 self-stretch origin-top-left -rotate-3 opacity-30 text-center justify-center text-Accents-Green text-4xl font-semibold font-['Inter'] uppercase leading-4 tracking-wide  text-red-600"
            }
          >
            {status}
          </div>
        </div>
      </CardTitle>

      <CardContent className="w-80  pl-1 pt-4 inline-flex flex-col justify-start items-start">
        {/* Guest */}
        <div className="self-stretch inline-flex justify-start items-center gap-3">
          <Users className="w-5 h-2.5" />
          <div className="flex-1 h-10 inline-flex flex-col justify-start items-start">
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="justify-center text-stone-700 text-xs font-bold font-['Inter'] uppercase leading-4 tracking-wide">
                Gäst
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="justify-center text-stone-900 text-sm font-semibold font-['Inter'] leading-4 tracking-wide">
                {number_of_guests}
              </div>
            </div>
          </div>
        </div>
        {/* Meny */}
        <div className="size-lf-stretch inline-flex justify-start items-center gap-3">
          <BookOpen className="w-4 h-3" />
          <div className="flex-1 h-10 inline-flex flex-col justify-start items-start">
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="justify-center text-stone-700 text-xs font-bold font-['Inter'] uppercase leading-6 tracking-tight">
                {/*  Meny */}
                Meny
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="justify-center text-stone-900 text-xs font-bold font-['Inter'] leading-4 tracking-wide">
                {/* {menu} */}
                {variant},{""}
                {foodType.join(", ")}
              </div>
            </div>
          </div>
        </div>
        {/* Tillfälle */}
        <div className="size-lf-stretch inline-flex justify-start items-center gap-3">
          <Cake className="w-3.5 h-4" />
          <div className="size- inline-flex flex-col justify-start items-start">
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="w-16 justify-center">
                <span className="text-stone-700 text-[10.40px] font-bold font-['Inter'] uppercase leading-4 tracking-wide">
                  Tillfälle
                </span>
                <span className="text-stone-700 text-[10.40px] font-medium font-['Inter'] uppercase leading-4 tracking-wide">
                  {" "}
                </span>
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="justify-center text-stone-900 text-sm font-semibold font-['Inter'] leading-4 tracking-wide">
                {occasion}
              </div>
            </div>
          </div>
        </div>
        {/* Location */}
        <div className=" w-full mt-3 rounded-sm outline outline-offset-[-1.04px] outline-yellow-800 overflow-hidden inline-flex flex-col justify-start items-start">
          <div className="w-80 p-2.5 inline-flex items-center gap-2">
            <MapPin className="w-4 h-5 shrink-0" />
            <div className="inline-flex flex-col justify-start items-start">
              <div className="justify-center text-stone-900 text-xs font-bold font-['Inter'] capitalize leading-4 tracking-wide">
                {municipality} ({distance.toFixed(1)} km)
              </div>
              <div className="justify-center text-stone-900 text-[10.40px] font-semibold font-['Inter'] leading-4 tracking-wide">
                {address}
              </div>
            </div>
          </div>
          <img
            className="w-full h-32 object-cover"
            src="https://placehold.co/304x122"
          />
        </div>
      </CardContent>
      <CardFooter className="w-full rounded-lg shadow-[0px_1.0394999980926514px_2.0789999961853027px_0px_rgba(0,0,0,0.05)] inline-flex justify-center items-center gap-2">
        <Button className="w-full" asChild>
          <a href={`/workspace/chef/requests/${id}`}>Visa Detaljer</a>
        </Button>
      </CardFooter>
    </Card>
  );
}
