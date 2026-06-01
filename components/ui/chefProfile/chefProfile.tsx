import {
  BadgeCheck,
  Languages,
  MapPin,
  ShieldCheck,
  Star,
  UserRound,
  Utensils,
} from "lucide-react";
import { Testimonial, TestimonialProps } from "../testimonial/testimonial";
import { Button } from "../button/button";

export type ChefProfileMenu = {
  id: string;
  courses: { course: string; name: string; description?: string }[];
};

export type KöksFacta = {
  kökstyp: string;
  kapacitet: number;
  språk: string[];
};

export type ChefProfileProps = {
  firstName: string;
  lastName: string;
  avatarUrl: string;
  municipality: string;
  experienceYears: number;
  specialitet: string;
  bio: string;
  municipalityStory: string;
  kitchenFacts: KöksFacta;
  gallery?: string[];
  menus: ChefProfileMenu[];
  reviews: (TestimonialProps & { id: string })[];
  onRequestQuote?: () => void;
  onVisa?: () => void;
};

export function ChefProfile({
  firstName,
  lastName,
  avatarUrl,
  municipality,
  experienceYears,
  specialitet,
  bio,
  municipalityStory,
  kitchenFacts,
  gallery,
  menus,
  reviews,
  onRequestQuote,
  onVisa,
}: ChefProfileProps) {
  const averageRating =
    reviews.length > 0
      ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
      : 0;

  return (
    <div className="w-96 min-h-600 pb-3.5 bg-stone-50 inline-flex flex-col justify-start items-start">
      <div className="self-stretch bg-white flex flex-col justify-start items-start">
        {/* Hero */}
        <div className="w-96 h-72 relative flex flex-col justify-center items-start">
          <img
            className="w-96 h-72 object-cover"
            src={avatarUrl}
            alt={`${firstName} ${lastName}`}
          />
          <div className="w-96 h-72 left-0 top-0 absolute bg-linear-270 from-black/60 to-black/0" />
        </div>

        {/* Chef Name part */}
        <div className="self-stretch h-80 px-5 rounded-2xl flex flex-col justify-start items-start gap-6">
          <div className="self-stretch p-6 bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline -outline-offset-1 outline-stone-300 flex flex-col justify-start items-start gap-4">
            <div className="flex flex-col justify-start items-start gap-1">
              <div className="px-3 py-1 bg-yellow-500/20 rounded-xl inline-flex justify-start items-center gap-1">
                <div className="size-3 bg-yellow-900" />
                <div className="justify-center text-yellow-900 text-sm font-semibold font-['Inter'] uppercase leading-4 tracking-wide">
                  TOP RATED
                </div>
              </div>
              <div className="justify-center text-stone-900 text-3xl font-semibold font-['Inter'] leading-8">
                {firstName} {lastName}
              </div>
              <div className="self-stretch inline-flex justify-start items-center gap-1">
                <Star className="size-5 fill-yellow-500 text-yellow-500" />
                <div className="justify-center text-stone-700 text-base font-semibold font-['Inter'] leading-6">
                  {averageRating.toFixed(1)}
                </div>
                <div className="justify-center text-stone-700/70 text-base font-normal font-['Inter'] leading-6">
                  ({reviews.length}{" "}
                  {reviews.length === 1 ? "recension" : "recensioner"})
                </div>
              </div>
              <div className="self-stretch inline-flex justify-start items-center gap-1">
                <MapPin className="w-3 h-3.5 text-stone-700" />
                <div className="justify-center text-stone-700 text-base font-normal font-['Inter'] leading-6">
                  {municipality}
                </div>
              </div>
            </div>

            <div className="self-stretch pt-4 border-t border-stone-300 inline-flex flex-col justify-center items-start gap-2">
              <div className="h-7 px-3 py-1.5 bg-rose-100 rounded-sm outline -outline-offset-1 outline-stone-300/30 flex flex-col justify-start items-start">
                <div className="justify-center text-stone-700 text-sm font-semibold font-['Inter'] leading-4 tracking-wide">
                  Erfarenhet: {experienceYears}+ år
                </div>
              </div>
              <div className="h-7 px-3 py-1.5 bg-rose-100 rounded-sm outline -outline-offset-1 outline-stone-300/30 flex flex-col justify-start items-start">
                <div className="justify-center text-stone-700 text-sm font-semibold font-['Inter'] leading-4 tracking-wide">
                  Specialitet: {specialitet}
                </div>
              </div>
            </div>
          </div>
          <Button
            onClick={onRequestQuote}
            className="self-stretch py-4 w-full h-12 mb-4 bg-yellow-500 rounded-lg shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] inline-flex justify-center items-center gap-2"
          >
            Request a quote
          </Button>
        </div>

        {/* Testimonials */}
        <div className="mt-8">
          {reviews.map((review) => (
            <Testimonial
              key={review.id}
              customerName={review.customerName}
              date={review.date}
              rating={review.rating}
              comment={review.comment}
            />
          ))}
        </div>

        {/* Gallery */}
        {gallery && gallery.length > 0 && (
          <div className="w-96 flex flex-col justify-start items-start gap-6">
            <div className="self-stretch px-5 inline-flex justify-between items-end">
              <div className="justify-center text-stone-900 text-xl font-medium font-['Inter'] leading-7 tracking-wide">
                Galleri
              </div>
              <Button
                onClick={onVisa}
                className="justify-center text-yellow-800 text-sm font-semibold font-['Inter'] leading-4 tracking-wide"
              >
                Visa alla
              </Button>
            </div>
            <div className="self-stretch inline-flex justify-between items-start overflow-hidden">
              {gallery.slice(0, 2).map((url, i) => (
                <div
                  key={i}
                  className="w-64 h-48 rounded-lg outline -outline-offset-1 outline-stone-300 overflow-hidden"
                >
                  <img className="w-64 h-48 object-cover" src={url} alt="" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Köksfakta */}

        <div className="w-96 px-5 py-2 flex flex-col justify-center items-center gap-6">
          <div className="self-stretch justify-center text-stone-900 text-xl font-medium font-['Inter'] leading-7 tracking-wide">
            Köksfakta
          </div>
          <div className="size- flex flex-col justify-start items-start gap-4">
            <div
              data-has-icon="true"
              className="w-80 p-4 rounded-lg outline -outline-offset-1 outline-stone-300 inline-flex justify-start items-center gap-4"
            >
              <div className="size-6 relative overflow-hidden">
                <Utensils className="w-4 h-5 left-0.75 top-[2.99px] absolute  text-stone-700/70" />
              </div>
              <div className="size- inline-flex flex-col justify-start items-start">
                <div className="justify-center text-stone-700/70 text-sm font-semibold font-['Inter'] uppercase leading-4 tracking-wide">
                  Kökstyp
                </div>
                <div className="justify-center text-stone-900 text-base font-medium font-['Inter'] leading-6">
                  {kitchenFacts.kökstyp}
                </div>
              </div>
            </div>
            <div
              data-has-icon="true"
              className="w-80 p-4 rounded-lg outline -outline-offset-1 outline-stone-300 inline-flex justify-start items-center gap-4"
            >
              <div className="size-6 relative overflow-hidden">
                <UserRound className="w-6 h-4 left-[0.75px] top-[4.50px] absolute  text-stone-700/70" />
              </div>
              <div className="size- inline-flex flex-col justify-start items-start">
                <div className="justify-center text-stone-700/70 text-sm font-semibold font-['Inter'] uppercase leading-4 tracking-wide">
                  kapacitet
                </div>
                <div className="justify-center text-stone-900 text-base font-medium font-['Inter'] leading-6">
                  {kitchenFacts.kapacitet} personer
                </div>
              </div>
            </div>
            <div
              data-has-icon="true"
              className="w-80 p-4 rounded-lg outline -outline-offset-1 outline-stone-300 inline-flex justify-start items-center gap-4"
            >
              <div className="size-6 relative overflow-hidden">
                <Languages className="size-5 left-[2.25px] top-[2.25px] absolute  text-stone-700/70" />
              </div>
              <div className="size- inline-flex flex-col justify-start items-start">
                <div className="justify-center text-stone-700/70 text-sm font-semibold font-['Inter'] uppercase leading-4 tracking-wide">
                  Språk
                </div>
                <div className="justify-center text-stone-900 text-base font-medium font-['Inter'] leading-6">
                  {kitchenFacts.språk.join(", ")}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Menyförslag */}
        {menus.length > 0 && (
          <div className="w-96 px-5 py-2 flex flex-col justify-start items-start gap-6">
            <div className="self-stretch justify-center text-stone-900 text-xl font-medium font-['Inter'] leading-7 tracking-wide">
              Menyförslag
            </div>
            <div className="self-stretch bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-stone-300 flex flex-col justify-start items-start gap-4 overflow-hidden p-4">
              {menus[0].courses.map((course, i) => (
                <div
                  key={i}
                  className="self-stretch inline-flex justify-start items-start gap-3"
                >
                  <div className="size-4 mt-1 bg-yellow-500 shrink-0" />
                  <div className="flex flex-col">
                    <div className="text-stone-900 text-base font-normal font-['Inter'] leading-6">
                      {course.name}
                    </div>
                    {course.description && (
                      <div className="text-stone-500 text-sm font-['Inter'] leading-5">
                        {course.description}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Om kocken */}
        <div className="w-96 px-5 py-2 flex flex-col justify-start items-start gap-4">
          <div className="self-stretch inline-flex justify-between items-center">
            <div className="justify-center text-stone-900 text-xl font-medium font-['Inter'] leading-7 tracking-wide">
              Om kocken
            </div>
            <div className="flex justify-start items-center gap-1">
              <BadgeCheck className="size-4 fill-yellow-800 text-white" />
              <div className="justify-center text-yellow-800 text-sm font-semibold font-['Inter'] leading-4 tracking-wide">
                Verifierad
              </div>
            </div>
          </div>
          <div className="self-stretch justify-center text-stone-700 text-base font-normal font-['Inter'] leading-6">
            {bio}
          </div>
          <div className="self-stretch px-4 pt-6 pb-4 bg-stone-200/30 rounded-lg outline -outline-offset-1 outline-stone-300 inline-flex justify-start items-center gap-4">
            <ShieldCheck className="w-4 h-5 text-yellow-800" />
            <div className="justify-center text-stone-500 text-base font-medium font-['Inter'] leading-6">
              Bakgrundskontrollerad och certifierad
            </div>
          </div>
        </div>

        {/* Berättelse från kommunen */}
        <div className="w-96 px-5 py-8 bg-orange-50 border-t border-b border-stone-300/50 flex flex-col justify-start items-start gap-4">
          <div className="self-stretch justify-center text-stone-900 text-xl font-medium font-['Inter'] leading-7 tracking-wide">
            Berättelse från kommunen
          </div>
          <div className="self-stretch pl-6 border-l-2 border-yellow-500/40 flex flex-col justify-start items-start">
            <div className="self-stretch justify-center text-stone-700 text-base font-normal font-['Inter'] leading-6">
              &quot;{municipalityStory}&quot;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
