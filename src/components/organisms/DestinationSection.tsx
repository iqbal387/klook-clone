"use client";

import { ArrowRight } from "react-iconly";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

import Container from "@/components/atoms/Container";
import SwiperNavigation from "@/components/atoms/SwiperNavigation";

import { destination } from "@/data/destination";

const prev = "destination-prev";
const next = "destination-next";

const DestinationSection = () => (
  <section className="section">
    <Container>
      <h1 className="tracking-wide">Liburan ke mana, ya?</h1>

      <div className="relative">
        <Swiper
          slidesPerView={2}
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
              slidesPerView: 3,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
        >
          {destination.map(({ title, image }, index) => (
            <SwiperSlide key={`destination-${index}`}>
              <div className="relative h-[22rem] rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 duration-150">
                <Image
                  src={image}
                  alt={title}
                  sizes="400px"
                  loading="lazy"
                  fill
                  style={{ objectFit: "cover" }}
                />

                <div className="absolute top-0 left-0 w-full h-full p-6 grid items-end">
                  <h2 className="text-lg sm:text-2xl font-medium">{title}</h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <SwiperNavigation prev={prev} next={next} />
      </div>

      <div className="flex justify-center">
        <button className="py-[0.6rem] w-full max-w-xs flex items-center justify-center gap-2 rounded-lg bg-primary-hover text-primary-main hover:bg-opacity-75">
          <p>Lihat semua</p>

          <ArrowRight size="small" stroke="bold" />
        </button>
      </div>
    </Container>
  </section>
);

export default DestinationSection;
