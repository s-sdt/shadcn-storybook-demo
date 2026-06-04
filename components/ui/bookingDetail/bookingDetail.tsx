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
      "h-auto w-fit px-3 py-1 relative bg-emerald-100 text-green-800 rounded-xl inline-flex  justify-start items-start leading-4 ",
    icon: <CircleCheck className=" size-5 text-emerald-500" />,
  },
  cancelled: {
    label: "Inställd",
    className:
      "h-auto w-fit px-3 py-1 relative bg-red-100 text-red-800 rounded-xl inline-flex  justify-start items-start leading-4 ",
    icon: <CircleX className="size-5  text-red-500" />,
  },
  pending_payment: {
    label: "Väntar på betalning",
    className:
      "h-auto w-fit px-3 py-1 relative bg-yellow-100 text-yellow-800 rounded-xl inline-flex  justify-start items-start leading-4 ",
    icon: <Clock3 className="size-5  text-yellow-500" />,
  },
  waiting_for_payment: {
    label: "Väntar på betalning",
    className:
      "h-auto w-fit px-3 py-1 relative bg-yellow-100 text-yellow-800 rounded-xl inline-flex  justify-start items-start leading-4 ",
    icon: <Clock3 className="size-5  text-yellow-500" />,
  },
  cancel_pending_refund: {
    label: "Avbokning pågår",
    className:
      "h-auto w-fit px-3 py-1 relative bg-orange-100 text-orange-800 rounded-xl inline-flex  justify-start items-start leading-4 ",
    icon: <CircleX className="size-5  text-red-500" />,
  },
  cancellation_failed: {
    label: "Avbokning misslyckades",
    className:
      "h-auto w-fit px-3 py-1 relative bg-red-100 text-red-800 rounded-xl inline-flex  justify-start items-start leading-4 ",
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
      value: "prices",
      trigger: (
        <div className="flex flex-1 justify-between pr-2 font-semibold  leading-6">
          <span>Total</span>
          <span>{totalAmount}</span>
        </div>
      ),
      content: (
        <div className="flex flex-col gap-2 text-sm pt-2">
          {/* Base Price */}
          <div className="self-stretch inline-flex justify-between items-start">
            <div className=" text-zinc-600 text-base font-normal  leading-6">
              Baspris
            </div>
            <div className=" text-stone-900 text-base font-medium  leading-6">
              {basePrice}
            </div>
          </div>

          {/* Price per guest*/}
          <div className="self-stretch inline-flex justify-between items-start">
            <div className=" text-zinc-600 text-base font-normal  leading-6">
              Pris per gäst
            </div>
            <div className=" text-stone-900 text-base font-medium  leading-6">
              {pricePerGuest}
            </div>
          </div>

          {/* weekday Modifier*/}
          <div className="self-stretch inline-flex justify-between items-start">
            <div className=" text-zinc-600 text-base font-normal  leading-6">
              Veckodagsmodifierare
              <br />
              {weekdayName && `(${weekdayName})`}
            </div>
            <div className="self-stretch pl-2.5 inline-flex flex-col justify-start items-end">
              <div className="text-right  text-stone-900 text-base font-medium  leading-6">
                {weekdayModifier}{" "}
              </div>
              <div className="text-right  text-zinc-600 text-[7px] font-normal  uppercase leading-4">
                (APPLICERAS PÅ PER-GÄST DELEN AV PRISET)
              </div>
            </div>
          </div>

          {/* Total Amount*/}
          <div className="self-stretch pt-4 border-t border-stone-200 inline-flex justify-between items-center">
            <div className=" text-stone-900 text-base font-semibold  leading-6">
              Total
            </div>
            <div className=" text-stone-900 text-base font-semibold  leading-6">
              {totalAmount}
            </div>
          </div>

          {/* platform Fee */}
          <div className="self-stretch inline-flex justify-between items-start">
            <div className=" text-zinc-600 text-base font-normal  leading-6">
              Plattformsavgift
            </div>
            <div className=" text-zinc-600 text-base font-medium  leading-6">
              {platformFee}
            </div>
          </div>

          {/* chef Fee */}
          <div className="self-stretch pt-6 border-t border-stone-200 inline-flex justify-between items-center">
            <div className=" text-stone-900 text-base font-normal leading-6">
              Kockens arvode
            </div>
            <div className=" text-yellow-800 text-base font-normal leading-6">
              {chefFee}
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <>
      <div className="w-full sm:max-w-2xl mx-auto relative  bg-stone-50 flex flex-col justify-start items-start">
        {/* Header */}
        <div className="w-full h-16 left-0 top-0 absolute bg-stone-50 border-b border-stone-200">
          <Button variant={"ghost"} onClick={onClick}>
            <MoveLeft className="text-yellow-500 text-3xl size-4 left-6 top-[23.50px] absolute " />
          </Button>
          <div className="left-16 top-[17.50px] absolute  text-stone-900 text-xl font-semibold  leading-7 tracking-wide">
            Booking Detail
          </div>
        </div>
        {/* Status + Booking ID */}
        <div className="self-stretch mt-16 h-20 inline-flex justify-between items-center">
          <div className=" inline-flex justify-start items-center">
            {statusStyle[status].icon}
            <Badge className={statusStyle[status].className}>
              {statusStyle[status].label}
            </Badge>
          </div>
          <div className="w-28 inline-flex flex-col justify-start items-end gap-[0.50px]">
            <div className="self-stretch text-right  text-zinc-600 text-xs font-normal  uppercase leading-4 tracking-wide">
              BOOKING ID
            </div>
            <div className="text-right  text-stone-900 text-base font-medium  leading-6">
              {requestId.slice(0, 6)}...
            </div>
          </div>
        </div>

        {/* Main Card */}
        <Card className="self-stretch px-6 pt-8 pb-6 bg-white rounded-lg shadow-[0px_4px_20px_0px_rgba(0,0,0,0.04)] outline -outline-offset-1 outline-gray-200 inline-flex flex-col justify-start items-start gap-6">
          {/* cardHeader */}
          <CardHeader className="self-stretch border-b border-gray-200 inline-flex flex-col justify-start items-start gap-1">
            <div className="self-stretch  text-stone-900 text-3xl font-semibold  leading-8">
              {title}
            </div>
            {/* Calendar */}
            <div className="self-stretch inline-flex justify-start items-center gap-1.5">
              <Calendar className="size-4 inline-flex flex-col items-center" />
              <div className=" inline-flex flex-col justify-start items-start gap-0.5">
                <div className=" text-stone-900 text-base font-normal  leading-6">
                  {eventDate}
                </div>
              </div>
            </div>
            {/* Guests */}
            <div className="self-stretch inline-flex justify-start items-center gap-1.5">
              <Users className="size-4  inline-flex flex-col items-center" />
              <div className="inline-flex flex-col justify-start items-start gap-0.5">
                <div className=" text-stone-900 text-base font-normal  leading-6">
                  {number_of_guests} Personer
                </div>
              </div>
            </div>
          </CardHeader>
          {/* cardCotent */}
          <CardContent className="self-stretch p-6 bg-white rounded-lg shadow-[0px_4px_20px_0px_rgba(211,197,172,0.31)] outline -outline-offset-1 outline-stone-200 inline-flex flex-col justify-start items-start gap-1">
            <div className="self-stretch  text-yellow-800 text-xs font-normal  uppercase leading-4 tracking-[2.40px]">
              PRISDETALJER
            </div>
            <div className="self-stretch  text-zinc-600 text-sm font-light  leading-5">
              Detaljerad prisuppdelning för denna bokning
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              <div className="self-stretch  px-3.5 py-2.5 bg-white rounded-sm inline-flex justify-center items-center">
                <div className="flex-1  text-stone-900 text-base font-semibold  leading-6">
                  {/* {Price detail info} */}
                  <Accordion type="single" collapsible defaultValue="prices">
                    {item.map((item) => (
                      <AccordionItem key={item.value} value={item.value}>
                        <AccordionTrigger>{item.trigger}</AccordionTrigger>
                        <AccordionContent>{item.content}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            </div>
            {/* Secured by Stripe */}
            <div className="self-stretch h-11 p-3 bg-stone-200/10 inline-flex justify-center items-center">
              <div className="pr-2 inline-flex flex-col justify-start items-start">
                <ShieldCheck className="size-4" />
              </div>
              <div className=" text-gray-600 text-sm font-normal  leading-5">
                Secured by Stripe Payments
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Booking Description +timeline */}
        <div className="self-stretch  mt-8 p-6 bg-white rounded-lg shadow-[0px_4px_20px_0px_rgba(0,0,0,0.04)] outline -outline-offset-1 outline-stone-200 inline-flex flex-col justify-start items-start gap-8">
          <div className="self-stretch p-6 bg-white rounded-xl border-b border-gray-200 flex flex-col justify-start items-start gap-2">
            <div className="self-stretch  text-yellow-800 text-xs font-normal  uppercase leading-4 tracking-[2.40px]">
              Om bokning
            </div>
            <div className="self-stretch  text-zinc-600 text-base font-normal  leading-6">
              {bookingDesc}
            </div>
          </div>
          {/* Time Line */}
          <div className=" pl-6 border-l border-stone-200 flex flex-col justify-start items-start gap-10">
            <div className="w-full relative flex flex-col justify-start items-start gap-2">
              <div className="self-stretch  text-stone-900 text-base font-semibold  leading-4">
                Bokning skapad
              </div>
              <div className="self-stretch  text-zinc-600 text-sm font-normal  leading-5">
                {createdDate}
              </div>
              <div className="size-2.5 -left-7.75 top-1 absolute bg-blue-500 rounded-xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] border-2 border-blue-200" />
            </div>
            <div className="w-full relative flex flex-col justify-start items-start gap-2">
              <div className="self-stretch  text-stone-900 text-base font-semibold  leading-4">
                Betalning slutförd
              </div>
              <div className="self-stretch  text-zinc-600 text-sm font-normal  leading-5">
                {completedDate}
              </div>
              <div className="size-2.5 -left-7.75 top-1 absolute bg-green-500 rounded-xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] border-2 border-emerald-100" />
            </div>
          </div>
        </div>
        {/* SAKNADE KÖKSDETALJER */}
        <div className="self-stretch mt-8 mb-8 p-6 bg-white rounded-xl shadow-[0px_4px_12px_0px_rgba(0,0,0,0.05)]  outline-gray-200 inline-flex flex-col justify-start items-start gap-2 outline -outline-offset-1">
          <div className="self-stretch  text-yellow-800 text-xs font-normal  uppercase leading-4 tracking-[2.40px] ">
            SAKNADE KÖKSDETALJER
          </div>
          <div className="self-stretch text-gray-600 text-base font-normal  leading-6">
            {missingKitchenArticles.map((item, i) => (
              <div key={i}>{item}</div>
            ))}
          </div>
        </div>

        {/* dokme */}

        <div className="self-stretch mt-auto p-4 bg-white border-t border-stone-200">
          <Button
            onClick={onCancel}
            variant={"ghost"}
            className="self-stretch h-12 w-full bg-orange-50 rounded-lg outline -outline-offset-1 outline-red-700/10 flex justify-center items-center gap-2 text-red-700 text-base font-semibold uppercase leading-6 tracking-widest"
          >
            <X className="size-5 text-red-500" />
            AVBOKA BOKNING
          </Button>
        </div>
      </div>
    </>
  );
}
