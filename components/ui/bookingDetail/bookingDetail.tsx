import {
  Calendar,
  CircleCheck,
  CircleX,
  Clock3,
  MoveLeft,
  ShieldCheck,
  Users,
  X,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "../card/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../accordion";
import { Button } from "../button/button";
import { Badge } from "../badge/badge";

export type BookingStates =
  | "waiting_for_payment"
  | "pending_payment"
  | "confirmed"
  | "cancel_pending_refund"
  | "cancelled"
  | "cancellation_failed";

export type BookingDetailProps = {
  requestId: string; //BookingId
  title: string;
  status: BookingStates;
  eventDate: string;
  number_of_guests: number;
  totalAmount: string;
  basePrice: string;
  pricePerGuest: string;
  weekdayModifier: string;
  weekdayName?: string;
  platformFee: string;
  chefFee: string;
  createdDate: string;
  completedDate?: string;
  bookingDesc: string;
  missingKitchenArticles: string[];
  onClick?: () => void;
  onCancel?: () => void;
};

//  map each booking status to its display label, badge style, and icon
const statusStyle: Record<
  BookingDetailProps["status"],
  { label: string; className: string; icon: React.ReactNode }
> = {
  confirmed: {
    label: "Bekräftad",
    className:
      "h-auto w-fit px-3 py-1 bg-emerald-100 text-green-800 rounded-xl inline-flex justify-start items-start",
    icon: <CircleCheck className=" size-5 text-emerald-500" />,
  },
  cancelled: {
    label: "Inställd",
    className:
      "h-auto w-fit px-3 py-1 bg-red-100 text-red-800 rounded-xl inline-flex justify-start items-start",
    icon: <CircleX className="size-5  text-red-500" />,
  },
  pending_payment: {
    label: "Väntar på betalning",
    className:
      "h-auto w-fit px-3 py-1 bg-yellow-100 text-yellow-800 rounded-xl inline-flex justify-start items-start",
    icon: <Clock3 className="size-5  text-yellow-500" />,
  },
  waiting_for_payment: {
    label: "Väntar på betalning",
    className:
      "h-auto w-fit px-3 py-1 bg-yellow-100 text-yellow-800 rounded-xl inline-flex justify-start items-start",
    icon: <Clock3 className="size-5  text-yellow-500" />,
  },
  cancel_pending_refund: {
    label: "Avbokning pågår",
    className:
      "h-auto w-fit px-3 py-1 bg-orange-100 text-orange-800 rounded-xl inline-flex justify-start items-start",
    icon: <CircleX className="size-5  text-red-500" />,
  },
  cancellation_failed: {
    label: "Avbokning misslyckades",
    className:
      "h-auto w-fit px-3 py-1 bg-red-100 text-red-800 rounded-xl inline-flex justify-start items-start",
    icon: <CircleX className="size-5  text-red-500" />,
  },
};

export function BookingDetail({
  requestId,
  title,
  status,
  eventDate,
  number_of_guests,
  totalAmount,
  basePrice,
  pricePerGuest,
  weekdayModifier,
  weekdayName,
  platformFee,
  chefFee,
  createdDate,
  completedDate,
  bookingDesc,
  missingKitchenArticles,
  onClick,
  onCancel,
}: BookingDetailProps) {
  // Accordion item in a Card component.
  const item = [
    {
      value: "plans",
      trigger: (
        <div className="flex flex-1 justify-between pr-2 font-semibold">
          <span>Total</span>
          <span>{totalAmount}</span>
        </div>
      ),
      content: (
        <div className="flex flex-col gap-2 text-sm pt-2">
          {/* Base Price */}
          <div className="inline-flex justify-between items-start">
            <div className="text-zinc-600 text-base font-normal">
              Baspris
            </div>
            <div className="text-stone-900 text-base font-medium">
              {basePrice}
            </div>
          </div>

          {/* Price per guest*/}
          <div className="self-stretch inline-flex justify-between items-start">
            <div className="text-zinc-600 text-base font-normal">
              Pris per gäst
            </div>
            <div className="text-stone-900 text-base font-medium">
              {pricePerGuest}
            </div>
          </div>

          {/* weekday Modifier*/}
          <div className="self-stretch inline-flex justify-between items-start">
            <div className="text-zinc-600 text-base font-normal">
              Veckodagsmodifierare
              <br />
              {weekdayName && `(${weekdayName})`}
            </div>
            <div className="self-stretch pl-2.5 inline-flex flex-col justify-start items-end">
              <div className="text-right text-stone-900 text-base font-medium">
                {weekdayModifier}{" "}
              </div>
              <div className="text-right text-zinc-600 text-[7px] font-normal uppercase">
                (APPLICERAS PÅ PER-GÄST DELEN AV PRISET)
              </div>
            </div>
          </div>

          {/* Total Amount*/}
          <div className="self-stretch pt-4 border-t border-stone-200 inline-flex justify-between items-center">
            <div className="text-stone-900 text-base font-semibold">
              Total
            </div>
            <div className="text-stone-900 text-base font-semibold">
              {totalAmount}
            </div>
          </div>

          {/* platform Fee */}
          <div className="self-stretch inline-flex justify-between items-start">
            <div className="text-zinc-600 text-base font-normal">
              Plattformsavgift
            </div>
            <div className="text-zinc-600 text-base font-medium">
              {platformFee}
            </div>
          </div>

          {/* chef Fee */}
          <div className="self-stretch pt-6 border-t border-stone-200 inline-flex justify-between items-center">
            <div className="text-stone-900 text-base font-normal">
              Kockens arvode
            </div>
            <div className="text-yellow-800 text-base font-normal">
              {chefFee}
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <>
      <div className="w-96 h-314.25 bg-stone-50 inline-flex flex-col justify-start items-start">
        {/* Header */}
        <div className="w-96 h-16 px-4 bg-stone-50 border-b border-stone-200 inline-flex items-center gap-4">
          <Button variant={"ghost"} onClick={onClick} className="p-2">
            <MoveLeft className="text-yellow-500 text-3xl size-4" />
          </Button>
          <div className="text-stone-900 text-xl font-semibold tracking-wide">
            Booking Detail
          </div>
        </div>
        {/* Status + Booking ID */}
        <div className="self-stretch h-20 inline-flex justify-between items-center">
          <div className=" inline-flex justify-start items-center">
            {statusStyle[status].icon}
            <Badge className={statusStyle[status].className}>
              {statusStyle[status].label}
            </Badge>
          </div>
          <div className="w-28 inline-flex flex-col justify-start items-end gap-[0.50px]">
            <div className="text-right text-zinc-600 text-xs font-normal uppercase tracking-wide">
              BOOKING ID
            </div>
            <div className="text-right text-stone-900 text-base font-medium">
              {requestId.slice(0, 6)}...
            </div>
          </div>
        </div>

        {/* Main Card */}
        <Card className="self-stretch px-6 pt-8 pb-6 bg-white rounded-lg shadow-[0px_4px_20px_0px_rgba(0,0,0,0.04)] outline -outline-offset-1 outline-gray-200 inline-flex flex-col justify-start items-start gap-6">
          {/* cardHeader */}
          <CardHeader className="self-stretch border-b border-gray-200 inline-flex flex-col justify-start items-start gap-1">
            <div className="self-stretch justify-center text-stone-900 text-3xl font-semibold">
              {title}
            </div>
            <div className="self-stretch inline-flex justify-start items-center gap-1.5">
              <div className="size- inline-flex flex-col justify-center items-center">
                <Calendar className="w-3.5 h-4" />
              </div>
              <div className="size- inline-flex flex-col justify-start items-start gap-0.5">
                <div className="justify-center text-stone-900 text-base font-normal">
                  {eventDate}
                </div>
              </div>
            </div>
            <div className="self-stretch inline-flex justify-start items-center gap-1.5">
              <div className="w-4 pr-3 pt-0.5 inline-flex flex-col justify-start items-start">
                <Users className="w-5 h-3.5" />
              </div>
              <div className="size- inline-flex flex-col justify-start items-start gap-0.5">
                <div className="justify-center text-stone-900 text-base font-normal f">
                  {number_of_guests} Personer
                </div>
              </div>
            </div>
          </CardHeader>
          {/* cardCotent */}
          <CardContent className="self-stretch p-6 bg-white rounded-lg shadow-[0px_4px_20px_0px_rgba(211,197,172,0.31)] outline -outline-offset-1 outline-stone-200 inline-flex flex-col justify-start items-start gap-1">
            <div className="self-stretch justify-center text-yellow-800 text-xs font-normal uppercase tracking-[2.40px]">
              PRISDETALJER
            </div>
            <div className="self-stretch justify-center text-zinc-600 text-sm font-light">
              Detaljerad prisuppdelning för denna bokning
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              <div className="self-stretch  px-3.5 py-2.5 bg-white rounded-sm inline-flex justify-center items-center">
                <div className="flex-1 justify-center text-stone-900 text-base font-semibold">
                  {/* {totalAmount} */}
                  <Accordion type="single" collapsible defaultValue="plans">
                    {item.map((item) => (
                      <AccordionItem key={item.value} value={item.value}>
                        <AccordionTrigger>{item.trigger}</AccordionTrigger>
                        <AccordionContent>{item.content}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>

                <div className="size- px-2 py-2.5 flex justify-start items-center gap-2.5 overflow-hidden">
                  <div className="size-6 overflow-hidden" />
                </div>
              </div>
            </div>
            <div className="self-stretch h-11 p-3 bg-stone-200/10 inline-flex justify-center items-center">
              <div className="size- pr-2 inline-flex flex-col justify-start items-start">
                <ShieldCheck className="w-3.5 h-4" />
              </div>
              <div className="justify-center text-gray-600 text-sm font-normal">
                Secured by Stripe Payments
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Booking Description +timeline */}
        <div className="self-stretch  mt-8 p-6 bg-white rounded-lg shadow-[0px_4px_20px_0px_rgba(0,0,0,0.04)] outline -outline-offset-1 outline-stone-200 inline-flex flex-col justify-start items-start gap-8">
          <div className="self-stretch p-6 bg-white rounded-xl border-b border-gray-200 flex flex-col justify-start items-start gap-2">
            <div className="self-stretch justify-center text-yellow-800 text-xs font-normal uppercase tracking-[2.40px]">
              Om bokning
            </div>
            <div className="self-stretch justify-center text-zinc-600 text-base font-normal">
              {bookingDesc}
            </div>
          </div>
          <div className="size- pl-6 border-l border-stone-200 flex flex-col justify-start items-start gap-10">
            <div className="w-72 flex justify-start items-start gap-4">
              <div className="size-2.5 mt-1 bg-blue-500 rounded-xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] border-2 border-blue-200 shrink-0" />
              <div className="flex flex-col justify-start items-start gap-2">
                <div className="self-stretch justify-center text-stone-900 text-base font-semibold">
                  Bokning skapad
                </div>
                <div className="self-stretch justify-center text-zinc-600 text-sm font-normal">
                  {createdDate}
                </div>
              </div>
            </div>
            <div className="w-72 flex justify-start items-start gap-4">
              <div className="size-2.5 mt-1 bg-green-500 rounded-xl border-2 border-emerald-100 shrink-0" />
              <div className="flex flex-col justify-start items-start gap-2">
                <div className="self-stretch justify-center text-stone-900 text-base font-semibold">
                  Betalning slutförd
                </div>
                <div className="self-stretch justify-center text-zinc-600 text-sm font-normal">
                  {completedDate}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* SAKNADE KÖKSDETALJER */}
        <div className="self-stretch mt-8 p-6 bg-white rounded-xl shadow-[0px_4px_12px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-gray-200 inline-flex flex-col justify-start items-start gap-2">
          <div className="self-stretch justify-center text-yellow-800 text-xs font-normal uppercase tracking-[2.40px]">
            SAKNADE KÖKSDETALJER
          </div>
          <div className="self-stretch justify-center text-gray-600 text-base font-normal">
            {missingKitchenArticles.map((item, i) => (
              <div key={i}>{item}</div>
            ))}
          </div>
        </div>

        {/* dokme */}
        <div className="self-stretch  mt-auto p-4 bg-white border-t border-stone-200 inline-flex flex-col justify-start items-start gap-3">
          <div className="w-full flex flex-col justify-start items-center gap-4">
            <div className="w-full h-12 bg-orange-50 rounded-2xl outline -outline-offset-1 outline-red-700/10 inline-flex justify-center items-center gap-2">
              <X className="size-5 text-red-500" />
              <Button
                onClick={onCancel}
                variant={"ghost"}
                className="text-center justify-center text-red-700 text-base font-semibold uppercase tracking-widest"
              >
                AVBOKA BOKNING
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
