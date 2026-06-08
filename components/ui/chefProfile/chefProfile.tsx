import {
  BadgeCheck,
  CircleCheck,
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
  kapacitet: string;
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
    <div className="w-full sm:max-w-2xl mx-auto pb-3.5 bg-stone-50 flex flex-col ">
      <div className=" bg-white flex flex-col  ">
        {/* Hero */}
        <div className="w-full h-72 flex flex-col ">
          <img
            className="w-full h-72 object-cover"
            src={avatarUrl}
            alt={`${firstName} ${lastName}`}
          />
        </div>
        {/* Chef Name part +Request a quote */}
        <div className=" mt-8 px-5 flex flex-col gap-6">
          {/* chef Name */}
          <div className="p-6 bg-white rounded-lg  border border-stone-300 flex flex-col gap-4">
            <div className="flex flex-col items-start gap-2">
              <div className="flex px-3 py-1 gap-2 bg-yellow-500/20 rounded-xl ">
                <Star className="size-4 text-yellow-900 fill-yellow-900" />
                <div className=" text-yellow-900 text-sm font-semibold  uppercase ">
                  TOP RATED
                </div>
              </div>
              <h1 className=" text-stone-900 text-2xl font-medium tracking-wide ">
                {firstName} {lastName}
              </h1>
              <div className=" flex  gap-2">
                <Star className="size-4 fill-yellow-500 text-yellow-500" />
                <div className=" text-stone-700  font-semibold  ">
                  {averageRating.toFixed(1)}
                </div>
                <div className=" text-stone-700/70 text-base font-normal ">
                  ({reviews.length}{" "}
                  {reviews.length === 1 ? "recension" : "recensioner"})
                </div>
              </div>
              <div className="flex  gap-2">
                <MapPin className="size-4 text-stone-700" />
                <div className=" text-stone-700 text-base font-normal">
                  {municipality}
                </div>
              </div>
            </div>

            <div className=" pt-4 border-t border-stone-300 inline-flex flex-col  items-start gap-2">
              <div className="h-7 px-3 py-1 bg-rose-100 rounded-sm border border-stone-300/30 ">
                <div className=" text-stone-700 text-sm font-semibold  tracking-wide">
                  Erfarenhet: {experienceYears}+ år
                </div>
              </div>
              <div className="h-7 px-3 py-1 bg-rose-100 rounded-sm border border-stone-300/30 ">
                <div className=" text-stone-700 text-sm font-semibold tracking-wide">
                  Specialitet: {specialitet}
                </div>
              </div>
            </div>
          </div>
          <Button
            onClick={onRequestQuote}
            className=" w-full h-12  bg-yellow-500 "
          >
            Request a quote
          </Button>
        </div>
        <h1 className="text-stone-900 text-xl mt-8 font-medium tracking-wide">
          Recensioner
        </h1>
        {/* Testimonials */}
        <div className="w-full mt-8 flex justify-center">
          {reviews.length > 0 && (
            <Testimonial
              reviews={[...reviews].sort((a, b) => b.rating - a.rating)}
            />
          )}
        </div>
        {/* Gallery */}
        {gallery && gallery.length > 0 && (
          <div className="w-full  flex flex-col gap-2">
            <div className=" flex justify-between">
              <h1 className=" text-stone-900 text-xl font-medium  tracking-wide">
                Galleri
              </h1>

              <Button
                variant={"link"}
                onClick={onVisa}
                className=" text-yellow-800 text-sm font-semibold tracking-wide"
              >
                Visa alla
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {gallery.slice(0, 2).map((url, i) => (
                <div
                  key={i}
                  className="w-full h-48 rounded-lg border border-stone-300 overflow-hidden"
                >
                  <img className="w-full h-48 object-cover" src={url} alt="" />
                </div>
              ))}
            </div>
          </div>
        )}
        {/* Köksfakta */}
        <div className="w-full mt-8 flex flex-col  gap-4">
          {/* 1 */}
          <div className=" p-4 rounded-lg border border-stone-300 flex items-center gap-4">
            <Utensils className="size-4  text-stone-700/70" />
            <div className=" text-stone-700/70 text-sm font-semibold uppercase ">
              Kökstyp
              <div className=" text-stone-900 text-base font-medium ">
                {kitchenFacts.kökstyp}
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className=" p-4 rounded-lg border border-stone-300 flex items-center gap-4">
            <UserRound className="size-4  text-stone-700/70" />

            <div className=" text-stone-700/70 text-sm font-semibold uppercase ">
              kapacitet
              <div className=" text-stone-900 text-base font-medium ">
                {kitchenFacts.kapacitet} personer
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className=" p-4 rounded-lg border border-stone-300 flex items-center gap-4">
            <Languages className="size-4  text-stone-700/70" />
            <div className=" text-stone-700/70 text-sm font-semibold uppercase ">
              Språk
              <div className=" text-stone-900 text-base font-medium ">
                {kitchenFacts.språk.join(", ")}
              </div>
            </div>
          </div>
        </div>
        {/* Menyförslag */}
        {menus.length > 0 && (
          <div className="w-full  mt-8  flex flex-col  gap-4">
            <h1 className=" text-stone-900 text-xl font-medium tracking-wide">
              Menyförslag
            </h1>

            <div className=" p-6 bg-white rounded-lg border border-stone-300 flex flex-col  gap-4 ">
              {menus[0].courses.map((course, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CircleCheck className="size-4  text-yellow-500 " />
                  <div className="flex flex-col">
                    <div className="text-stone-900 ">{course.name}</div>
                    {course.description && (
                      <div className="text-stone-500 text-sm ">
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
        <div className="w-full mt-8  flex flex-col  gap-4">
          <div className="inline-flex justify-between ">
            <h1 className=" text-stone-900 text-xl font-medium tracking-wide">
              Om kocken
            </h1>
            <div className="flex items-center gap-1">
              <BadgeCheck className="size-4 fill-yellow-800 text-white" />
              <div className=" text-yellow-800 text-sm font-semibold  tracking-wide">
                Verifierad
              </div>
            </div>
          </div>
          <div className=" text-stone-700 text-base font-normal">{bio}</div>
          <div className=" p-4 bg-stone-200/30 rounded-lg border border-stone-300 inline-flex items-center gap-4">
            <ShieldCheck className="size-4 text-yellow-800" />
            <div className=" text-stone-500  font-medium ">
              Bakgrundskontrollerad och certifierad
            </div>
          </div>
        </div>
        {/* Berättelse från kommunen */}
        <div className="w-full px-5 py-8 mt-8 bg-orange-50 border-t border-b border-stone-300/50 flex flex-col  gap-4">
          <h1 className=" text-stone-900 text-xl font-medium tracking-wide">
            Berättelse från kommunen
          </h1>
          <div className=" pl-6 border-l-2 border-yellow-500/40 flex flex-col ">
            <div className=" text-stone-700 font-normal ">
              &quot;{municipalityStory}&quot;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
