"use client";

import Image from "next/image";
import { ArrowRight } from "react-iconly";

import Container from "@/components/atoms/Container";

import { selectedContent } from "@/data/blog";

import { formatDate } from "@/helpers/methods/date";

const ArticleSection = () => (
  <section className="section">
    <Container className="grid gap-8 md:gap-10">
      <h1 className="tracking-wide">Informasi menarik lainnya</h1>

      <div className="flex gap-6 items-start">
        <div className="flex-1 grid gap-6">
          {selectedContent
            .slice(0, 4)
            .map(
              ({ title, image, categories, updatedAt, description }, index) => (
                <div
                  key={`blog-${index}`}
                  className="flex flex-col sm:flex-row gap-4 cursor-pointer items-start hover:scale-105 duration-150"
                >
                  <div className="w-full sm:w-[20rem] md:w-[22rem]">
                    <div className="relative w-full pb-[52.5%]">
                      <Image
                        src={image}
                        alt={title}
                        sizes="320px"
                        loading="lazy"
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="flex-1 grid gap-2">
                    <div className="flex gap-4">
                      {categories.map((category) => (
                        <p
                          key={category}
                          className="italic text-info-main text-sm"
                        >
                          {category}
                        </p>
                      ))}
                    </div>

                    <h2 className="text-lg lg:text-xl font-medium tracking-wide multiline-ellipsis">
                      {title}
                    </h2>

                    <p className="text-neutral-70 multiline-ellipsis">
                      {description}
                    </p>

                    <p className="text-neutral-70 italic text-sm">
                      - {formatDate(updatedAt)}
                    </p>
                  </div>
                </div>
              )
            )}
        </div>

        <div className="w-1/3 hidden lg:grid gap-6">
          {selectedContent
            .slice(4)
            .map(
              ({ title, image, categories, updatedAt, description }, index) => (
                <div
                  key={`blog-${index}`}
                  className="grid gap-2 cursor-pointer items-start hover:scale-105 duration-150"
                >
                  <div className="relative w-full pb-[52.5%]">
                    <Image
                      src={image}
                      alt={title}
                      sizes="360px"
                      loading="lazy"
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-xl"
                    />
                  </div>

                  <div className="mt-1 flex gap-4">
                    {categories.map((category) => (
                      <p
                        key={category}
                        className="italic text-info-main text-sm"
                      >
                        {category}
                      </p>
                    ))}
                  </div>

                  <h2 className="text-xl font-medium tracking-wide multiline-ellipsis">
                    {title}
                  </h2>

                  <p className="text-neutral-70 multiline-ellipsis">
                    {description}
                  </p>

                  <p className="text-neutral-70 italic text-sm">
                    - {formatDate(updatedAt)}
                  </p>
                </div>
              )
            )}
        </div>
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

export default ArticleSection;
