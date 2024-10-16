"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, Search } from "react-iconly";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import Container from "@/components/atoms/Container";

const Banner = () => {
  // ref
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative">
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper text-neutral-100"
        onInit={(swiper) => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          // eslint-disable-next-line no-param-reassign
          swiper.params.navigation.prevEl = prevRef.current;
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          // eslint-disable-next-line no-param-reassign
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        <Container className="z-10 absolute top-1/2 -translate-y-1/2 left-0 right-0 flex flex-col justify-center gap-5 md:px-20 lg:px-20 xl:px-20 2xl:px-0 text-neutral-10">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-wide">
            Your world of joy
          </h1>

          <p className="text-base md:text-xl font-medium tracking-wide">
            Wisata domestik sampai mancanegara, temukan semua aktivitas yang
            bisa membuat bahagia
          </p>

          <div className="relative w-full max-w-4xl">
            <input
              className="w-full py-4 md:py-5 pl-14 md:pl-16 pr-5 md:pr-32 text-base md:text-xl border border-divider-border rounded-xl text-black"
              placeholder="Cari destinasi atau aktivitas"
            />

            <div className="absolute top-3.5 md:top-5 left-4 md:left-5">
              <Search primaryColor="#000" size="medium" />
            </div>

            <div className="hidden md:block absolute top-[0.45rem] right-2 py-3.5 px-10 rounded-xl bg-primary-main text-white text-lg cursor-pointer hover:bg-primary-surface">
              Cari
            </div>
          </div>
        </Container>

        <SwiperSlide>
          <div
            className="h-[36rem]"
            style={{
              backgroundImage: "url(/images/banner/banner_1.webp)",
              backgroundPosition: "50%",
              backgroundSize: "cover",
            }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="h-[36rem]"
            style={{
              backgroundImage: "url(/images/banner/banner_2.webp)",
              backgroundPosition: "50%",
              backgroundSize: "cover",
            }}
          />
        </SwiperSlide>

        <div
          ref={prevRef}
          className="z-10 absolute top-0 bottom-0 left-0 px-0 hidden md:flex items-center cursor-pointer bg-gradient-to-r from-sliderOpacity-from to-sliderOpacity-to"
        >
          <ChevronLeft primaryColor="#fff" size="xlarge" />
        </div>

        <div
          ref={nextRef}
          className="z-10 absolute top-0 bottom-0 right-0 px-4 hidden md:flex items-center cursor-pointer bg-gradient-to-l from-sliderOpacity-from to-sliderOpacity-to"
        >
          <ChevronRight primaryColor="#fff" size="xlarge" />
        </div>
      </Swiper>
    </section>
  );
};

export default Banner;
