"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import Container from "@/components/atoms/Container";
import SwiperNavigation from "@/components/atoms/SwiperNavigation";

import { promo } from "@/data/promo";

const prev = "promo-prev";
const next = "promo-next";

const PromoSection = () => (
  <section className="mt-8 md:mt-12 xl:mt-16 section">
    <Container className="relative">
      <h1 className="tracking-wide">Promo menarik untuk kamu</h1>

      <div className="relative">
        <Swiper
          slidesPerView={1}
          spaceBetween={24}
          pagination={{
            clickable: true,
          }}
          navigation={{
            prevEl: `.${prev}`,
            nextEl: `.${next}`,
            disabledClass: "hidden",
          }}
          modules={[Navigation]}
          className="mySwiper"
          style={{
            overflowY: "visible",
            position: "inherit",
            paddingTop: 32,
            paddingBottom: 32,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              // slidesPerGroup: 2,
            },
            1024: {
              slidesPerView: 3,
              // slidesPerGroup: 3,
            },
          }}
        >
          {promo.map(({ image }, index) => (
            <SwiperSlide key={`promo-${index}`}>
              <div className="relative w-full pb-[42.5%] cursor-pointer hover:-translate-y-4 duration-300">
                <Image
                  src={image}
                  alt={`promo-${index}`}
                  sizes="520px"
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                  className="rounded-xl"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <SwiperNavigation prev={prev} next={next} />
      </div>
    </Container>
  </section>
);

export default PromoSection;
