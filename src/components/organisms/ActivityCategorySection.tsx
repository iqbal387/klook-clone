"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

import Container from "@/components/atoms/Container";
import SwiperNavigation from "@/components/atoms/SwiperNavigation";

import { activity_category } from "@/data/activity_category";

const prev = "activity-category-prev";
const next = "activity-category-next";

const ActivityCategorySection = () => (
  <section className="section">
    <Container>
      <h1 className="tracking-wide">Kegiatan untuk semua traveler</h1>

      <div className="relative">
        <Swiper
          slidesPerView={1}
          spaceBetween={12}
          pagination={{
            clickable: true,
          }}
          navigation={{
            prevEl: `.${prev}`,
            nextEl: `.${next}`,
            disabledClass: "hidden",
          }}
          modules={[Navigation]}
          className="mySwiper text-white"
          style={{
            overflowY: "visible",
            paddingTop: 32,
            paddingBottom: 32,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {activity_category.map(({ title, description, image }, index) => (
            <SwiperSlide key={`activity_category-${index}`}>
              <div className="relative min-h-[16rem] lg:min-h-[20rem] h-full rounded-xl cursor-pointer hover:-translate-y-4 duration-300 overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  sizes="400px"
                  loading="lazy"
                  fill
                  style={{ objectFit: "cover" }}
                />

                <div className="absolute top-0 left-0 w-full h-full p-6 flex flex-col gap-4 justify-between items-start">
                  <div className="grid gap-3">
                    <h2 className="text-3xl font-medium">{title}</h2>

                    <p className="w-2/3">{description}</p>
                  </div>

                  <div className="rounded-lg py-2 px-4 bg-white text-black">
                    Lihat aktivitas
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <SwiperNavigation prev={prev} next={next} />
      </div>
    </Container>
  </section>
);

export default ActivityCategorySection;
