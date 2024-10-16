"use client";

import { useState } from "react";
import { Bookmark, Star } from "react-iconly";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

import SwiperNavigation2 from "@/components/atoms/SwiperNavigation2";

import { setShortNumber } from "@/helpers/methods/number";
import { setCurrency } from "@/helpers/methods/currency";

type Review = {
  value: number;
  amount: number;
};

type Activity = {
  title: string;
  images: string[];
  category: string;
  location: string;
  badges: string[];
  additionalBadge: string | null;
  price: number;
  discount: number;
  review: Review;
  orderQantity: number;
};

const prev = "activity-card-prev";
const next = "activity-card-next";

const ActivityCard = ({
  title,
  images,
  category,
  location,
  badges,
  additionalBadge,
  price,
  discount,
  review,
  orderQantity,
}: Activity) => {
  // state
  const [activityHover, setActivityHover] = useState(false);

  return (
    <Link href={`/activity/${title}`}>
      <div
        className="relative w-full h-full cursor-pointer lg:hover:scale-105 duration-300 rounded-xl overflow-hidden border border-divider-border flex flex-col"
        onMouseEnter={() => setActivityHover(true)}
        onMouseLeave={() => setActivityHover(false)}
      >
        <div
          className={`z-10 absolute top-2 right-2 p-2 rounded-full bg-neutral-10 text-neutral-100 hover:bg-opacity-75 ${
            activityHover ? "" : "hidden"
          }`}
        >
          <Bookmark size="small" />
        </div>

        <div className="w-full">
          <Swiper
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              enabled: true,
              prevEl: `.${prev}`,
              nextEl: `.${next}`,
              disabledClass: "hidden",
            }}
            modules={[Navigation, Pagination]}
            className="mySwiper"
          >
            {images.map((image, index) => (
              <SwiperSlide key={`${title}-${index}`}>
                <div className="relative w-full pb-[62.5%]">
                  <Image
                    src={image}
                    alt={`${title}-${index}`}
                    sizes="320px"
                    loading="lazy"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-t-xl"
                  />
                </div>
              </SwiperSlide>
            ))}

            <SwiperNavigation2
              activityHover={activityHover}
              prev={prev}
              next={next}
            />
          </Swiper>
        </div>

        <div className="flex-1 p-4 grid justify-between gap-4">
          <div className="grid gap-2">
            <div className="w-full flex items-center gap-2 text-neutral-70 overflow-hidden">
              <p className="text-sm whitespace-nowrap">{category}</p>

              <div className="h-1 w-1 rounded-full bg-neutral-70" />

              <p className="text-sm flex-1 whitespace-nowrap">{location}</p>
            </div>

            <h2 className="text-lg font-medium multiline-ellipsis">{title}</h2>

            <div className="flex items-center gap-2 text-neutral-70">
              <Star set="bold" primaryColor="#FDCC0D" size="small" />

              <p className="text-sm text-[#FDCC0D]">{review.value}</p>

              <p className="text-sm">({setShortNumber(review.amount)})</p>

              <div className="w-1 h-1 rounded-full bg-neutral-60" />

              <p className="text-sm">{setShortNumber(orderQantity)} dipesan</p>
            </div>

            <div className="flex items-center gap-2">
              {badges.map((item, index) => (
                <p
                  key={`badge-${index}`}
                  className="text-xs md:text-sm py-1 px-2.5 rounded-md bg-neutral-30 text-neutral-80"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="grid gap-2 items-end">
            <p className="text-sm text-neutral-70">
              Mulai{" "}
              <span className="text-base text-neutral-100 font-medium">
                {setCurrency(price - price * discount)}
              </span>{" "}
              <span className="line-through">{setCurrency(price)}</span>
            </p>

            {additionalBadge ? (
              <div>
                <p className="text-xs md:text-sm inline-block py-2 px-4 rounded-md bg-primary-hover text-primary-main">
                  {additionalBadge}
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ActivityCard;
