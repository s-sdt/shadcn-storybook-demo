import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "../avatar/avatar";

export type TestimonialProps = {
  customerName: string;
  date: string;
  rating: number;
  comment: string;
};

export function Testimonial({
  customerName,
  date,
  rating,
  comment,
}: TestimonialProps) {
  const [firstname, lastname] = customerName.trim().split(" ");

  return (
    <div className="size-96 px-5 pt-72 relative shadow-[inset_0px_4px_4px_0px_rgba(0,0,0,0.25)] inline-flex flex-col justify-start items-start gap-6">
      <div className="w-80 left-8 top-4 absolute justify-center text-stone-900 text-xl font-medium font-['Inter'] leading-7 tracking-wide">
        Recensioner
      </div>
      <div className="w-80 h-72 p-6 left-8.25 top-15.5 absolute bg-orange-50 rounded-lg shadow-[0px_4px_4px_0px_rgba(234,179,8,1.00)] flex flex-col justify-start items-start gap-4">
        {/* Header: Avatar + Name + Stars */}
        <div className="self-stretch inline-flex justify-between items-center">
          <div className="flex justify-start items-center gap-3">
            <Avatar className="size-10 bg-stone-200 rounded-xl flex justify-center items-center">
              <AvatarFallback className="text-center text-base font-bold font-['Inter'] leading-6">
                {firstname?.[0] && firstname[0].toUpperCase()}
                {lastname?.[0] && lastname[0].toUpperCase()}
              </AvatarFallback>
            </Avatar>
            {/* </span>
            </div> */}
            <div className="inline-flex flex-col justify-start items-start">
              <span className="justify-center text-stone-900 text-base font-semibold font-['Inter'] leading-6">
                {customerName}
              </span>
              <span className="justify-center text-stone-700/70 text-sm font-semibold font-['Inter'] leading-4 tracking-wide">
                {date}
              </span>
            </div>
          </div>
          {/* Stars */}
          <div className="flex justify-start items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="size-3.5"
                fill={i < rating ? "#EAB308" : "none"}
                stroke={i < rating ? "#EAB308" : "#D6D3D1"}
              />
            ))}
          </div>
        </div>

        {/* Comment */}
        <div className="self-stretch flex-1 justify-center text-stone-700 text-xs font-normal font-['Inter'] leading-6">
          &quot;{comment}&quot;
        </div>
      </div>
    </div>
  );
}
