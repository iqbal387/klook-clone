"use client";

import { Bookmark, ChevronRight, Location, Star } from "react-iconly";
import Image from "next/image";

import Container from "@/components/atoms/Container";

import { setShortNumber } from "@/helpers/methods/number";

import { activity } from "@/data/activity";

type Props = {
  params: {
    slug: string;
  };
};

const ActivityDetail = ({ params }: Props) => {
  const data = activity.find((item) => item.title === decodeURI(params.slug));
  const { title, images, category, location, badges, review, orderQantity } =
    data || {};

  return (
    <section className="section pt-6 overflow-x-hidden">
      <Container className="grid gap-4">
        <div className="flex items-center gap-2 text-lg">
          <a href="/activity" className="underline hover:opacity-50">
            Aktivitas
          </a>

          <ChevronRight size="small" stroke="bold" />

          <a href="/activity" className="underline hover:opacity-50">
            {category}
          </a>

          <ChevronRight size="small" stroke="bold" />

          <a href="/activity" className="underline hover:opacity-50">
            {location}
          </a>

          <ChevronRight size="small" stroke="bold" />

          <span className="text-neutral-80">{title}</span>
        </div>

        <h1 className="mt-2 tracking-wide">{title}</h1>

        <div className="flex items-center gap-2">
          {badges?.map((badge) => (
            <p
              key={badge}
              className="md:py-1 px-2.5 rounded-md bg-neutral-30 text-neutral-80"
            >
              {badge}
            </p>
          ))}
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <Star set="bold" primaryColor="#FDCC0D" size="medium" />

              <p className="text-[#FDCC0D] font-medium">{review?.value}</p>

              <p>
                (
                <span className="underline">
                  {setShortNumber(review?.amount || 0)} review
                </span>
                )
              </p>

              <div className="w-1 h-1 rounded-full bg-neutral-100" />

              <p>{setShortNumber(orderQantity || 0)} dipesan</p>
            </div>

            <div className="flex items-center gap-2">
              <Location size="medium" />

              <p className="underline">{location}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Bookmark size="medium" />

            <p>Tambahkan ke Wishlist</p>
          </div>
        </div>

        <div className="relative mt-4 grid grid-cols-3 gap-1">
          <div className="relative col-span-2 w-full pb-[52.5%]">
            <Image
              src={images?.[0] || ""}
              alt={title || ""}
              sizes="520px"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-l-xl"
            />
          </div>

          <div className="grid gap-1 grid-rows-2">
            <div className="relative col-span-2 w-full pb-[52.5%]">
              <Image
                src={images?.[1] || ""}
                alt={title || ""}
                sizes="320px"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-tr-xl"
              />
            </div>

            <div className="relative col-span-2 w-full pb-[52.5%]">
              <Image
                src={images?.[2] || ""}
                alt={title || ""}
                sizes="320px"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-br-xl"
              />
            </div>
          </div>

          <div className="absolute bottom-4 right-4">
            <button className="py-2 px-4 font-medium rounded-md bg-neutral-10 text-neutral-100 hover:scale-105 duration-200 shadow border border-neutral-100">
              Galeri foto
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ActivityDetail;
