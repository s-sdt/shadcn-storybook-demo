"use client";

import { Camera, FileUp, FileX } from "lucide-react";
import { useForm } from "react-hook-form";
import { Button } from "../button/button";
import { Switch } from "../switch";
import { Textarea } from "../textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../form";
import { Input } from "../input/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "../select";

export type MinProfileFormValues = {
  isPublic: boolean;
  firstName: string;
  lastName: string;
  municipality: string;
  experienceYears: number;
  bio: string;
  municipalityStory: string;
  kitchenFacts: string;
};

export type MinProfileProps = {
  defaultValues: MinProfileFormValues;
  avatarUrl?: string;
  gallery?: string[];
  municipalityOptions: { label: string; value: string }[];
  onChangePic?: () => void;
  onAddGallery?: () => void;
  onDeleteGallery?: (url: string) => void;
  onCancel?: () => void;
  onSave?: (data: MinProfileFormValues) => void;
};

export function MinProfile({
  defaultValues,
  avatarUrl,
  gallery,
  municipalityOptions = [],
  onChangePic,
  onAddGallery,
  onDeleteGallery,
  onCancel,
  onSave,
}: MinProfileProps) {
  const form = useForm<MinProfileFormValues>({ defaultValues });

  return (
    <div className="w-96 pb-3.5 bg-stone-50 flex flex-col items-start">
      {/* Hero  */}
      <div className="w-full h-40 bg-yellow-500/30 relative">
        <Button
          onClick={onChangePic}
          className="absolute right-3 bottom-3 p-2 bg-white/80 rounded-sm outline -outline-offset-1 outline-stone-300"
        >
          <Camera className="w-4 h-3.5 text-stone-900" />
        </Button>
      </div>

      {/* Avatar + title + actions */}
      <div className="w-full px-4 flex flex-col gap-4 -mt-12">
        <img
          className="w-24 h-24 rounded-full border-4 border-white object-cover"
          src={avatarUrl ?? "https://placehold.co/96x96"}
          alt="avatar"
        />
        <div className="flex flex-col">
          <div className="text-stone-900 text-3xl font-semibold font-['Inter'] leading-10">
            Min profil
          </div>
          <div className="text-stone-700 text-base font-['Inter'] leading-6">
            Uppdatera foto och personuppgifter.
          </div>
        </div>
        <div className="w-full flex justify-end gap-3">
          <Button variant="secondary" onClick={onCancel}>
            Cancel
          </Button>
          <Button onClick={form.handleSubmit((data) => onSave?.(data))}>
            Save
          </Button>
        </div>
      </div>

      <Form {...form}>
        <form className="w-full px-4 flex flex-col gap-8 mt-8">
          {/* Public toggle */}
          <FormField
            control={form.control}
            name="isPublic"
            render={({ field }) => (
              <div className="w-full p-4 bg-white rounded-lg outline outline-stone-300 flex flex-row justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-stone-900 text-sm font-medium font-['Inter']">
                    Publicera min profil
                  </span>
                  <span className="w-56 text-stone-700 text-[10px] font-semibold font-['Inter']">
                    När du är redo för att göra din profil offentlig, aktivera
                    detta
                  </span>
                </div>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </div>
            )}
          />

          {/* Personlig information */}
          <div className="w-full flex flex-col gap-4 border-t-4 border-stone-300 pt-4">
            <div className="text-stone-900 text-sm font-medium font-['Inter']">
              Personlig information
            </div>
            {/* Förnamn */}
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Förnamn</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-orange-50 outline -outline-offset-1 outline-stone-300"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Efternamn */}
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Efternamn</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-orange-50 outline -outline-offset-1 outline-stone-300"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Plats */}
            <FormField
              control={form.control}
              name="municipality"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Plats</FormLabel>
                  <Select
                    name={field.name}
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-orange-50 outline -outline-offset-1 outline-stone-300 w-full">
                        <SelectValue placeholder="Välj kommun" />
                      </SelectTrigger>
                    </FormControl>

                    <SelectContent>
                      {municipalityOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Erfarenhet */}
            <FormField
              control={form.control}
              name="experienceYears"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Erfarenhet (antal år)</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-orange-50 outline -outline-offset-1 outline-stone-300"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Om dig */}
          <div className="w-full flex flex-col gap-4 border-t-4 border-stone-300 pt-4">
            <div className="text-stone-900 text-sm font-medium font-['Inter']">
              Om dig
            </div>
            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Berätta om dig själv</FormLabel>
                  <FormControl>
                    <Textarea
                      className="bg-orange-50 outline -outline-offset-1 outline-stone-300 min-h-28"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="municipalityStory"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Berätta om din koppling till din ort</FormLabel>
                  <FormControl>
                    <Textarea
                      className="bg-orange-50 outline -outline-offset-1 outline-stone-300 min-h-20"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="kitchenFacts"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nämn dina bästa talanger i köket</FormLabel>
                  <FormControl>
                    <Textarea
                      className="bg-orange-50 outline -outline-offset-1 outline-stone-300 min-h-20"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Galleri */}
          <div className="w-full flex flex-col gap-4">
            <div className="text-stone-900 text-sm font-medium font-['Inter']">
              Galleri
            </div>

            <button
              onClick={onAddGallery}
              className="w-24 h-24 bg-orange-50 rounded-sm outline -outline-offset-2 outline-stone-300 flex flex-col justify-center items-center gap-1"
            >
              <FileUp className="size-5 text-stone-500" />
              <span className="text-stone-500 text-xs font-semibold font-['Inter']">
                Lägg till
              </span>
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
}
