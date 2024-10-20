"use client";

import { ArrowRight, ChevronLeft, ChevronRight } from "react-iconly";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Link from "next/link";

import Container from "@/components/atoms/Container";
import ActivityCard from "@/components/molecules/ActivityCard";
import IconButton from "@/components/atoms/IconButton";

import { activity } from "@/data/activity";

const prev = "activity-prev";
const next = "activity-next";

const ActivitySection = () => (
  <section className="section overflow-x-hidden">
    <Container>
      <h1 className="tracking-wide">Aktivitas terbaik</h1>

      <div className="relative">
        <Swiper
          slidesPerView="auto"
          spaceBetween={12}
          pagination={{
            clickable: true,
          }}
          navigation={{
            prevEl: `.${prev}`,
            nextEl: `.${next}`,
            disabledClass: "swiper-disable",
          }}
          modules={[Navigation]}
          className="mySwiper"
          style={{
            overflow: "visible",
            paddingTop: 32,
          }}
          breakpoints={{
            640: {
              spaceBetween: 16,
            },
            768: {
              spaceBetween: 16,
            },
            1024: {
              spaceBetween: 20,
            },
          }}
        >
          {activity.map((item, index) => (
            <SwiperSlide
              key={`activity-${index}`}
              style={{
                width: 320,
                height: "auto !important",
              }}
            >
              <ActivityCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mt-4 md:mt-6 flex justify-between items-center gap-4">
        <Link
          href="/activity"
          className="py-[0.6rem] w-full max-w-xs flex items-center justify-center gap-2 rounded-lg bg-primary-hover text-primary-main hover:bg-opacity-75"
        >
          <p>Lihat semua</p>

          <ArrowRight size="small" stroke="bold" />
        </Link>

        <div className="flex items-center justify-end gap-2.5">
          <IconButton className={prev}>
            <ChevronLeft size="medium" />
          </IconButton>

          <IconButton className={next}>
            <ChevronRight size="medium" />
          </IconButton>
        </div>
      </div>
    </Container>
  </section>
);

export default ActivitySection;
