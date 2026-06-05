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
import { Card, CardContent, CardHeader, CardTitle } from "../card/card";
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
    className: "h-auto w-fit bg-emerald-100 text-green-800 rounded-xl ",
    icon: <CircleCheck className=" size-5 text-emerald-500" />,
  },
  cancelled: {
    label: "Inställd",
    className: "h-auto w-fit  bg-red-100 text-red-800 rounded-xl ",
    icon: <CircleX className="size-5  text-red-500" />,
  },
  pending_payment: {
    label: "Väntar på betalning",
    className: "h-auto w-fit bg-yellow-100 text-yellow-800 rounded-xl ",
    icon: <Clock3 className="size-5  text-yellow-500" />,
  },
  waiting_for_payment: {
    label: "Väntar på betalning",
    className: "h-auto w-fit bg-yellow-100 text-yellow-800 rounded-xl ",
    icon: <Clock3 className="size-5  text-yellow-500" />,
  },
  cancel_pending_refund: {
    label: "Avbokning pågår",
    className: "h-auto w-fitbg-orange-100 text-orange-800 rounded-xl ",
    icon: <CircleX className="size-5  text-red-500" />,
  },
  cancellation_failed: {
    label: "Avbokning misslyckades",
    className: "h-auto w-fitbg-red-100 text-red-800 rounded-xl ",
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
        <div className="flex flex-1 justify-between font-semibold">
          <span>Total</span>
          <span>{totalAmount}</span>
        </div>
      ),
      content: (
        <div className="flex flex-col gap-2 text-sm ">
          {/* Base Price */}
          <div className="flex justify-between ">
            <div className="text-zinc-600 ">Baspris</div>
            <div className="text-stone-900  font-medium">{basePrice}</div>
          </div>

          {/* Price per guest*/}
          <div className="flex justify-between">
            <div className="text-zinc-600 ">Pris per gäst</div>
            <div className="text-stone-900  font-medium">{pricePerGuest}</div>
          </div>

          {/* weekday Modifier*/}
          <div className="flex justify-between ">
            <div className="text-zinc-600">
              Veckodagsmodifierare
              <br />
              {weekdayName && `(${weekdayName})`}
            </div>
            <div className="flex flex-col gap-2 ">
              <div className="text-right text-stone-900  font-medium">
                {weekdayModifier}{" "}
              </div>
              <div className="text-right text-zinc-600 text-[7px] font-normal uppercase">
                (APPLICERAS PÅ PER-GÄST DELEN AV PRISET)
              </div>
            </div>
          </div>

          {/* Total Amount*/}
          <div className=" pt-4 border-t border-stone-200 flex justify-between ">
            <div className="text-stone-900 font-semibold">Total</div>
            <div className="text-stone-900 font-semibold">{totalAmount}</div>
          </div>

          {/* platform Fee */}
          <div className="flex justify-between ">
            <div className="text-zinc-600  font-normal">Plattformsavgift</div>
            <div className="text-zinc-600  font-medium">{platformFee}</div>
          </div>

          {/* chef Fee */}
          <div className=" pt-2 border-t border-stone-200 flex justify-between ">
            <div className="text-stone-900  font-normal">Kockens arvode</div>
            <div className="text-yellow-800  font-normal">{chefFee}</div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="w-full sm:max-w-2xl mx-auto bg-stone-50 flex flex-col ">
        {/* Header */}
        <div className="w-full h-16  bg-stone-50 border-b border-stone-200 flex items-center gap-4">
          <Button variant={"ghost"} onClick={onClick} className="p-2">
            <MoveLeft className="text-yellow-500 text-3xl size-4" />
          </Button>
          <div className="text-stone-900 text-xl font-semibold ">
            Booking Detail
          </div>
        </div>
        {/* Status + Booking ID */}
        <div className=" h-20 flex justify-between items-center">
          <div className=" flex  items-center">
            {statusStyle[status].icon}
            <Badge className={statusStyle[status].className}>
              {statusStyle[status].label}
            </Badge>
          </div>
          <div className="w-full flex flex-col gap-0.5">
            <div className="text-right text-zinc-600 text-xs font-normal uppercase">
              BOOKING ID
            </div>
            <div className="text-right text-stone-900 font-medium">
              {requestId.slice(0, 6)}...
            </div>
          </div>
        </div>

        {/* Main Card */}
        <Card className=" p-8 bg-white rounded-lg  border border-gray-200 flex flex-col  gap-6">
          {/* cardHeader */}

          <CardHeader className="flex flex-col justify-start items-start gap-2 pb-3">
            {/* <div className="self-stretch justify-center text-stone-900 text-3xl font-semibold">
              {title}
            </div> */}
            <CardTitle className="text-stone-900 text-xl font-bold">
              {title}
            </CardTitle>
            <div className="flex flex-col gap-1">
              {/* Calendar */}
              <div className="inline-flex gap-1.5">
                <Calendar className="size-4" />
                <div className="text-stone-700 text-sm font-normal">
                  {eventDate}
                </div>
              </div>
              {/* Guests */}
              <div className="inline-flex gap-1.5">
                <Users className="size-4" />
                <div className="text-stone-700 text-sm font-normal">
                  {number_of_guests} Personer
                </div>
              </div>
            </div>
          </CardHeader>
          {/* cardCotent */}
          <CardContent className="p-6 bg-white rounded-lg  flex flex-col justify-start items-start gap-1">
            <div className="justify-center text-yellow-800 text-xs font-normal uppercase tracking-wide">
              PRISDETALJER
            </div>
            <div className="self-stretch justify-center text-zinc-600 text-sm font-light">
              Detaljerad prisuppdelning för denna bokning
            </div>
            <div className="self-stretch flex flex-col justify-start items-start ">
              <div className="self-stretch flex justify-center items-center">
                <div className="flex flex-1 text-stone-900 font-semibold  ">
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
            <div className="self-stretch h-11 p-3 bg-stone-200/10 flex justify-center items-center gap-2">
              <ShieldCheck className="size-4" />
              <div className=" text-gray-600 text-sm font-normal">
                Secured by Stripe Payments
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Booking Description +timeline */}
        <div className=" mt-8 p-6 bg-white rounded-lg  border border-stone-200 flex flex-col justify-start  gap-8">
          <div className="p-6 bg-white rounded-xl border-b border-gray-200 flex flex-col justify-start  gap-2">
            <div className=" text-yellow-800 text-xs font-normal uppercase tracking-[2.40px]">
              Om bokning
            </div>
            <div className="  text-zinc-600  font-normal">{bookingDesc}</div>
          </div>

          {/* //////////////// */}
          {/* Time Line */}
          <div className=" pl-6 border-l border-stone-200 flex flex-col justify-start items-start gap-8">
            <div className="w-full relative flex flex-col justify-start items-start gap-2">
              <div className="self-stretch  text-stone-900 font-semibold ">
                Bokning skapad
              </div>
              <div className="self-stretch  text-zinc-600 text-sm font-normal ">
                {createdDate}
              </div>
              <div className="size-2.5 -left-7.75 top-1 absolute bg-blue-500 rounded-xl  border-2 border-blue-200" />
            </div>
            <div className="w-full relative flex flex-col justify-start items-start gap-2">
              <div className="self-stretch  text-stone-900 font-semibold  ">
                Betalning slutförd
              </div>
              <div className="self-stretch  text-zinc-600 text-sm font-normal">
                {completedDate}
              </div>
              <div className="size-2.5 -left-7.75 top-1 absolute bg-green-500 rounded-xl border-2 border-emerald-100" />
            </div>
          </div>
        </div>
        {/* SAKNADE KÖKSDETALJER */}
        <div className="self-stretch mt-8 p-6 bg-white rounded-xl  border  border-gray-200 inline-flex flex-col justify-start items-start gap-2">
          <div className="self-stretch  text-yellow-800 text-xs font-normal uppercase ">
            SAKNADE KÖKSDETALJER
          </div>
          <div className="self-stretch  text-gray-600  font-normal">
            {missingKitchenArticles.map((item, i) => (
              <div key={i}>{item}</div>
            ))}
          </div>
        </div>

        {/* dokme */}
        <div className="self-stretch  mt-auto p-4 bg-white ">
          <Button
            onClick={onCancel}
            variant={"destructive"}
            className="self-stretch h-12 w-full"
          >
            <X className="size-5 text-red-500" />
            AVBOKA BOKNING
          </Button>
        </div>
      </div>
    </>
  );
}
