"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Avatar, AvatarFallback } from "../avatar/avatar";
import { Button } from "../button/button";

export type TestimonialProps = {
  customerName: string;
  date: string;
  rating: number;
  comment: string;
};

export function Testimonial({ reviews }: { reviews: TestimonialProps[] }) {
  const [index, setIndex] = useState(0);
  const review = reviews[index];
  const [firstname, lastname] = review.customerName.trim().split(" ");

  return (
    <div className="w-96 px-5 flex flex-col gap-4">
      <div className="w-80 p-6 bg-orange-50 rounded-lg shadow-[0px_4px_4px_0px_rgba(234,179,8,1.00)] flex flex-col gap-4">
        {/* Header */}
        <div className="self-stretch inline-flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Avatar className="size-10 bg-stone-200 rounded-xl">
              <AvatarFallback className="text-base font-bold ">
                {firstname?.[0]?.toUpperCase()}
                {lastname?.[0]?.toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="inline-flex flex-col">
              <span className="text-stone-900 text-base font-semibold  leading-6">
                {review.customerName}
              </span>
              <span className="text-stone-700/70 text-sm font-semibold  leading-4 tracking-wide">
                {review.date}
              </span>
            </div>
          </div>
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="size-3.5"
                fill={i < review.rating ? "#EAB308" : "none"}
                stroke={i < review.rating ? "#EAB308" : "#D6D3D1"}
              />
            ))}
          </div>
        </div>
        {/* Comment */}
        <div className="text-stone-700 text-xs font-normal  leading-6">
          &quot;{review.comment}&quot;
        </div>
      </div>

      {/* Arrows */}
      {reviews.length > 1 && (
        <div className="flex gap-2 justify-center">
          <Button
            className="size-8 rounded-full border border-stone-300 flex items-center justify-center"
            onClick={() =>
              setIndex((i) => (i - 1 + reviews.length) % reviews.length)
            }
          >
            <ChevronLeft className="size-4" />
          </Button>
          <Button
            className="size-8 rounded-full border border-stone-300 flex items-center justify-center"
            onClick={() => setIndex((i) => (i + 1) % reviews.length)}
          >
            <ChevronRight className="size-4" />
          </Button>
        </div>
      )}
    </div>
  );
}
